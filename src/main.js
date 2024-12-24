import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import i18n from './locales'
import 'normalize.css'
import './assets/css/common.css'
import icons from './global/register-icons'
import App from './App.vue'

const app = createApp(App)

app.use(icons)
app.use(i18n)
app.use(router)
app.use(pinia)

app.mount('#app')
