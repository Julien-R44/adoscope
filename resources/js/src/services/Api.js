export const Api = {
  basePath: 'http://127.0.0.1:3333',

  fetchEntries(entriesType) {
    return fetch(`${this.basePath}/telescope-api/entries?type=${entriesType}`).then((response) =>
      response.json()
    )
  },
}
