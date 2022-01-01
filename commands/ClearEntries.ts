import { BaseCommand } from '@adonisjs/core/build/standalone'
import { AdoscopeConfig } from 'Config/adoscope'

export default class ClearEntries extends BaseCommand {
  public static commandName = 'adoscope:clear'
  public static description = 'Clear all entries from Adoscope'

  public static settings = {
    loadApp: true,
  }

  public async run() {
    const { default: Database } = await import('@ioc:Adonis/Lucid/Database')
    const { default: Config } = await import('@ioc:Adonis/Core/Config')
    const adoscope = Config.get('adoscope') as AdoscopeConfig

    const spinner = this.logger.await('Clearing entries from database...')

    await Database.connection(adoscope.storage.databaseConnection).truncate(
      'adoscope_entries',
      true
    )

    this.logger.success('All entries have been cleared.')
    spinner.stop()
  }
}
