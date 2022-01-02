import test from 'japa'
import Mail from '@ioc:Adonis/Addons/Mail'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'
import { getLastEntry } from '../test-helpers'
import { Adoscope } from 'App/Services/Adoscope'
import Config from '@ioc:Adonis/Core/Config'

test.group('Mail Watcher', (group) => {
  group.before(async () => {
    Config.set('adoscope.enabled', true)
    Adoscope.start(Config.get('adoscope'))
  })

  group.after(async () => {
    Adoscope.stop()
  })

  test('Mail Watcher is recording entries', async (assert) => {
    await Mail.send((message) => {
      message
        .from('julien@ripouteau.com')
        .to('hey@adoscope.com')
        .cc('cc@adonis.com')
        .subject('Hello!')
        .text('I love Adonis!')
    })

    setTimeout(async () => {
      const entry = (await getLastEntry()) as Entry

      assert.isNotNull(entry)
      assert.equal(entry!.type, EntryType.MAIL)
      assert.equal(entry!.content.from, 'julien@ripouteau.com')
      assert.notStrictEqual(entry!.content.to, [{ address: 'hey@adoscope.com', name: '' }])
      assert.notStrictEqual(entry!.content.cc, [{ address: 'cc@adonis.com', name: '' }])
      assert.equal(entry!.content.subject, 'Hello!')
    }, 100)
  })
})
