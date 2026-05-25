import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'

export const v_0_8_4_3 = VersionInfo.of({
  version: '0.8.4:3',
  releaseNotes: {
    en_US: `- Reverts the RoboSats client to 0.8.4-alpha — 0.8.5-alpha was incompatible with current coordinators
- Rebuilt on start-sdk 1.5.3`,
    es_ES: `- Revierte el cliente de RoboSats a 0.8.4-alpha — 0.8.5-alpha era incompatible con los coordinadores actuales
- Reconstruido sobre start-sdk 1.5.3`,
    de_DE: `- Setzt den RoboSats-Client auf 0.8.4-alpha zurück — 0.8.5-alpha war mit den aktuellen Koordinatoren inkompatibel
- Neu erstellt mit start-sdk 1.5.3`,
    pl_PL: `- Przywraca klienta RoboSats do 0.8.4-alpha — 0.8.5-alpha był niezgodny z obecnymi koordynatorami
- Przebudowano na start-sdk 1.5.3`,
    fr_FR: `- Rétablit le client RoboSats à 0.8.4-alpha — 0.8.5-alpha était incompatible avec les coordinateurs actuels
- Reconstruit sur start-sdk 1.5.3`,
  },
  migrations: {
    up: async ({ effects }) => {
      await rm('/media/startos/volumes/main/start9', { recursive: true }).catch(
        console.error,
      )
    },
    down: IMPOSSIBLE,
  },
})
