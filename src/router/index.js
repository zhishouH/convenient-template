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
			component: () => import('@/views/home/index.vue'),
		},
		/* 404 */
		{
			path: '/:pathMatch(.*)',
			component: () => import('../views/not-found/index.vue'),
		},
	],
})

export default router
