import RequestsIndex from '../components/screens/requests/RequestsIndex.vue'
import RequestPreview from '../components/screens/requests/RequestPreview.vue'

import CommandsIndex from '../components/screens/commands/CommandsIndex.vue'
import CommandPreview from '../components/screens/commands/CommandPreview.vue'

import QueriesIndex from '../components/screens/QueriesIndex.vue'

export default [
  { path: '/', redirect: '/requests' },

  /**
   * Requests
   */
  {
    path: '/requests/:id',
    name: 'request-preview',
    component: RequestPreview,
  },
  {
    path: '/requests',
    name: 'requests',
    component: RequestsIndex,
  },

  /**
   * Commands
   */
  {
    path: '/commands/:id',
    name: 'command-preview',
    component: CommandPreview,
  },
  {
    path: '/commands',
    name: 'commands',
    component: CommandsIndex,
  },

  {
    path: '/queries',
    name: 'queries',
    component: QueriesIndex,
  },
]
