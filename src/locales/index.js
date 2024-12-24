import { createI18n } from 'vue-i18n'
import messages from './generateMessages'

const i18nConfig = {
	locale: navigator.language,
	fallbackLocale: 'en-US',
	messages,
}

const i18n = createI18n(i18nConfig)

export default i18n
