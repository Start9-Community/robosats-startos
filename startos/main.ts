import { sdk } from './sdk'
import { i18n } from './i18n'
import { uiHostId, uiInterfaceId } from './interfaces'

export const main = sdk.setupMain(async ({ effects }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info(i18n('Starting Robosats!'))

  // Tor's SOCKS proxy container IP — replaces the retired `tor.startos` DNS name.
  // Robosats restarts if the IP changes.
  const torIp = await sdk.getContainerIp(effects, { packageId: 'tor' }).const()

  // The service's own LXC-bridge (lxcbr0) URL for its `ui` interface, replacing
  // the retired `robosats.startos:<port>` DNS name for the in-box self-check.
  // The map fn returns just the resolved URL, so `.const()` re-runs `main` only
  // if that URL changes (binding removed/re-added).
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
        TOR_PROXY_PORT: '9050',
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
