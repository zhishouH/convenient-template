# 项目搭建流程

## 技术栈

1. `node 18.20.0`
2. `vite ^5.4.9`
3. `vue ^3.5.10`
4. `pinia ^2.2.4`
5. `vue-router 4`
6. `sass ^1.80.3`
7. `element-plus ^2.8.6`
8. `eslint ^9.16.0`
9. `stylelint ^16.11.0`
10. `prettier 3.4.1`

## 结构

```javascript
|- src
	|- assets // 资源
	|- global // 全局
	|- layout  // 布局
	|- locales  // 国际化
	|- router  // 路由
	|- services  // 网络请求
	|- store  // 数据缓存
	|- utils  // 工具
	|- views  // 页面
|- .editorconfig  // 编辑器规范
|- .prettierignore  // 格式化忽略
|- .prettierrc  // 格式化配置
|- .stylelintrc.json  // css样式规则检查规范
|- .jsconfig.json  // 编辑器扩展
|- eslint.config.js  // js代码检查
|- vite.config.js // 教手架配置
```

## 创建

```shell
pnpm create vite
```

## 配置代码规范

### 1、editorconfig

配置 `.editorconfig`

```shell
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = tab # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行尾的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

### 2、eslint

初始化

```shell
pnpm create @eslint/config@latest
```

安装插件

```shll
pnpm add eslint-config-prettier -D
```

配置 `eslint.config.js`

```javascript
import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,vue}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier,
	{
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
]
```

### 3、prettier

安装

```shell
pnpm add prettier -D
```

配置 `.prettierrc`

```json
{
	"useTabs": true,
	"tabWidth": 2,
	"printWidth": 100,
	"singleQuote": true,
	"trailingComma": "es5",
	"semi": false,
	"endOfLine": "lf",
	"bracketSpacing": true,
	"vueIndentScriptAndStyle": true,
	"proseWrap": "preserve"
}
```

配置忽略文件 `.prettierignore`

```shell
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

### 4、stylelint

初始化

```shell
pnpm add stylelint -D
```

安装插件

```shell
pnpm add stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-scss stylelint-config-standard-vue stylelint-order stylelint-scss -D
```

配置 `.stylelintrc.json`

```javascript
{
	"extends": [
		"stylelint-config-standard",
		"stylelint-config-recommended-scss",
		"stylelint-config-standard-vue"
	],
	"plugins": ["stylelint-order"],
	"overrides": [
		{
			"files": ["**/*.(scss|css|vue|html)"],
			"customSyntax": "postcss-scss"
		},
		{
			"files": ["**/*.(html|vue)"],
			"customSyntax": "postcss-html"
		}
	],
	"ignoreFiles": [
		"**/*.js",
		"**/*.jsx",
		"**/*.tsx",
		"**/*.ts",
		"**/*.json",
		"**/*.md",
		"**/*.yaml"
	],
	"rules": {
		"no-descending-specificity": null,
		"selector-class-pattern": null,
		"selector-pseudo-element-no-unknown": [
			true,
			{
				"ignorePseudoElements": ["v-deep"]
			}
		],
		"selector-pseudo-class-no-unknown": [
			true,
			{
				"ignorePseudoClasses": ["deep"]
			}
		],
		"order/properties-order": [
			"position",
			"top",
			"right",
			"bottom",
			"left",
			"z-index",
			"display",
			"justify-content",
			"align-items",
			"float",
			"clear",
			"overflow",
			"overflow-x",
			"overflow-y",
			"padding",
			"padding-top",
			"padding-right",
			"padding-bottom",
			"padding-left",
			"margin",
			"margin-top",
			"margin-right",
			"margin-bottom",
			"margin-left",
			"width",
			"min-width",
			"max-width",
			"height",
			"min-height",
			"max-height",
			"font-family",
			"font-weight",
			"font-size",
			"line-height",
			"text-align",
			"text-justify",
			"text-indent",
			"text-overflow",
			"text-decoration",
			"white-space",
			"color",
			"background",
			"background-position",
			"background-repeat",
			"background-size",
			"background-color",
			"background-clip",
			"border",
			"border-style",
			"border-width",
			"border-color",
			"border-top-style",
			"border-top-width",
			"border-top-color",
			"border-right-style",
			"border-right-width",
			"border-right-color",
			"border-bottom-style",
			"border-bottom-width",
			"border-bottom-color",
			"border-left-style",
			"border-left-width",
			"border-left-color",
			"border-radius",
			"opacity",
			"filter",
			"list-style",
			"outline",
			"visibility",
			"box-shadow",
			"text-shadow",
			"resize",
			"transform",
			"transition"
		]
	}
}
```

### 5、git Husky

虽然已经要求项目使用eslint了，但不能保证在提交代码之前都将eslint中的问题都解决。又希望保证代码仓库中的代码都是符合eslint规范的。那么需要在执行`git commit`命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范修复，husky是一个git hook工具，可以触发git提交的各个阶段：`pre-commit`、`commit-msg`、`pre-push`

安装：

```shell
npx husky-init && pnpm add husky
```

修改根目录下的 **.husky** 文件夹里的 **pre-commit** 文件

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm run prettier
pnpm run lint
```

通常`git commit`会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制，但是如果每次手动编写这些信息是比较麻烦的事情，可以使用 一个帮助编写规范commit message的工具：`Commitizen`

```shell
pnpm add commitizen -D
```

安装cz-conventional-changelog

```shell
pnpm add -D commitizen cz-conventional-changelog
```

在 `package.json` 中添加以下内容：

```json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

即使安装了Commitizen，仍然可以通过`git commit`按照不规范的格式提交，可以通过commitlint来限制提交

安装@commitlint/config-conventional 和 @commitlint/cli

```shell
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

在根目录创建`commitlint.config.js`文件，配置commitlint

```javascript
export default {
	extends: ['@commitlint/config-conventional'],
}
```

使用husky生成commit-msg文件，验证提交信息：

```
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

`package.json`配置运行脚本：

```javascript
"commit": "cz"
```

后续提交流程

1. git add .
2. pnpm run commit
3. git push

## .vscode配置

### 1、extensions.json

```json
{
	"recommendations": ["Vue.volar", "dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

### 2、settings.json

```json
{
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll": "always",
		"source.fixAll.eslint": "always",
		"source.fixAll.stylelint": "always"
	},
	"eslint.format.enable": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"stylelint.validate": ["css", "scss", "vue", "html"]
}
```

## 集成vueDevTools

安装

```shell
pnpm add vite-plugin-vue-devtools -D
```

配置 `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools' // 导入vueDevTools插件

export default defineConfig({
	// ...
	plugins: [
		// ...
		vueDevTools(),
	],
})
```

## 集成Element Plus

### 安装

```shell
pnpm add element-plus
```

安装按需导入插件

```shell
pnpm add unplugin-vue-components unplugin-auto-import -D
```

配置按需导入 `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
	// ...
	plugins: [
		// ...
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
})
```

### 安装额外插件

以上配置对于反馈组件（如：Alert、Loading、Message等非template中使用的组件不起效果），则需要另外配置。

插件地址：[vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import)

```shell
pnpm add vite-plugin-style-import -D
```

这个插件需要依赖 `consola`

```shell
pnpm add consola -D
```

插件配置 `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

export default defineConfig({
	// ...
	plugins: [
		// ...
		createStyleImportPlugin({
			resolves: [ElementPlusResolve()],
			libs: [
				{
					libraryName: 'element-plus',
					esModule: true,
					resolveStyle: (name) => {
						return `element-plus/theme-chalk/${name}.css`
					},
				},
			],
		}),
	],
})
```

### icons配置

安装

```shell
pnpm add @element-plus/icons-vue
```

注册icons

```javascript
/* 注册element-plus所有icon  */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function registerIcons(app) {
	for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
		app.component(key, component)
	}
}

export default registerIcons
```

导入`main.js`

```javascript
import registerIcons from './global/register-icons'

app.use(registerIcons)
```

## 集成Router

安装

```shell
pnpm add vue-router@4
```

`router/index.js`

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		/* 重定向 */
		{
			path: '/',
			redirect: '/editor',
		},
		/* 主页 */
		{
			path: '/home',
			component: () => import('@/views/home/index.vue'),
		},
		/* 关于 */
		{
			path: '/about',
			component: () => import('@/views/about/index.vue'),
		},
		/* 404 */
		{
			path: '/:pathMatch(.*)',
			component: () => import('../views/not-found/index.vue'),
		},
	],
})

export default router
```

## 集成Store

安装

```shell
pnpm add pinia
```

入口 `store/index.js`

```javascript
import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia
```

模块 `store/modules/home.js`

```javascript
import { defineStore } from 'pinia'
import { ref, useTemplateRef } from 'vue'

const useHomeStore = defineStore('home', () => {
	/* state */
	const counter = ref(1)
	const counterEl = useTemplateRef('counter') // 句柄

	/* getter */
	const doubleCounter = computed(() => {
		return counter.value * 2
	})

	return {
		counter,
		doubleCounter,
		counterEl,
	}
})

export default useHomeStore
```

## 集成Axios

安装

```shell
pnpm add axios
```

配置

`services/request/config.js`

```javascript
export const BASE_URL = import.meta.env.VITE_BASE_URL
export const TIMEOUT = 10000
```

`services/request/index.js`

```javascript
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
			(req) => {
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
			(error) => {
				return Promise.reject(error)
			}
		)

		// 响应拦截器
		this.instance.interceptors.response.use(
			(res) => {
				return res.data
			},
			(error) => {
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
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
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
```

## 集成本地储存

```javascript
class Cache {
	constructor(type) {
		if (type !== localStorage && type !== sessionStorage) {
			throw new Error('Invalid storage type')
		}
		this.storage = type
	}

	// 设置
	setCache(key, value) {
		if (value !== undefined && value !== null) {
			this.storage.setItem(key, JSON.stringify(value))
		}
	}

	// 获取
	getCache(key) {
		const value = this.storage.getItem(key)
		if (value !== null) {
			return JSON.parse(value)
		}
		return null
	}

	// 移除个项
	removeCache(key) {
		this.storage.removeItem(key)
	}

	// 清除所有
	clear() {
		this.storage.clear()
	}
}

const localCache = new Cache(localStorage)
const sessionCache = new Cache(sessionStorage)

export { localCache, sessionCache }
```

## 集成国际化

安装

```shell
pnpm add vue-i18n
```

入口配置 `locales/index`

```javascript
import messages from './generateMessages'

const i18nConfig = {
	locale: 'en-US', // 默认语种
	fallbackLocale: 'en-US', //后备语种
	messages,
}

export default i18nConfig
```

自动加载多语种信息 `locales/generateMessages`

```javascript
const messages = {}

const locales = import.meta.glob('./*/*.json', { eager: true })

for (const path in locales) {
	const [, locale, fileName] = path.match(/\/([^/]+)\/([^/]+)\.json$/)
	messages[locale] = messages[locale] || {}

	messages[locale][fileName] = locales[path].default || locales[path]
}

export default messages
```

en-US `locales/en-US/header.json`

```json
{
	"logoTitle": "Content Manage System"
}
```

zh-CN `locales/zh-CN/header.json`

```json
{
	"logoTitle": "内容管理系统"
}
```

使用方式

```vue
{{ $t('header.logoTitle') }}
```

## 获取图片资源工具

`utils/get-asset.js`

```javascript
const getAssetUrl = (image) => {
	return new URL(`../assets/img/${image}`, import.meta.url).href
}

export default getAssetUrl
```

## css预处理器

```shell
pnpm add sass -D
```

## css 重置

```shell
pnpm add normalize.css
```

## 环境变量

`.env.dev`

```javascript
VITE_BASE_URL = 'https://dev.com/api'
```

`.env.test`

```javascript
VITE_BASE_URL = 'https://test.com/api'
```

`.env.pro`

```javascript
VITE_BASE_URL = 'https://pro.com/api'
```

在环境变量文件中使用`VITE_`命名变量，即可通过`import.meta.env`获取变量

```javascript
const BASE_URL = import.meta.env.VITE_BASE_URL
```

配置启动脚本`package.json`

```shell
"dev": "vite --mode dev",
"test": "vite --mode test",
"pro": "vite --mode pro",
"build:dev": "vite build --mode dev",
"build:test": "vite build --mode test",
"build:pro": "vite build --mode pro",
```

## main.js完整配置

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 集成路由
import pinia from './store' // 集成缓存
import i18n from './locales'
import 'normalize.css' // 统一重置样式
import './assets/css/common.css' // 统一全局样式
import registerIcons from './global/register-icons' // 组册element-plus icon

const app = createApp(App)

app.use(registerIcons).use(i18n).use(router).use(pinia).mount('#app')
```

## vite.config.js完整配置

```javascript
import { fileURLToPath, URL } from 'node:url' // 导入 URL 模块，用于路径处理
import { defineConfig } from 'vite' // 导入 Vite 的配置定义函数
import vue from '@vitejs/plugin-vue' // 导入 Vue 插件
import vueDevTools from 'vite-plugin-vue-devtools' // 导入vueDevTools插件
import AutoImport from 'unplugin-auto-import/vite' // 导入自动导入插件
import Components from 'unplugin-vue-components/vite' // 导入 Vue 组件自动加载插件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 导入 Element Plus 解析器
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import' // 导入 Element Plus 自动导入反馈组件样式插件

export default defineConfig({
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
					resolveStyle: (name) => {
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
```

## package.json配置

```json
{
	"name": "cms-demo",
	"private": true,
	"version": "1.0.0",
	"type": "module",
	"scripts": {
		"dev": "vite --mode dev",
		"test": "vite --mode test",
		"pro": "vite --mode pro",
		"build:dev": "vite build --mode dev",
		"build:test": "vite build --mode test",
		"build:pro": "vite build --mode pro",
		"preview": "vite preview",
		"prettier": "prettier --write .",
		"lint": "eslint . --fix",
		"prepare": "husky install",
		"commit": "cz"
	},
	"dependencies": {
		"@element-plus/icons-vue": "^2.3.1",
		"axios": "^1.7.9",
		"element-plus": "^2.9.0",
		"normalize.css": "^8.0.1",
		"pinia": "^2.3.0",
		"vue": "^3.5.13",
		"vue-i18n": "^10.0.5",
		"vue-router": "4"
	},
	"devDependencies": {
		"@commitlint/cli": "^19.6.1",
		"@commitlint/config-conventional": "^19.6.0",
		"@eslint/js": "^9.16.0",
		"@vitejs/plugin-vue": "^5.2.1",
		"commitizen": "^4.3.1",
		"consola": "^3.2.3",
		"cz-conventional-changelog": "^3.3.0",
		"eslint": "^9.16.0",
		"eslint-config-prettier": "^9.1.0",
		"eslint-plugin-vue": "^9.32.0",
		"globals": "^15.13.0",
		"husky": "^8.0.3",
		"prettier": "^3.4.2",
		"sass": "^1.82.0",
		"stylelint": "^16.11.0",
		"stylelint-config-recess-order": "^5.1.1",
		"stylelint-config-recommended-scss": "^14.1.0",
		"stylelint-config-standard": "^36.0.1",
		"stylelint-config-standard-scss": "^14.0.0",
		"stylelint-config-standard-vue": "^1.0.0",
		"stylelint-order": "^6.0.4",
		"stylelint-scss": "^6.10.0",
		"unplugin-auto-import": "^0.18.6",
		"unplugin-vue-components": "^0.27.5",
		"vite": "^5.4.11",
		"vite-plugin-style-import": "^2.0.0",
		"vite-plugin-vue-devtools": "^7.6.7"
	},
	"config": {
		"commitizen": {
			"path": "./node_modules/cz-conventional-changelog"
		}
	}
}
```

## jsconfig.json配置

```json
{
	"compilerOptions": {
		"target": "es5",
		"module": "esnext",
		"baseUrl": "./",
		"moduleResolution": "node",
		"paths": {
			"@/*": ["src/*"]
		},
		"jsx": "preserve",
		"lib": ["esnext", "dom", "dom.iterable", "scripthost"],
		"resolveJsonModule": true,
		"esModuleInterop": true
	}
}
```

**说明：**

- vite 配置中的@别名：将@映射到项目根目录下的 `src`文件夹，供代码编译使用
- jsconfig配置中的@别名：确保类型检查和自动补全功能能够正确处理@的路径，供编辑器使用
