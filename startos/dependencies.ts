import { torDescription } from './manifest/i18n'
import { sdk } from './sdk'

const tor = sdk.Dependency.required('tor', {
  description: torDescription,
  metadata: {
    title: 'Tor',
    icon: 'https://raw.githubusercontent.com/Start9Labs/tor-startos/65faea17febc739d910e8c26ff4e61f6333487a8/icon.svg',
  },
  kind: 'running',
  versionRange: '>=0.4.9.11:4',
  healthChecks: ['tor'],
})

export const dependencies = sdk.Dependencies.of().addDependency(tor)
