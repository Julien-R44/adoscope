import { RouteMiddlewareHandler } from '@ioc:Adonis/Core/Route'
import Env from '@ioc:Adonis/Core/Env'

export interface AdoscopeConfig {
  path: string
  storage: {
    databaseConnection: string
  }
  enabled: boolean
  middlewares: RouteMiddlewareHandler[]

  // TODO: Support theses properties when watchers are done
  onlyPaths: string[]
  ignorePaths: string[]
  ignoreCommands: string[]

  // TODO: Add support for enabling specific watchers
}

const adoscope: AdoscopeConfig = {
  /*
  |--------------------------------------------------------------------------
  | Adoscope Path
  |--------------------------------------------------------------------------
  |
  | This is the URI path where Adoscope will be accessible from. Feel free
  | to change this path to anything you like. Note that the URI will not
  | affect the paths of its internal API that aren't exposed to users.
  |
  */
  path: Env.get('ADOSCOPE_PATH', 'telescope'),

  /*
  |--------------------------------------------------------------------------
  | Adoscope Database Connection
  |--------------------------------------------------------------------------
  |
  | This configuration options determines the database connection that will
  | be used to store Adoscope's data.
  |
  */
  storage: {
    databaseConnection: Env.get('DB_CONNECTION', 'pg'),
  },

  /*
  |--------------------------------------------------------------------------
  | Adoscope Master Switch
  |--------------------------------------------------------------------------
  |
  | This option may be used to disable all Adoscope watchers regardless
  | of their individual configuration, which simply provides a single
  | and convenient way to enable or disable Adoscope data storage.
  |
  */
  enabled: Env.get('ADOSCOPE_ENABLED', true),

  /*
  |--------------------------------------------------------------------------
  | Adoscope Route Middleware
  |--------------------------------------------------------------------------
  |
  | These middleware will be assigned to every Adoscope route, giving you
  | the chance to add your own middleware to this list or change any of
  | the existing middleware. Or, you can simply stick with this list.
  |
  */
  middlewares: [],

  /*
  |--------------------------------------------------------------------------
  | Allowed / Ignored Paths & Commands
  |--------------------------------------------------------------------------
  |
  | The following array lists the URI paths and Artisan commands that will
  | not be watched by Telescope. In addition to this list, some Laravel
  | commands, like migrations and queue commands, are always ignored.
  |
  */
  onlyPaths: [
    // 'api/*'
  ],

  ignorePaths: [
    'telescope*',
    //
  ],

  ignoreCommands: [
    //
  ],
}

export default adoscope
