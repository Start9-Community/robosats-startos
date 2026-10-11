import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.7:3',
  releaseNotes: {
    en_US:
      'Updated the StartOS SDK to 3.0.4 and removed one-time upgrade guidance from the instructions.',
    es_ES:
      'Se actualiza el SDK de StartOS a la versión 3.0.4 y se eliminan de las instrucciones las indicaciones para una actualización puntual.',
    de_DE:
      'Das StartOS-SDK wurde auf 3.0.4 aktualisiert und einmalige Aktualisierungshinweise wurden aus der Anleitung entfernt.',
    pl_PL:
      'Zaktualizowano SDK StartOS do wersji 3.0.4 i usunięto z instrukcji wskazówki dotyczące jednorazowej aktualizacji.',
    fr_FR:
      'Le SDK StartOS a été mis à jour vers la version 3.0.4 et les consignes de mise à jour ponctuelle ont été retirées des instructions.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
