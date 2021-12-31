import RequestsIndex from '../components/screens/requests/RequestsIndex.vue'
import RequestPreview from '../components/screens/requests/RequestPreview.vue'
import CommandsIndex from '../components/screens/CommandsIndex.vue'
import QueriesIndex from '../components/screens/QueriesIndex.vue'

export default [
  { path: '/', redirect: '/requests' },
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
