import { EventWatcher } from 'App/Watchers/EventWatcher'
import { MailWatcher } from 'App/Watchers/MailWatcher'
import { AdoscopeConfig } from 'Config/adoscope'

export class Adoscope {
  /**
   * Enable Adoscope
   */
  public static start(config: AdoscopeConfig) {
    if (!config.enabled) {
      return
    }

    this.registerWatchers()
  }

  /**
   * Register watchers that will be used to watch for events and save them to database
   */
  private static registerWatchers() {
    const watchers = [MailWatcher, EventWatcher]

    watchers.forEach((Watcher) => new Watcher().register())
  }
}
