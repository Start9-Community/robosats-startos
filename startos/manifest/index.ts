import { setupManifest } from '@start9labs/start-sdk'
import i18n from './i18n'

export const manifest = setupManifest({
  id: 'robosats',
  title: 'Robosats',
  license: 'AGPL-V3',
  packageRepo: 'https://github.com/Start9-Community/robosats-startos',
  upstreamRepo: 'https://github.com/Reckless-Satoshi/robosats',
  marketingUrl: 'https://learn.robosats.com/',
  donationUrl: 'https://learn.robosats.com/contribute/donate/',
  description: i18n.description,
  volumes: ['main'],
  images: {
    robosats: {
      source: {
        dockerTag:
          'recksato/robosats-client:v0.8.7-alpha@sha256:87b377ac3bde6fb5067fa64fd31ffbcf8861167f0e0a7f1d0d9bcc3c38cc75cb',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
