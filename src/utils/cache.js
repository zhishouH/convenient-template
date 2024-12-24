/**
 * 缓存类，支持使用 `localStorage` 或 `sessionStorage` 进行存储
 * 提供了设置、获取、删除和清空缓存的方法
 *
 * @class Cache
 * @param {Storage} type 存储类型，可以是 `localStorage` 或 `sessionStorage`
 * @throws {Error} 如果传入的存储类型不是 `localStorage` 或 `sessionStorage`，则抛出错误
 */
class Cache {
	constructor(type) {
		if (type !== localStorage && type !== sessionStorage) {
			throw new Error('Invalid storage type')
		}
		this.storage = type
	}

	/* 设置缓存数据 */
	setCache(key, value) {
		if (value !== undefined && value !== null) {
			this.storage.setItem(key, JSON.stringify(value))
		}
	}

	/* 获取缓存数据 */
	getCache(key) {
		const value = this.storage.getItem(key)
		if (value !== null) {
			return JSON.parse(value)
		}
		return null
	}

	/* 删除缓存数据 */
	removeCache(key) {
		this.storage.removeItem(key)
	}

	/* 清空所有缓存数据 */
	clear() {
		this.storage.clear()
	}
}

const localCache = new Cache(localStorage)

const sessionCache = new Cache(sessionStorage)

export { localCache, sessionCache }
