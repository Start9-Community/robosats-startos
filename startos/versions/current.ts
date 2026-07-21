import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.5:0',
  releaseNotes: {
    en_US: `Updated RoboSats to 0.8.5-alpha.

This release also migrates the package to start-sdk 2.0 (requires StartOS 0.4.0-beta.10 or later).

Full release notes: https://github.com/RoboSats/robosats/releases`,
    es_ES: `Actualiza RoboSats a 0.8.5-alpha.

Esta versión también migra el paquete a start-sdk 2.0 (requiere StartOS 0.4.0-beta.10 o posterior).

Notas de la versión completas: https://github.com/RoboSats/robosats/releases`,
    de_DE: `Aktualisiert RoboSats auf 0.8.5-alpha.

Diese Version stellt das Paket außerdem auf start-sdk 2.0 um (erfordert StartOS 0.4.0-beta.10 oder neuer).

Vollständige Versionshinweise: https://github.com/RoboSats/robosats/releases`,
    pl_PL: `Aktualizuje RoboSats do 0.8.5-alpha.

Ta wersja przenosi też pakiet na start-sdk 2.0 (wymaga StartOS 0.4.0-beta.10 lub nowszego).

Pełne informacje o wydaniu: https://github.com/RoboSats/robosats/releases`,
    fr_FR: `Met à jour RoboSats vers 0.8.5-alpha.

Cette version fait également passer le paquet à start-sdk 2.0 (nécessite StartOS 0.4.0-beta.10 ou une version ultérieure).

Notes de version complètes : https://github.com/RoboSats/robosats/releases`,
  },
  migrations: {},
})
