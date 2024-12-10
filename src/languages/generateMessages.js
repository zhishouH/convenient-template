const messages = {}

const locales = import.meta.glob('./*/*.json', { eager: true })

for (const path in locales) {
	const [, locale, fileName] = path.match(/\/([^/]+)\/([^/]+)\.json$/)
	messages[locale] = messages[locale] || {}

	messages[locale][fileName] = locales[path].default || locales[path]
}

export default messages
