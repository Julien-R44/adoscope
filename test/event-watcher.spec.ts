import test from 'japa'
import Entry from 'App/Models/Entry'
import Event from '@ioc:Adonis/Core/Event'
import { Adoscope } from 'App/Services/Adoscope'
import Config from '@ioc:Adonis/Core/Config'
import { EntryType } from 'App/types'
import { getLastEntry } from '../test-helpers'

test.group('Event Watcher', (group) => {
  group.before(async () => {
    Config.set('adoscope.enabled', true)
    Adoscope.start(Config.get('adoscope'))
  })

  group.after(async () => {
    Adoscope.stop()
  })

  test('Event Watcher is recording entries', async (assert) => {
    const payload = {
      name: 'hey',
      payload: { message: 'I love Adoscope!' },
    }

    Event.emit('hey:adoscope', payload)

    setTimeout(async () => {
      const entry = (await getLastEntry()) as Entry

      assert.isNotNull(entry)
      assert.equal(entry!.type, EntryType.EVENT)
      assert.equal(entry!.content.name, 'hey:adoscope')
      assert.deepEqual(entry!.content.payload, payload)
    }, 100)
  })

  test('Event Watcher is storing listener count', async (assert) => {
    Event.on('hey:adoscope', () => {})
    Event.on('hey:adoscope', () => {})
    Event.on('hey:adoscope', () => {})
    Event.onAny(() => {})
    Event.emit('hey:adoscope', {})

    setTimeout(async () => {
      const entry = (await getLastEntry()) as Entry

      assert.equal(entry!.content.listeners_count, 5)
    }, 100)
  })
})
