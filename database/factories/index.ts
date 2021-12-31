import Factory from '@ioc:Adonis/Lucid/Factory'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'
import { DateTime } from 'luxon'

/**
 * Generate props for Request Entry Type
 */
const RequestPropsFactory = (faker: Faker.FakerStatic) => ({
  type: EntryType.REQUEST,
  content: {
    ip_address: faker.internet.ip(),
    uri: faker.internet.url(),
    method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'DELETE']),
    middleware: faker.datatype.boolean() ? faker.random.words(2) : null,
    headers: {
      'accept': faker.random.arrayElement(['application/json', 'application/xml']),
      'user-agent': faker.internet.userAgent(),
      [faker.lorem.word()]: faker.lorem.words(),
    },
    response_status: faker.datatype.number({ min: 200, max: 500 }),
    duration: faker.datatype.number({ min: 0, max: 1000 }),
  },
  created_at: DateTime.fromJSDate(faker.date.recent(1)),
})

/**
 * Generate props for Command Entry Type
 */
const CommandPropsFactory = (faker: Faker.FakerStatic) => ({
  type: EntryType.COMMAND,
  content: {
    command: `${faker.lorem.word()}:${faker.lorem.word()}`,
    exit_code: faker.datatype.number({ min: 0, max: 255 }),
    options: {
      [faker.lorem.word()]: faker.datatype.boolean(),
      [faker.lorem.word()]: faker.lorem.words(),
      [faker.lorem.word()]: faker.datatype.boolean(),
    },
  },
  created_at: DateTime.fromJSDate(faker.date.recent(1)),
})

/**
 * Generate props for Query Entry Type
 */
const QueryPropsFactory = (faker: Faker.FakerStatic) => ({
  type: EntryType.QUERY,
  content: {
    connection: faker.random.arrayElement(['mysql', 'sqlite', 'postgres']),
    sql: faker.lorem.sentence(),
    bindings: faker.lorem.words(),
    time: faker.datatype.number({ min: 0, max: 1000 }),
  },
  created_at: DateTime.fromJSDate(faker.date.recent(1)),
})

/**
 * Default props for generic Entry
 */
const DefaultPropsFactory = (faker: Faker.FakerStatic) => ({
  type: faker.random.arrayElement(Object.values(EntryType)),
  content: {
    [faker.lorem.word()]: faker.lorem.words(),
  },
})

export const EntryFactory = Factory.define(Entry, ({ faker }) => {
  // const type = faker.random.arrayElement(Object.values(EntryType))
  const type = EntryType.QUERY

  const propsFactory =
    {
      [EntryType.REQUEST]: RequestPropsFactory,
      [EntryType.COMMAND]: CommandPropsFactory,
      [EntryType.QUERY]: QueryPropsFactory,
    }[type] || DefaultPropsFactory

  return propsFactory(faker)
}).build()
