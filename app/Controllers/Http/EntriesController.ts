import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entry from 'App/Models/Entry'

export default class EntriesController {
  public async index({ request }: HttpContextContract) {
    const qs = request.qs()
    return Entry.query()
      .where('type', '=', qs.type)
      .limit(qs.entriesPerRequest || 50)
      .if(qs.before, (query) => query.where('sequence_id', '<', qs.before))
      .orderBy('sequence_id', 'desc')
  }

  public async show({ params, request }: HttpContextContract) {
    return Entry.findOrFail(params.id)
  }
}
