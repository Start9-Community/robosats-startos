import { setupManifest } from '@start9labs/start-sdk'
import i18n from './i18n'

const depTorDescription = {
  en_US: 'Used to connect to RoboSats coordinators privately',
  es_ES:
    'Se usa para conectarse a los coordinadores de RoboSats de forma privada',
  de_DE: 'Wird für die private Verbindung zu RoboSats-Koordinatoren verwendet',
  pl_PL: 'Używany do prywatnego łączenia się z koordynatorami RoboSats',
  fr_FR:
    'Utilisé pour se connecter aux coordinateurs RoboSats de manière privée',
}

export const manifest = setupManifest({
  id: 'robosats',
  title: 'Robosats',
  license: 'AGPL-V3',
  packageRepo: 'https://github.com/Start9Labs/robosats-startos',
  upstreamRepo: 'https://github.com/Reckless-Satoshi/robosats',
  marketingUrl: 'https://learn.robosats.com/',
  donationUrl: 'https://learn.robosats.com/contribute/donate/',
  description: i18n.description,
  volumes: ['main'],
  images: {
    robosats: {
      source: {
        dockerTag: 'recksato/robosats-client:v0.8.5-alpha',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    tor: {
      optional: false,
      description: depTorDescription,
      metadata: {
        title: 'Tor',
        icon: 'https://raw.githubusercontent.com/Start9Labs/tor-startos/65faea17febc739d910e8c26ff4e61f6333487a8/icon.svg',
      },
    },
  },
})
