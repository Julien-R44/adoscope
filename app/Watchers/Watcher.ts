export abstract class Watcher {
  /**
   * Start listening for events and saving them to the database
   */
  public abstract register(): void

  /**
   * Stop listening for events and saving them to the database
   */
  public abstract unregister(): void
}
