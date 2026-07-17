import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_0_8_4_4 } from './v0.8.4_4'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_0_8_4_4],
})
