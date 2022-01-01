import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { EntryFactory } from 'Database/factories'

export default class EntrySeeder extends BaseSeeder {
  public async run() {
    await EntryFactory.createMany(100)
  }
}
