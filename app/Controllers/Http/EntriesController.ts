import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entry from 'App/Models/Entry'

export default class EntriesController {
  public async index({ request }: HttpContextContract) {
    return Entry.query().where('type', '=', request.qs().type)
  }
}
