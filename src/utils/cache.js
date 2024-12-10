class Cache {
	constructor(type) {
		if (type !== localStorage && type !== sessionStorage) {
			throw new Error('Invalid storage type')
		}
		this.storage = type
	}

	setCache(key, value) {
		if (value !== undefined && value !== null) {
			this.storage.setItem(key, JSON.stringify(value))
		}
	}

	getCache(key) {
		const value = this.storage.getItem(key)
		if (value !== null) {
			return JSON.parse(value)
		}
		return null
	}

	removeCache(key) {
		this.storage.removeItem(key)
	}

	clear() {
		this.storage.clear()
	}
}

const localCache = new Cache(localStorage)
const sessionCache = new Cache(sessionStorage)

export { localCache, sessionCache }
