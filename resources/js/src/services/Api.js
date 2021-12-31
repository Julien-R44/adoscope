/**
 * Wrapper for Telescope Api
 */
export const Api = {
  basePath: 'http://127.0.0.1:3333',

  /**
   * Fetch entries of given type
   */
  fetchEntries(entriesType) {
    return fetch(`${this.basePath}/telescope-api/entries?type=${entriesType}`).then((response) =>
      response.json()
    )
  },

  /**
   * Fetch entry by given ID
   */
  fetchEntry(id) {
    return fetch(`${this.basePath}/telescope-api/entries/${id}`).then((response) => response.json())
  },
}
