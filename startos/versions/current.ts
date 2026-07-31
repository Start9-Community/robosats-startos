import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.4:5',
  releaseNotes: {
    en_US: `Rolls RoboSats back to 0.8.4-alpha.

0.8.5-alpha could not reach the current coordinators, and upstream has since withdrawn it — 0.8.4-alpha is the latest release RoboSats publishes. This restores trading against the live coordinator set. Your robot tokens are left untouched by the update; back your token up, as always, so you can recover a robot if you need to. Upstream notes: https://github.com/RoboSats/robosats/releases/tag/v0.8.4-alpha`,
    es_ES: `Revierte RoboSats a la versión 0.8.4-alpha.

La 0.8.5-alpha no lograba conectar con los coordinadores actuales, y desde entonces se ha retirado — 0.8.4-alpha es la última versión que publica RoboSats. Esto restablece las operaciones con el conjunto de coordinadores en activo. La actualización no toca tus fichas de robot; haz copia de tu ficha, como siempre, para poder recuperar un robot si lo necesitas. Notas oficiales: https://github.com/RoboSats/robosats/releases/tag/v0.8.4-alpha`,
    de_DE: `Setzt RoboSats auf 0.8.4-alpha zurück.

0.8.5-alpha erreichte die aktuellen Koordinatoren nicht und wurde vom Projekt inzwischen zurückgezogen — 0.8.4-alpha ist die neueste von RoboSats veröffentlichte Version. Damit ist der Handel mit den aktiven Koordinatoren wieder möglich. Deine Roboter-Token bleiben von der Aktualisierung unberührt; sichere dein Token wie gewohnt, damit du einen Roboter bei Bedarf wiederherstellen kannst. Offizielle Hinweise: https://github.com/RoboSats/robosats/releases/tag/v0.8.4-alpha`,
    pl_PL: `Przywraca RoboSats do wersji 0.8.4-alpha.

Wersja 0.8.5-alpha nie łączyła się z aktualnymi koordynatorami i została przez projekt wycofana — 0.8.4-alpha to najnowsze wydanie publikowane przez RoboSats. Przywraca to handel z aktywnym zestawem koordynatorów. Aktualizacja nie narusza twoich tokenów robota; jak zawsze zrób kopię tokenu, aby móc odzyskać robota w razie potrzeby. Informacje od twórców: https://github.com/RoboSats/robosats/releases/tag/v0.8.4-alpha`,
    fr_FR: `Ramène RoboSats à la version 0.8.4-alpha.

La 0.8.5-alpha ne parvenait pas à joindre les coordinateurs actuels, et le projet l'a depuis retirée — 0.8.4-alpha est la dernière version publiée par RoboSats. Les échanges avec les coordinateurs actifs redeviennent ainsi possibles. La mise à jour ne touche pas à vos jetons de robot ; sauvegardez votre jeton, comme toujours, afin de pouvoir récupérer un robot en cas de besoin. Notes officielles : https://github.com/RoboSats/robosats/releases/tag/v0.8.4-alpha`,
  },
  migrations: {},
})
