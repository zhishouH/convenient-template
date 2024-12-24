import { fileURLToPath, URL } from 'node:url' // 导入 URL 模块，用于路径处理
import { defineConfig } from 'vite' // 导入 Vite 的配置定义函数
import vue from '@vitejs/plugin-vue' // 导入 Vue 插件
import vueDevTools from 'vite-plugin-vue-devtools' // 导入vueDevTools插件
import AutoImport from 'unplugin-auto-import/vite' // 导入自动导入插件
import Components from 'unplugin-vue-components/vite' // 导入 Vue 组件自动加载插件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 导入 Element Plus 解析器
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

export default defineConfig({
	server: {
		host: true,
	},
	plugins: [
		vue(), // 启用 Vue 插件
		vueDevTools(), // 启用vueDevTools插件
		AutoImport({
			resolvers: [ElementPlusResolver()], // 使用 Element Plus 的解析器自动导入组件
		}),
		Components({
			resolvers: [ElementPlusResolver()], // 使用 Element Plus 的解析器自动加载组件
		}),
		createStyleImportPlugin({
			// 使用按需加载Element Plus反馈组件的样式
			resolves: [ElementPlusResolve()],
			libs: [
				{
					libraryName: 'element-plus',
					esModule: true,
					resolveStyle: name => {
						return `element-plus/theme-chalk/${name}.css`
					},
				},
			],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)), // 设置 '@' 为 src 目录的别名
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // 使用现代编译器
				additionalData: `@use '@/assets/css/variables.scss' as *;`, // 全局样式变量
			},
		},
	},
})
