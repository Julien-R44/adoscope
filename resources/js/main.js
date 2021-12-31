import 'vue-json-pretty/lib/styles.css'
import '../css/app.css'
import { createApp } from 'vue'
import App from './src/App.vue'
import routes from './src/router/routes'
import { createRouter, createWebHashHistory } from 'vue-router'

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
