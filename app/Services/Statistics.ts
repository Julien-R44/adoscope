import Database from '@ioc:Adonis/Lucid/Database'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'

export class Statistics {
  /**
   * Aggregate all statistics to display on the dashboard
   */
  public static async getDashboardStatistics() {
    const counts = await this.getCountOfEachEntryType()
    const avgRequestTime = await this.getAverageFromContentField('duration', EntryType.REQUEST)
    const avgQueryTime = await this.getAverageFromContentField('time', EntryType.QUERY)
    const slowestEndpoints = await this.getSlowestEndpoints()
    const lastEndpointsError = await this.getLastEndpointsError()

    return {
      counts,
      avgRequestTime,
      avgQueryTime,
      slowestEndpoints,
      lastEndpointsError,
    }
  }

  /**
   * Get count of each entry type
   */
  private static async getCountOfEachEntryType() {
    return Database.from(Entry.table)
      .select('type', Database.raw('count(*) as count'))
      .groupBy('type')
  }

  /**
   * Compute an average from a given field that is stored in the `content` jsonb column
   */
  private static async getAverageFromContentField(field: string, type?: EntryType) {
    const result = await Database.from(Entry.table)
      .select(Database.raw(`avg((content->>'${field}')::numeric) as avg`))
      .if(type, (query) => query.where('type', '=', type as EntryType))
      .first()

    return result?.avg || 0
  }

  /**
   * Fetch the 5 slowest endpoints by using content->>'duration' that contains
   * the duration of the request in milliseconds
   */
  private static async getSlowestEndpoints() {
    return Database.from(Entry.table)
      .select('*')
      .where('type', '=', EntryType.REQUEST)
      .orderByRaw("content->>'duration' DESC")
      .limit(5)
  }

  /**
   * Fetch the 5 latests requests that the server has responded
   * with an status between 500 and 599
   */
  private static async getLastEndpointsError() {
    return Database.from(Entry.table)
      .select('*')
      .where('type', '=', EntryType.REQUEST)
      .andWhereRaw("(content->>'response_status')::numeric BETWEEN 500 AND 599")
      .orderBy('created_at', 'desc')
      .limit(5)
  }
}
