<template>
	<div class="app-header">
		<RouterLink to="/home">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
	.app-header {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		height: 50px;
	}

	a {
		font-weight: bold;
		text-decoration: none;
		color: #333;
	}

	.router-link-active {
		color: $primary-color;
	}
</style>
