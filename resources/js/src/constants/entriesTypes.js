import RequestIndex from '../components/screens/RequestIndex.vue'

export const entriesTypes = [
  {
    icon: 'carbon:network-admin-control',
    name: 'Requests',
    indexScreenComponent: RequestIndex,
  },
  {
    icon: 'carbon:screen',
    name: 'Commands',
  },

  {
    icon: 'carbon:data-base',
    name: 'Queries',
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
