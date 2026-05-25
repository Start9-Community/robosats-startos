import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_8_5_1 = VersionInfo.of({
  version: '0.8.5:1',
  releaseNotes: {
    en_US: `**Bumps**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    es_ES: `**Cambios**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    de_DE: `**Aktualisierungen**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    pl_PL: `**Aktualizacje**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    fr_FR: `**Mises à jour**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
  },
  migrations: {
    // 0.8.5-alpha was pulled (incompatible with current coordinators); no
    // upgrade path leads into it.
    up: IMPOSSIBLE,
    // Let boxes stranded on 0.8.5:1 downgrade to 0.8.4:3. No data changes are
    // needed — the difference was the client image, not on-disk data.
    down: async () => {},
  },
})
