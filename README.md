# Convenient Template

采用了现代前端开发的最佳实践，利用 Vite、Vue 3、Vue Router、Pinia、Element Plus 等技术

集成了VueDevTools、Vue-i18n、Axios、Debounce、Throttle、Cache、Eslint、Stylelint、Prettier 等工具

一系列的工具和插件提升代码质量和团队协作效率，使得整个开发过程更加高效和规范，适合快速迭代和持续集成

实现了高效、灵活和可维护的开发架构

## 结构

```javascript
|- src
    |- assets           // 资源
    |- global           // 全局配置
    |- layout           // 布局组件
    |- locales          // 国际化配置
    |- router           // 路由配置
    |- services         // 网络请求
    |- store            // 状态管理
    |- utils            // 工具函数
    |- views            // 页面组件
|- .editorconfig       // 编辑器规范
|- .prettierignore     // 格式化忽略文件
|- .prettierrc         // 格式化配置
|- .stylelintrc.json   // CSS 样式检查规则
|- .jsconfig.json      // 编辑器扩展配置
|- eslint.config.js    // JS 代码检查配置
|- vite.config.js      // Vite 配置
```

## 技术栈

1. **Vite**：作为现代的构建工具，Vite 提供了更快的热更新和构建速度，减少了开发过程中的等待时间
2. **Vue 3**：用于构建用户界面，支持响应式设计和组件化开发，提升了开发效率和代码可维护性
3. **Pinia**：作为 Vue 3 的官方状态管理库，Pinia 提供了简单且高效的状态管理方案，替代了 Vuex，支持 TypeScript 类型推导
4. **Vue Router 4**：用于 Vue.js 应用的路由管理，支持动态路由、嵌套路由等，能够灵活处理不同页面和视图的转换
5. **Element Plus**：UI 组件库，包含丰富的组件，帮助快速构建用户界面，提升开发体验
6. **Axios**：用于处理 HTTP 请求，支持 Promise，简化了与服务器的交互，提升了数据请求的效率和可靠性
7. **Sass**：用于扩展 CSS，提供了变量、嵌套规则等功能，简化了样式的编写和管理
8. **ESLint**、**Prettier**、**Stylelint**：代码规范工具，确保代码的一致性和可读性，减少了潜在的错误
9. **Git 提交规范和 Husky 钩子**：提高代码提交的规范性，自动化执行代码检查和格式化，提升团队协作和代码质量
   - git add .
   - pnpm run commit
   - git push
10. **Vue DevTools**：用于调试 Vue 应用，查看组件树和状态，帮助开发人员快速定位问题
11. **国际化支持（i18n）**：项目内置了多语言支持，提升了应用的全球化适配能力

## 说明

### 一、assets

- **公共样式**：可存放于 `assets/css/common.css`
- **全局变量**：可存放于 `assets/css/variables.scss`
- **图片资源**：可存放于 `assets/img/`

### 二、components

用于存放全局公共组件

### 三、global

存放全局配置文件。当前已存在 `register-icons.js`，该文件用于注册 Element Plus 的所有图标

### 四、layout

布局组件。当前已有一个基础布局，可以根据需求扩展更多布局组件

### 五、locales

国际化配置。按语种划分文件夹，语言文件会自动加载。`generateMessages.js` 文件会自动导入对应语言的配置，支持多语言扩展

### 六、router

路由配置。按模块划分，`generateRoute.js` 文件会自动导入所有路由配置，支持轻松扩展更多模块的路由

### 七、services

网络请求模块。`modules` 文件夹存放具体的 API 请求，`request` 文件夹包含网络请求的核心方法，便于管理和复用

### 八、store

状态管理。通过 `modules` 存储各模块的数据，实现状态的集中管理，方便共享和更新

### 九、utils

工具函数。包括本地存储、函数防抖、节流等常用工具，帮助简化常见操作

### 十、views

页面组件。该文件夹用于存放各个页面组件，支持按模块和功能拓展更多视图

### 十一、代码规范配置

针对 ESLint、Stylelint、Prettier 等工具的配置，项目已经预设好代码风格规则。可以根据项目需要进行调整或添加新的规则

### 十二、环境配置

开发与生产环境的配置可以通过 `.env` 文件进行管理，根据不同环境进行适配

### 十三、运行

推荐使用 `pnpm` 来管理项目依赖和运行项目：

1. 安装依赖：`pnpm install`
2. 启动开发环境：`pnpm run dev`
