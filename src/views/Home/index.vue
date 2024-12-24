<script setup>
	import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
	<section class="home">
		<a href="https://vite.dev" target="_blank">
			<img src="@/assets/img/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="@/assets/img/vue.svg" class="logo" alt="Vue logo" />
		</a>
		<a href="https://pinia.vuejs.org/" target="_blank">
			<img src="@/assets/img/pinia.svg" class="logo" alt="Pinia logo" />
		</a>
		<a href="https://element-plus.org/" target="_blank">
			<img src="@/assets/img/element-plus.svg" class="logo" alt="Element Plus logo" />
		</a>
	</section>
	<el-divider />
	<HelloWorld />
</template>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 40px;
		height: 200px;

		.logo {
			width: auto;
			height: 80px;
		}
	}
</style>
