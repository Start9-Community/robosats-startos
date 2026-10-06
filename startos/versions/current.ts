import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const current = VersionInfo.of({
  version: '0.8.7:2',
  releaseNotes: {
    en_US: `Upgrades RoboSats to 0.8.7-alpha.

Fixes the Web UI, which did not load on 0.8.7:0.

Highlights: new coordinators (Eleuteria, Freeport, Ammanaya), image uploads in encrypted chat via Blossom, live coordinator ranking by DevFund donation value, a federation consensus mechanism, 3 new payment methods (eBay Gift Card, MobilePay, PYUSD), and security hardening across the full stack. FreedomSats has been removed. Your robot token is untouched by the update; back it up as always. Upstream notes: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha

- The network interface left behind by the StartOS 0.3.5 version of this package is removed and its port freed. A domain or .onion address you had added to it no longer reaches RoboSats; add one to the Web UI interface instead.`,
    es_ES: `Actualiza RoboSats a la versión 0.8.7-alpha.

Corrige la interfaz web, que no cargaba en 0.8.7:0.

Novedades: nuevos coordinadores (Eleuteria, Freeport, Ammanaya), subida de imágenes cifradas en el chat mediante Blossom, clasificación de coordinadores en directo según donaciones al DevFund, mecanismo de consenso de federación, 3 nuevos métodos de pago (eBay Gift Card, MobilePay, PYUSD) y refuerzo de seguridad en toda la pila. FreedomSats ha sido eliminado. La actualización no toca tu ficha de robot; hazle copia como siempre. Notas oficiales: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha

- Se elimina la interfaz de red que dejó la versión de este paquete para StartOS 0.3.5 y se libera su puerto. Un dominio o una dirección .onion que hubieras añadido a ella ya no lleva a RoboSats; añade uno a la interfaz «Interfaz web» en su lugar.`,
    de_DE: `Aktualisiert RoboSats auf 0.8.7-alpha.

Behebt die Weboberfläche, die in 0.8.7:0 nicht geladen wurde.

Highlights: Neue Koordinatoren (Eleuteria, Freeport, Ammanaya), Bild-Uploads im verschlüsselten Chat via Blossom, Live-Koordinator-Ranking nach DevFund-Spendenvolumen, Föderations-Konsensmechanismus, 3 neue Zahlungsmethoden (eBay-Geschenkkarte, MobilePay, PYUSD) und Sicherheitshärtung im gesamten Stack. FreedomSats wurde entfernt. Dein Roboter-Token bleibt von der Aktualisierung unberührt; sichere ihn wie gewohnt. Offizielle Hinweise: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha

- Die Netzwerkschnittstelle, die die StartOS-0.3.5-Version dieses Pakets hinterlassen hatte, wird entfernt und ihr Port freigegeben. Eine Domain oder .onion-Adresse, die du ihr hinzugefügt hattest, führt nicht mehr zu RoboSats; füge stattdessen eine der Schnittstelle „Web-UI“ hinzu.`,
    pl_PL: `Aktualizuje RoboSats do wersji 0.8.7-alpha.

Naprawia interfejs webowy, który nie ładował się w wersji 0.8.7:0.

Nowości: nowi koordynatorzy (Eleuteria, Freeport, Ammanaya), przesyłanie zaszyfrowanych obrazów w czacie przez Blossom, ranking koordynatorów na żywo według wartości darowizn DevFund, mechanizm konsensusu federacji, 3 nowe metody płatności (karta podarunkowa eBay, MobilePay, PYUSD) oraz wzmocnienie bezpieczeństwa w całym stosie. FreedomSats został usunięty. Twój token robota nie zostaje naruszony przez aktualizację; jak zawsze zrób jego kopię. Informacje od twórców: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha

- Interfejs sieciowy pozostawiony przez wersję tego pakietu dla StartOS 0.3.5 zostaje usunięty, a jego port zwolniony. Domena lub adres .onion dodany do niego nie prowadzi już do RoboSats; zamiast tego dodaj go do interfejsu „Interfejs webowy”.`,
    fr_FR: `Met RoboSats à jour vers la version 0.8.7-alpha.

Corrige l'interface web, qui ne se chargeait pas en 0.8.7:0.

Points forts : nouveaux coordinateurs (Eleuteria, Freeport, Ammanaya), envoi d'images chiffrées dans le chat via Blossom, classement des coordinateurs en direct selon les dons au DevFund, mécanisme de consensus de fédération, 3 nouvelles méthodes de paiement (carte cadeau eBay, MobilePay, PYUSD) et durcissement de la sécurité sur toute la pile. FreedomSats a été retiré. Votre jeton robot n'est pas touché par la mise à jour ; sauvegardez-le comme toujours. Notes officielles : https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha

- L'interface réseau laissée par la version de ce paquet pour StartOS 0.3.5 est supprimée et son port libéré. Un domaine ou une adresse .onion que vous y aviez ajouté ne mène plus à RoboSats ; ajoutez-en un à l'interface « Interface web » à la place.`,
  },
  migrations: {
    up: async ({ effects }) => {
      await sdk.MultiHost.of(effects, 'main').retire()
    },
    down: IMPOSSIBLE,
  },
})
