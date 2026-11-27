import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8:1',
  releaseNotes: {
    en_US: 'Maintenance update. RoboSats itself is unchanged.',
    es_ES: 'Actualización de mantenimiento. RoboSats no cambia.',
    de_DE: 'Wartungsupdate. RoboSats selbst bleibt unverändert.',
    pl_PL: 'Aktualizacja konserwacyjna. Sam RoboSats się nie zmienia.',
    fr_FR: 'Mise à jour de maintenance. RoboSats lui-même ne change pas.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
