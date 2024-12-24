const route = []

const locales = import.meta.glob('./modules/*.js', { eager: true })

for (const path in locales) {
	const module = locales[path]
	route.push(module.default || module)
}

const flatRoute = route.flat()

export default flatRoute
