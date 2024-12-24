import { createRouter, createWebHistory } from 'vue-router'
import route from './generateRoute'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('@/layout/index.vue'),
			children: [...route],
		},
		/* 404 */
		{
			path: '/:pathMatch(.*)',
			component: () => import('@/views/NotFound/index.vue'),
		},
	],
})

export default router
