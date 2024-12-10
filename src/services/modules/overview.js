import Request from '../request'

export const getOverviewData = () => {
	return Request.get({
		url: '/overview',
	})
}
