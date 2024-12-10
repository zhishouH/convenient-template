<script setup></script>

<template>
	<el-main>
		<el-scrollbar>
			<router-view v-slot="{ Component }">
				<keep-alive>
					<component :is="Component" />
				</keep-alive>
			</router-view>
		</el-scrollbar>
	</el-main>
</template>

<style lang="scss" scoped>
	.el-main {
		height: calc(100vh - 50px);
		background-color: #f6f9ff;
	}
</style>
