import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Statistics } from 'App/Services/Statistics'
import Entry from 'App/Models/Entry'

export default class EntriesController {
  /**
   * Fetch at most 50 entries from the database
   */
  public async index({ request }: HttpContextContract) {
    const qs = request.qs()
    return Entry.query()
      .where('type', '=', qs.type)
      .limit(qs.entriesPerRequest || 50)
      .if(qs.before, (query) => query.where('sequence_id', '<', qs.before))
      .orderBy('sequence_id', 'desc')
  }

  /**
   * Fetch an entry by its id with the related entries ( batch )
   */
  public async show({ params }: HttpContextContract) {
    const entry = await Entry.findOrFail(params.id)
    return {
      entry,
      batch: await Entry.query()
        .where('batch_id', '=', entry.batchId)
        .andWhere('id', '!=', entry.id),
    }
  }

  /**
   * Return statistics about the entries to display on the dashboard
   */
  public async getStatistics({}: HttpContextContract) {
    return Statistics.getDashboardStatistics()
  }
}
