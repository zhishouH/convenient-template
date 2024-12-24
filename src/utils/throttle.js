// export default throttle
/**
 * 节流函数
 * 用于控制频繁触发的事件在一定时间间隔内只执行一次。
 *
 * @param {Function} fn 要执行的函数
 * @param {number} interval 执行间隔时间，单位是毫秒
 * @param {Object} options 配置项
 * @param {boolean} options.leading 是否在开始时立即执行，默认值是 `true`
 * @param {boolean} options.trailing 是否在结束时执行，默认值是 `false`
 * @returns {Function} 返回一个节流后的函数
 */
function throttle(fn, interval, { leading = true, trailing = false } = {}) {
	let startTime = 0
	let timer = null

	/**
	 * 节流后的函数
	 * 该函数会在触发事件时控制执行频率，确保在 `interval` 时间内只执行一次
	 *
	 * @param  {...any} args 传递给原始函数的参数
	 */
	const _throttle = function (...args) {
		const nowTime = new Date().getTime()

		/* 如果设置了 `leading` 为 false，并且是第一次触发事件，则不立即执行 */
		if (!leading && startTime === 0) {
			startTime = nowTime
		}

		// 计算距离上次执行的时间差
		const waitTime = interval - (nowTime - startTime)

		// 如果已经过了足够的时间间隔，立即执行函数
		if (waitTime <= 0) {
			if (timer) clearTimeout(timer)
			fn.apply(this, args)
			startTime = nowTime
			timer = null
			return
		}

		// 如果设置了 `trailing` 且定时器还未设置，则在间隔结束后执行函数
		if (trailing && !timer) {
			timer = setTimeout(() => {
				fn.apply(this, args)
				startTime = new Date().getTime()
				timer = null
			}, waitTime)
		}
	}

	/**
	 * 用于手动取消节流操作，清除定时器并重置状态
	 */
	_throttle.cancel = function () {
		if (timer) clearTimeout(timer)
		startTime = 0
	}

	return _throttle
}

export default throttle
