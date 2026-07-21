import { sdk } from './sdk'
import { i18n } from './i18n'
import { uiHostId, uiInterfaceId } from './interfaces'
import { bridgeAddress } from './utils'
import { socksHostId, socksPort } from 'tor-startos/startos/utils'

export const main = sdk.setupMain(async ({ effects }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info(i18n('Starting Robosats!'))

  // Tor's SOCKS proxy over the LXC bridge. tor binds SOCKS at <osIp>:9050 and
  // the 9050 fallback keeps the mapped value constant, so this `.const()` never
  // restarts Robosats on tor install/update/uninstall (only a healing restart
  // if tor's SOCKS ever landed on a different port). Split into IP and port for
  // the daemon's separate `TOR_PROXY_IP`/`TOR_PROXY_PORT` env.
  const [torIp, torPort] = (
    await bridgeAddress(effects, {
      packageId: 'tor',
      hostId: socksHostId,
      internalPort: socksPort,
      fallbackPort: socksPort,
    }).const()
  ).split(':')

  // The service's own LXC-bridge (lxcbr0) URL for its `ui` interface, used by
  // the in-box `/selfhosted` health check. The map fn returns just the resolved
  // URL, so `.const()` re-runs `main` only if that URL changes (binding
  // removed/re-added).
  const uiUrl = await sdk.host
    .getOwn(effects, uiHostId, (host) => {
      const iface = Object.values(host?.bindings ?? {})
        .flatMap((b) => Object.values(b.interfaces))
        .find((i) => i.id === uiInterfaceId)
      return iface
        ? iface.addressInfo
            .filter({ kind: 'bridge', predicate: (h) => !h.ssl })
            .format('urlstring')[0]
        : undefined
    })
    .const()

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: sdk.SubContainer.of(
      effects,
      { imageId: 'robosats' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/root',
        readonly: false,
      }),
      'robosats-sub',
    ),
    exec: {
      command: sdk.useEntrypoint(),
      env: {
        TOR_PROXY_IP: torIp,
        TOR_PROXY_PORT: torPort,
      },
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        uiUrl
          ? sdk.healthCheck.checkWebUrl(effects, `${uiUrl}/selfhosted`, {
              successMessage: i18n('The web interface is ready'),
              errorMessage: i18n('The web interface is not ready'),
            })
          : Promise.resolve({
              result: 'starting' as const,
              message: i18n('The web interface is not ready'),
            }),
    },
    requires: [],
  })
})
