import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.8:1',
  releaseNotes: {
    en_US:
      'Rebuilt with the latest StartOS SDK. It fixes health checks using more memory the longer the service runs. RoboSats itself is unchanged.',
    es_ES:
      'Recompilado con el SDK de StartOS más reciente. Corrige que las comprobaciones de estado usaran más memoria cuanto más tiempo funcionaba el servicio. RoboSats no cambia.',
    de_DE:
      'Mit dem neuesten StartOS-SDK neu gebaut. Behebt, dass Integritätsprüfungen mit der Laufzeit des Dienstes immer mehr Speicher belegten. RoboSats selbst bleibt unverändert.',
    pl_PL:
      'Zbudowano ponownie z najnowszym SDK StartOS. Naprawia rosnące zużycie pamięci przez sprawdzanie stanu w miarę działania usługi. Sam RoboSats się nie zmienia.',
    fr_FR:
      "Reconstruit avec le dernier SDK StartOS. Corrige l'augmentation de la mémoire utilisée par les contrôles de santé au fil du temps. RoboSats lui-même ne change pas.",
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
