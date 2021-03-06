import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateAdoscopeTables extends BaseSchema {
  public async up() {
    this.schema.createTable('adoscope_entries', (table) => {
      table.bigIncrements('sequence_id')
      table.uuid('id').notNullable().unique()
      table.uuid('batch_id').notNullable().index()
      table.string('hostname').notNullable()
      table.string('type', 20).notNullable()
      table.json('content').notNullable()
      table.timestamp('created_at', { useTz: true }).index()
    })
  }

  public async down() {
    this.schema.dropTable('adoscope_entries')
  }
}
