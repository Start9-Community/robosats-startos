import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.7:1',
  releaseNotes: {
    en_US: `Upgrades RoboSats to 0.8.7-alpha.

Fixes a broken Web UI on 0.8.7:0: the 0.8.7 client serves HTTPS behind a self-signed certificate on its own port, which the package was still binding and health-checking as plain HTTP.

Highlights: new coordinators (Eleuteria, Freeport, Ammanaya), image uploads in encrypted chat via Blossom, live coordinator ranking by DevFund donation value, a federation consensus mechanism, 3 new payment methods (eBay Gift Card, MobilePay, PYUSD), and security hardening across the full stack. FreedomSats has been removed. Your robot token is untouched by the update; back it up as always. Upstream notes: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha`,
    es_ES: `Actualiza RoboSats a la versión 0.8.7-alpha.

Corrige la interfaz web rota en 0.8.7:0: el cliente 0.8.7 sirve HTTPS con un certificado autofirmado en su propio puerto, que el paquete seguía tratando como HTTP simple.

Novedades: nuevos coordinadores (Eleuteria, Freeport, Ammanaya), subida de imágenes cifradas en el chat mediante Blossom, clasificación de coordinadores en directo según donaciones al DevFund, mecanismo de consenso de federación, 3 nuevos métodos de pago (eBay Gift Card, MobilePay, PYUSD) y refuerzo de seguridad en toda la pila. FreedomSats ha sido eliminado. La actualización no toca tu ficha de robot; hazle copia como siempre. Notas oficiales: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha`,
    de_DE: `Aktualisiert RoboSats auf 0.8.7-alpha.

Behebt die defekte Weboberfläche in 0.8.7:0: Der 0.8.7-Client liefert HTTPS mit einem selbstsignierten Zertifikat auf seinem eigenen Port aus, den das Paket weiterhin als einfaches HTTP behandelte.

Highlights: Neue Koordinatoren (Eleuteria, Freeport, Ammanaya), Bild-Uploads im verschlüsselten Chat via Blossom, Live-Koordinator-Ranking nach DevFund-Spendenvolumen, Föderations-Konsensmechanismus, 3 neue Zahlungsmethoden (eBay-Geschenkkarte, MobilePay, PYUSD) und Sicherheitshärtung im gesamten Stack. FreedomSats wurde entfernt. Dein Roboter-Token bleibt von der Aktualisierung unberührt; sichere ihn wie gewohnt. Offizielle Hinweise: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha`,
    pl_PL: `Aktualizuje RoboSats do wersji 0.8.7-alpha.

Naprawia zepsuty interfejs webowy w 0.8.7:0: klient 0.8.7 udostępnia HTTPS z certyfikatem samopodpisanym na własnym porcie, który pakiet nadal traktował jako zwykły HTTP.

Nowości: nowi koordynatorzy (Eleuteria, Freeport, Ammanaya), przesyłanie zaszyfrowanych obrazów w czacie przez Blossom, ranking koordynatorów na żywo według wartości darowizn DevFund, mechanizm konsensusu federacji, 3 nowe metody płatności (karta podarunkowa eBay, MobilePay, PYUSD) oraz wzmocnienie bezpieczeństwa w całym stosie. FreedomSats został usunięty. Twój token robota nie zostaje naruszony przez aktualizację; jak zawsze zrób jego kopię. Informacje od twórców: https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha`,
    fr_FR: `Met RoboSats à jour vers la version 0.8.7-alpha.

Corrige l'interface web cassée en 0.8.7:0 : le client 0.8.7 sert du HTTPS avec un certificat auto-signé sur son propre port, que le paquet traitait encore comme du HTTP simple.

Points forts : nouveaux coordinateurs (Eleuteria, Freeport, Ammanaya), envoi d'images chiffrées dans le chat via Blossom, classement des coordinateurs en direct selon les dons au DevFund, mécanisme de consensus de fédération, 3 nouvelles méthodes de paiement (carte cadeau eBay, MobilePay, PYUSD) et durcissement de la sécurité sur toute la pile. FreedomSats a été retiré. Votre jeton robot n'est pas touché par la mise à jour ; sauvegardez-le comme toujours. Notes officielles : https://github.com/RoboSats/robosats/releases/tag/v0.8.7-alpha`,
  },
  migrations: {},
})
