import { VersionGraph } from '@start9labs/start-sdk'
import { v_0_8_4_3 } from './v0.8.4.3'
import { v_0_8_5_1 } from './v0.8.5.1'

export const versionGraph = VersionGraph.of({
  current: v_0_8_4_3,
  other: [v_0_8_5_1],
})
