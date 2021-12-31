import RequestIndex from '../components/screens/RequestsIndex.vue'
import CommandsIndex from '../components/screens/CommandsIndex.vue'
import QueriesIndex from '../components/screens/QueriesIndex.vue'

export const entriesTypes = [
  {
    icon: 'carbon:network-admin-control',
    name: 'Requests',
    indexScreenComponent: RequestIndex,
  },
  {
    icon: 'carbon:screen',
    name: 'Commands',
    indexScreenComponent: CommandsIndex,
  },

  {
    icon: 'carbon:data-base',
    name: 'Queries',
    indexScreenComponent: QueriesIndex,
  },
  {
    icon: 'carbon:event',
    name: 'Events',
  },
  {
    icon: 'carbon:mail-all',
    name: 'Mails',
  },
  {
    icon: 'carbon:edge-node-alt',
    name: 'Redis',
  },
  {
    icon: 'carbon:layers',
    name: 'Models',
  },
  {
    icon: 'carbon:debug',
    name: 'Exceptions',
  },
  {
    icon: 'carbon:catalog',
    name: 'Logs',
  },
]
