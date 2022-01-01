import Factory from '@ioc:Adonis/Lucid/Factory'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'
import { DateTime } from 'luxon'

/**
 * Generate props for Request Entry Type
 */
const RequestPropsFactory = (faker: Faker.FakerStatic) => ({
  ip_address: faker.internet.ip(),
  uri: faker.internet.url(),
  method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'DELETE']),
  controller_action: `${faker.lorem.word()}Controller.${faker.lorem.word()}`,
  middleware: faker.datatype.boolean() ? faker.random.words(2) : null,
  headers: {
    'accept': faker.random.arrayElement(['application/json', 'application/xml']),
    'user-agent': faker.internet.userAgent(),
    [faker.lorem.word()]: faker.lorem.words(),
  },
  payload: { [faker.lorem.word()]: faker.lorem.words() },
  response: { [faker.lorem.word()]: faker.lorem.words() },
  response_status: faker.datatype.number({ min: 200, max: 500 }),
  duration: faker.datatype.number({ min: 0, max: 1000 }),
})

/**
 * Generate props for Command Entry Type
 */
const CommandPropsFactory = (faker: Faker.FakerStatic) => ({
  command: `${faker.lorem.word()}:${faker.lorem.word()}`,
  exit_code: faker.datatype.number({ min: 0, max: 255 }),
  options: {
    [faker.lorem.word()]: faker.datatype.boolean(),
    [faker.lorem.word()]: faker.lorem.words(),
    [faker.lorem.word()]: faker.datatype.boolean(),
  },
  arguments: {
    [faker.lorem.word()]: faker.datatype.boolean(),
  },
})

/**
 * Generate props for Query Entry Type
 */
const QueryPropsFactory = (faker: Faker.FakerStatic) => ({
  connection: faker.random.arrayElement(['mysql', 'sqlite', 'postgres']),
  sql: faker.random.arrayElement([
    `SELECT EMP_ID, NAME FROM EMPLOYEE_TBL WHERE EMP_ID = '0000';`,
    `SELECT EMP_ID, LAST_NAME FROM EMPLOYEE WHERE CITY = 'Seattle' ORDER BY EMP_ID;`,
    `CREATE VIEW Failing_Students AS SELECT S_NAME, Student_ID FROM STUDENT WHERE GPA > 40;`,
    `CREATE OR REPLACE VIEW [ Product List ] AS SELECT ProductID, ProductName, Category FROM Products WHERE Discontinued = No;`,
    `SELECT Name FROM Customers WHERE EXISTS
      (SELECT Item FROM Orders
      WHERE Customers.ID = Orders.ID AND Price < 50)`,
    `SELECT eno, dno, salary,
      DENSE_RANK() OVER (PARTITION BY dno ORDER BY salary) AS ranking
      FROM employee;`,
    `Select * from Employee A where rownum <=8 union select * from (Select * from Employee A order by rowid desc) where rownum <=8;`,
  ]),
  bindings: faker.lorem.words(),
  time: faker.datatype.number({ min: 0, max: 1000 }),
})

/**
 * Generate props for Event Entry Type
 */
const EventPropsFactory = (faker: Faker.FakerStatic) => ({
  name: `${faker.lorem.word()}:${faker.lorem.word()}`,
  payload: { [faker.lorem.word()]: faker.lorem.words() },
  listeners_count: faker.datatype.number({ min: 0, max: 10 }),
})

/**
 * Generate props for Redis Entry Type
 */
const RedisPropsFactory = (faker: Faker.FakerStatic) => ({
  command:
    faker.random.arrayElement(['GET', 'SET', 'DEL', 'EXISTS']) +
    ` ${faker.lorem.word().toUpperCase()}`,
  time: faker.datatype.number({ min: 0, max: 1000 }),
})

/**
 * Generate Props For Exception Entry type
 */
const ExceptionPropsFactory = (faker: Faker.FakerStatic) => ({
  class: faker.lorem.word(),
  message: faker.lorem.words(),
  stack: `error: select * from "adoscope_entries" where "id" = $1 limit $2 - invalid input syntax for type uuid: "454"
    at Parser.parseErrorMessage (adoscope/node_modules/.pnpm/pg-protocol@1.5.0/node_modules/pg-protocol/src/parser.ts:369:69)
    at Parser.handlePacket (adoscope/node_modules/.pnpm/pg-protocol@1.5.0/node_modules/pg-protocol/src/parser.ts:188:21)
    at Parser.parse (adoscope/node_modules/.pnpm/pg-protocol@1.5.0/node_modules/pg-protocol/src/parser.ts:103:30)
    at Socket.<anonymous> (adoscope/node_modules/.pnpm/pg-protocol@1.5.0/node_modules/pg-protocol/src/index.ts:7:48)
    at Socket.emit (node:events:390:28)
    at addChunk (node:internal/streams/readable:315:12)
    at readableAddChunk (node:internal/streams/readable:289:9)
    at Socket.Readable.push (node:internal/streams/readable:228:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:199:23)
    `,
  location: faker.system.filePath(),
  line: faker.datatype.number({ min: 0, max: 1000 }),
})

/**
 * Generate Props For Model entry type
 */
const ModelPropsFactory = (faker: Faker.FakerStatic) => ({
  model_name: faker.lorem.word(),
  model_id: faker.datatype.number({ min: 0, max: 1000 }),
  action: faker.random.arrayElement(['created', 'updated', 'deleted', 'retrieved']),
  changes: {
    [faker.lorem.word()]: faker.lorem.words(),
    [faker.lorem.word()]: faker.lorem.words(),
  },
})

/**
 * Default props for generic Entry
 */
const DefaultContentPropsFactory = (type: EntryType, faker: Faker.FakerStatic) => ({
  user: faker.datatype.boolean()
    ? {
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
      }
    : null,
})

/**
 * Get matching props factory for given entry type
 */
const getMatchingPropsFactory = (type: EntryType) => {
  return (
    {
      [EntryType.REQUEST]: RequestPropsFactory,
      [EntryType.COMMAND]: CommandPropsFactory,
      [EntryType.QUERY]: QueryPropsFactory,
      [EntryType.EVENT]: EventPropsFactory,
      [EntryType.REDIS]: RedisPropsFactory,
      [EntryType.EXCEPTION]: ExceptionPropsFactory,
      [EntryType.MODEL]: ModelPropsFactory,
    }[type] || RequestPropsFactory
  )
}

/**
 * Returns a batch either by generating a random uuid or by using another entry batch id
 */
const assignBatchId = async (faker: Faker.FakerStatic): Promise<string> => {
  const mustGenerateNewUuid = faker.datatype.boolean()

  if (mustGenerateNewUuid) {
    return faker.datatype.uuid()
  }

  return Entry.query()
    .orderByRaw('RANDOM()')
    .first()
    .then((res) => res?.batchId || faker.datatype.uuid())
}

export const EntryFactory = Factory.define(Entry, async ({ faker }) => {
  const type = faker.random.arrayElement(Object.values(EntryType))
  // const type = EntryType.QUERY

  const batchId = await assignBatchId(faker)

  return {
    type,
    hostname: faker.lorem.word(),
    created_at: DateTime.fromJSDate(faker.date.recent(1)),
    batchId,
    content: {
      ...DefaultContentPropsFactory(type, faker),
      ...getMatchingPropsFactory(type)(faker),
    },
  }
}).build()
