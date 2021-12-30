import { defineConfig } from 'windicss/helpers'
import { resolve } from 'path'

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: [resolve('**/*.{vue,html,jsx,tsx}')],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: [resolve('node_modules')],
  },
})
