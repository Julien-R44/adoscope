export const Api = {
  basePath: 'http://127.0.0.1:333',

  fetchEntries(resource) {
    const entries = fetch(`${this.basePath}/telescope-api/${resource}`)

    console.log(entries)
  },
}
