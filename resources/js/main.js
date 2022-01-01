import '../css/app.css'
import '@/bootstrap/plugins'
import { createApp } from 'vue'
import { router } from '@/router/router'
import App from '@/App.vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App)
app.use(router)
app.use(hljsVuePlugin)
app.mount('#app')
