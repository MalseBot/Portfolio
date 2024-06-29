import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  jobTitle: 'front-end',
})
let frontEnd = 'front-end'
let copywriter = 'copywriter'

export { setGlobalState, useGlobalState, copywriter, frontEnd }
