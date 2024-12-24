const route = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		component: () => import('@/views/Home/index.vue'),
	},
]

export default route
