import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import pinia from './store'
import i18nConfig from './locales'
import 'normalize.css'
import './assets/css/common.css'
import registerIcons from './global/register-icons'
import App from './App.vue'

const app = createApp(App)

// 国际化
const i18n = createI18n(i18nConfig)

// 注册 -> 挂载
app.use(registerIcons).use(i18n).use(router).use(pinia).mount('#app')
