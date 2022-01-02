import { Watcher } from './Watcher'
import Event from '@ioc:Adonis/Core/Event'
import { MailEventData } from '@ioc:Adonis/Addons/Mail'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'
import { v4 as uuid } from 'uuid'
import { hostname } from 'os'

export class MailWatcher extends Watcher {
  private bindedSaveMail = this.saveMail.bind(this)

  public register() {
    Event.on('mail:sent', this.bindedSaveMail)
  }

  public unregister() {
    Event.off('mail:sent', this.bindedSaveMail)
  }

  /**
   * Save a mail as an new entry from the MailEventData
   */
  public saveMail(event: MailEventData) {
    Entry.create({
      type: EntryType.MAIL,
      batchId: uuid(),
      hostname: hostname(),
      content: {
        mailer: event.mailer,
        from: event.message.from?.address,
        replyTo: event.message.replyTo,
        to: event.message.to,
        cc: event.message.cc,
        bcc: event.message.bcc,
        subject: event.message.subject,
        view: event.views,
        accepted: event.response.accepted,
        rejected: event.response.rejected,
      },
    })
  }
}
