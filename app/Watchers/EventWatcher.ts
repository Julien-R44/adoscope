import { Watcher } from './Watcher'
import Event from '@ioc:Adonis/Core/Event'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'
import { v4 as uuid } from 'uuid'
import { hostname } from 'os'

export class EventWatcher extends Watcher {
  private bindedSaveEvent = this.saveEvent.bind(this)

  public register(): void {
    Event.onAny(this.bindedSaveEvent)
  }

  public unregister(): void {
    Event.offAny(this.bindedSaveEvent)
  }

  /**
   * Save an event as a new entry
   */
  public saveEvent(event: string, data: any): void {
    Entry.create({
      type: EntryType.EVENT,
      batchId: uuid(),
      hostname: hostname(),
      content: {
        name: event,
        payload: data,
        listeners_count: Event.listenerCount(event),
      },
    })
  }
}
