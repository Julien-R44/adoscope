import Route from '@ioc:Adonis/Core/Route'

Route.get('/telescope', ({ view }) => view.render('telescope'))
Route.get('/telescope-api/entries', 'EntriesController.index')
Route.get('/telescope-api/entries/:id', 'EntriesController.show')
