import { EventWatcher } from 'App/Watchers/EventWatcher'
import { MailWatcher } from 'App/Watchers/MailWatcher'
import { AdoscopeConfig } from 'Config/adoscope'

export class Adoscope {
  private static config: AdoscopeConfig

  /**
   * Enable Adoscope
   */
  public static start(config: AdoscopeConfig) {
    if (!config.enabled) {
      return
    }

    this.config = config
    this.registerWatchers()
  }

  /**
   * Disable Adoscope
   */

  public static stop() {
    this.unregisterWatchers()
  }

  /**
   * Register watchers that will be used to watch for events and save them to database
   */
  private static registerWatchers() {
    const watchers = [MailWatcher, EventWatcher]

    watchers.forEach((Watcher) => new Watcher().register())
  }

  /**
   * Unregister watchers
   */
  private static unregisterWatchers() {
    const watchers = [MailWatcher, EventWatcher]

    watchers.forEach((Watcher) => new Watcher().unregister())
  }
}
