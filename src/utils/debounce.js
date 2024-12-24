/**
 * 防抖函数
 * 用于控制频繁触发的事件在一定时间内只执行一次
 *
 * @param {Function} fn 要执行的函数
 * @param {number} delay 防抖延迟时间，单位是毫秒
 * @param {boolean} immediate 是否立即执行，默认值是 `false`，即延迟后执行
 * @returns {Function} 返回一个防抖后的函数
 */
function debounce(fn, delay, immediate = false) {
	let timer = null
	let isInvoke = false

	/**
	 * 防抖后的函数
	 * 该函数会在触发事件后延迟执行，只有在事件触发后一定时间内没有新的触发时才会执行
	 *
	 * @param  {...any} args 传递给原始函数的参数
	 * @returns {Promise} 返回一个 Promise，用于异步执行结果
	 */
	const _debounce = function (...args) {
		return new Promise((resolve, reject) => {
			try {
				if (timer) clearTimeout(timer)

				let result = undefined

				// 如果设置了 immediate 且函数还没有被立即执行过，则立即执行并返回结果
				if (immediate && !isInvoke) {
					result = fn.apply(this, args)
					resolve(result)
					isInvoke = true
					return
				}

				// 如果没有设置 immediate，或者已经执行过一次，则等到 `delay` 毫秒后执行
				timer = setTimeout(() => {
					result = fn.apply(this, args)
					resolve(result)
					timer = null
					isInvoke = false
				}, delay)
			} catch (error) {
				reject(error)
			}
		})
	}

	/**
	 * 用于手动取消防抖操作，清除定时器并重置状态
	 */
	_debounce.cancel = function () {
		if (timer) clearTimeout(timer)
		timer = null
		isInvoke = false
	}

	return _debounce
}

export default debounce
