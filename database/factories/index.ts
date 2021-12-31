import Factory from '@ioc:Adonis/Lucid/Factory'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'
import { DateTime } from 'luxon'

const EntryRequestPropsGenerator = (faker: Faker.FakerStatic) => ({
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

const DefaultPropsGenerator = (faker: Faker.FakerStatic) => ({
  type: faker.random.arrayElement(Object.values(EntryType)),
  content: {
    [faker.lorem.word()]: faker.lorem.words(),
  },
})

export const EntryFactory = Factory.define(Entry, ({ faker }) => {
  // const type = faker.random.arrayElement(Object.values(EntryType))
  const type = EntryType.REQUEST

  const propsGenerator =
    {
      [EntryType.REQUEST]: EntryRequestPropsGenerator,
    }[type] || DefaultPropsGenerator

  return propsGenerator(faker)
}).build()
