import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import { EntryType } from 'App/types'

export default class Entry extends BaseModel {
  public static table = 'adoscope_entries'
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public sequenceId: number

  @column()
  public hostname: string

  @column()
  public batchId: string

  @column()
  public type: EntryType

  @column()
  public content: Record<string, any>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @beforeCreate()
  public static async createUuid(model: Entry) {
    model.id = uuid()
  }
}
