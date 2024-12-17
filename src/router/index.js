import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		/* 重定向 */
		{
			path: '/',
			redirect: '/home',
		},
		/* 主页 */
		{
			path: '/home',
			component: () => import('@/views/Home/index.vue'),
		},
		/* 关于 */
		{
			path: '/about',
			component: () => import('@/views/About/index.vue'),
		},
		/* 404 */
		{
			path: '/:pathMatch(.*)',
			component: () => import('@/views/NotFound/index.vue'),
		},
	],
})

export default router
