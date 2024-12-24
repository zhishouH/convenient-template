<script setup></script>

<template>
	<section class="about">
		<h1 class="title">Convenient Template</h1>
		<el-divider />
		<p class="desc">
			采用了现代前端开发的最佳实践，利用 Vite、Vue 3、Vue Router、Pinia、Element Plus 等技术
		</p>
		<p class="desc">
			集成了VueDevTools、Vue-i18n、Axios、Debounce、Throttle、Cache、Eslint、Stylelint、Prettier
			等工具
		</p>
		<p class="desc">
			一系列的工具和插件提升代码质量和团队协作效率，使得整个开发过程更加高效和规范，适合快速迭代和持续集成
		</p>
		<p class="desc">实现了高效、灵活和可维护的开发架构</p>
	</section>
</template>

<style lang="scss" scoped>
	.about {
		.title {
			margin: 0;
			height: 200px;
			line-height: 200px;
			text-align: center;
		}

		.desc {
			margin: 25px 0;
			text-align: center;

			&:first-of-type {
				margin-top: 50px;
			}
		}
	}
</style>
