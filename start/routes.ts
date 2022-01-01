import Route from '@ioc:Adonis/Core/Route'
import Config from '@ioc:Adonis/Core/Config'
import { AdoscopeConfig } from 'Config/adoscope'

const adoscopeConfig = Config.get('adoscope') as AdoscopeConfig

Route.get(adoscopeConfig.path, ({ view }) => view.render('telescope'))
Route.get('/telescope-api/entries', 'EntriesController.index')
Route.get('/telescope-api/entries/:id', 'EntriesController.show')
