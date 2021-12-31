export default [
  { path: '/', redirect: '/requests' },

  /**
   * Requests
   */
  {
    path: '/requests/:id',
    name: 'request-preview',
    component: () => import('../components/screens/requests/RequestPreview.vue'),
  },
  {
    path: '/requests',
    name: 'requests',
    component: () => import('../components/screens/requests/RequestsIndex.vue'),
  },

  /**
   * Commands
   */
  {
    path: '/commands/:id',
    name: 'command-preview',
    component: () => import('../components/screens/commands/CommandPreview.vue'),
  },
  {
    path: '/commands',
    name: 'commands',
    component: () => import('../components/screens/commands/CommandsIndex.vue'),
  },

  /**
   * Queries
   */
  {
    path: '/queries/:id',
    name: 'query-preview',
    component: () => import('../components/screens/queries/QueryPreview.vue'),
  },
  {
    path: '/queries',
    name: 'queries',
    component: () => import('../components/screens/queries/QueriesIndex.vue'),
  },

  /**
   * Events
   */
  {
    path: '/events',
    name: 'events',
    component: () => import('../components/screens/events/EventsIndex.vue'),
  },
  {
    path: '/events/:id',
    name: 'event-preview',
    component: () => import('../components/screens/events/EventPreview.vue'),
  },
]
