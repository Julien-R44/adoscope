import { BaseCommand, flags } from '@adonisjs/core/build/standalone'

export default class PruneEntries extends BaseCommand {
  public static commandName = 'adoscope:prune'
  public static description = 'Prune stale entries from the Adoscope database'

  @flags.number({ description: 'The number of hours to retain Adoscope data' })
  public hours: number = 24

  public static settings = {
    loadApp: true,
  }

  public async run() {
    const { default: Entry } = await import('App/Models/Entry')

    const spinner = this.logger.await(`Clearing entries older than ${this.hours} hours...`)

    const nbDeletedEntries = await Entry.query()
      .where('created_at', '<', new Date(Date.now() - this.hours * 60 * 60 * 1000))
      .delete()

    spinner.stop()
    this.logger.success(`${nbDeletedEntries} entries have been removed.`)
  }
}
