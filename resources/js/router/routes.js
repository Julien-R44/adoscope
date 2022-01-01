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

  /**
   * redis
   */
  {
    path: '/mails',
    name: 'mails',
    component: () => import('../components/screens/mails/MailsIndex.vue'),
  },
  {
    path: '/mails/:id',
    name: 'mail-preview',
    component: () => import('../components/screens/mails/MailPreview.vue'),
  },

  /**
   * Redis
   */
  {
    path: '/redis',
    name: 'redis',
    component: () => import('../components/screens/redis/RedisIndex.vue'),
  },
  {
    path: '/redis/:id',
    name: 'redis-preview',
    component: () => import('../components/screens/redis/RedisPreview.vue'),
  },

  /**
   * Models
   */
  {
    path: '/models',
    name: 'models',
    component: () => import('../components/screens/models/ModelsIndex.vue'),
  },
  {
    path: '/models/:id',
    name: 'model-preview',
    component: () => import('../components/screens/models/ModelPreview.vue'),
  },

  /**
   * Logs
   */
  {
    path: '/logs',
    name: 'logs',
    component: () => import('../components/screens/logs/LogsIndex.vue'),
  },
  {
    path: '/logs/:id',
    name: 'log-preview',
    component: () => import('../components/screens/logs/LogPreview.vue'),
  },
]
