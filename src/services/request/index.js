import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { localCache } from '@/utils/cache'

class Request {
	constructor(baseURL, timeout = 10000) {
		this.instance = axios.create({
			baseURL,
			timeout,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		})

		this.setupInterceptors()
	}

	setupInterceptors() {
		// 请求拦截器
		this.instance.interceptors.request.use(
			req => {
				const token = localCache.getCache('token') || ''

				if (token) {
					req.headers['Authorization'] = `Bearer ${token}`
				}

				if (req.data instanceof FormData) {
					req.headers['Content-Type'] = 'multipart/form-data'
					req.transformRequest = [
						function (data) {
							return data
						},
					]
				} else {
					switch (req.method) {
						case 'post':
						case 'put':
						case 'delete':
							req.headers['Content-Type'] = 'application/json'
							req.transformRequest = [
								function (data) {
									return JSON.stringify(data)
								},
							]
							break
						case 'get':
							req.headers['Content-Type'] = 'application/x-www-form-urlencoded'
							break
						default:
							req.headers['Content-Type'] = 'application/x-www-form-urlencoded'
							break
					}
				}
				return req
			},
			error => {
				return Promise.reject(error)
			}
		)

		// 响应拦截器
		this.instance.interceptors.response.use(
			res => {
				return res.data
			},
			error => {
				switch (error.response.status) {
					case 401: {
						// 未授权-清除token并跳转到登录页
						localCache.removeCache('token')
						break
					}
					case 403: {
						// 没有访问权限
						break
					}
					case 404: {
						// 服务器找不到资源
						break
					}
					case 500: {
						// 服务器未知错误
						break
					}
				}
				return Promise.reject(error)
			}
		)
	}

	request(config) {
		return new Promise((resolve, reject) => {
			this.instance
				.request(config)
				.then(res => {
					resolve(res.data)
				})
				.catch(err => {
					reject(err)
				})
		})
	}

	get(config) {
		return this.request({ ...config, method: 'get' })
	}

	post(config) {
		return this.request({ ...config, method: 'post' })
	}
}

export default new Request(BASE_URL, TIMEOUT)
