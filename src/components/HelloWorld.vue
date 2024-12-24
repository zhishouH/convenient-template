<script setup>
	import { ref } from 'vue'
	import { ElNotification } from 'element-plus'

	const count = ref(0)
	const handleCount = () => {
		count.value++

		ElNotification({
			title: 'Current Count',
			message: `This is a Current Count ${count.value}`,
			type: 'success',
		})
	}
</script>

<template>
	<section class="hello-world">
		<h1>{{ $t('hello-world.title') }}</h1>
		<el-button @click="handleCount">count is {{ count }}</el-button>
		<p>Edit components/HelloWorld.vue to test HMR</p>
	</section>
</template>

<style lang="scss" scoped>
	.hello-world {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	:global(.el-notification__title) {
		color: var(--el-color-success);
	}
</style>
