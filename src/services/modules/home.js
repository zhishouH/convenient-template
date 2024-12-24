import Request from '../request'

export const getHomeData = params => {
	return Request.get({
		url: '/home',
		data: params,
	})
}
