/**
 * Wrapper for Adoscope API
 */
export const Api = {
  basePath: 'http://127.0.0.1:3333',

  /**
   * Fetch entries of given type
   */
  fetchEntries(entriesType, limit, beforeIndex = '') {
    return fetch(
      `${this.basePath}/telescope-api/entries?type=${entriesType}&limit=${limit}&before=${beforeIndex}`
    ).then((response) => response.json())
  },

  /**
   * Fetch entry by given ID
   */
  fetchEntry(id) {
    return fetch(`${this.basePath}/telescope-api/entries/${id}`).then((response) => response.json())
  },

  /**
   * Fetch dashboard statistics
   */
  fetchStatistics() {
    return fetch(`${this.basePath}/telescope-api/statistics`).then((response) => response.json())
  },
}
