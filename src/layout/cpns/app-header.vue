<script setup>
	import { ref, h } from 'vue'
	import { useRoute } from 'vue-router'
	import getAssetUrl from '@/utils/load-assets'
	import { watch } from 'vue'
	import { useRouter } from 'vue-router'

	// logo
	const logo = getAssetUrl('logo.svg')

	// 菜单数据
	const menuData = ref([
		{
			routerTitle: 'Overview',
			routerValue: '/overview',
			isActive: false,
		},
		{
			routerTitle: 'WebSite',
			routerValue: '/website',
			isActive: false,
		},
		{
			routerTitle: 'Subscribe',
			routerValue: '/subscribe',
			isActive: false,
		},
	])

	// 监听路由变化高亮菜单
	const route = useRoute()
	const isSearch = ref(false)
	const isNotice = ref(false)
	const isPerson = ref(false)
	watch(
		() => route.path,
		(newPath, oldPath) => {
			menuData.value.map(item => {
				const newItem = item
				if (newPath.includes(newItem.routerValue)) {
					newItem.isActive = true
				} else {
					newItem.isActive = false
				}

				return { ...newItem }
			})

			if (newPath.includes('/search')) {
				isSearch.value = true
			} else {
				isSearch.value = false
			}

			if (newPath.includes('/notice')) {
				isNotice.value = true
			} else {
				isNotice.value = false
			}

			if (newPath.includes('/person')) {
				isPerson.value = true
			} else {
				isPerson.value = false
			}
		},
		{ immediate: true }
	)

	const router = useRouter()
	const backToHome = () => {
		router.push('/overview')
	}
</script>

<template>
	<el-header>
		<h1
			class="logo"
			@click="backToHome"
		>
			<el-image
				class="logo-img"
				:src="logo"
				fit="cover"
			/>
			<strong>
				{{ $t('header.logoTitle') }}
			</strong>
		</h1>
		<div class="menu">
			<template
				v-for="item in menuData"
				:key="item.routerValue"
			>
				<router-link
					:class="['menu-item', { 'is-active': item.isActive }]"
					:to="item.routerValue"
				>
					{{ item.routerTitle }}
				</router-link>
			</template>
		</div>
		<div class="info">
			<router-link
				class="search"
				to="/search"
			>
				<el-icon
					size="20"
					:class="{ 'is-active': isSearch }"
					><Search
				/></el-icon>
			</router-link>
			<router-link
				class="notice"
				to="/notice"
			>
				<el-icon
					size="20"
					:class="{ 'is-active': isNotice }"
					><Notification
				/></el-icon>
			</router-link>
			<router-link
				class="personal"
				to="/personal"
			>
				<el-icon
					size="20"
					:class="{ 'is-active': isPerson }"
					><Avatar
				/></el-icon>
			</router-link>
		</div>
	</el-header>
</template>

<style lang="scss" scoped>
	.el-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		box-shadow: 0 0 0 1px #eee;
	}

	.logo {
		flex: 0 0 300px;
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;

		.logo-img {
			width: 30px;
			height: 30px;
		}
	}

	.menu {
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		gap: 40px;

		.menu-item {
			position: relative;
			display: flex;
			align-items: center;
			font-weight: bold;
			padding: 0 8px;

			&::before {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 4px;
				border-radius: 4px 4px 0 0;
				background-color: transparent;
				transition: $transition;
			}

			&.is-active {
				&::before {
					background-color: $primary-color;
				}
			}
		}
	}

	.info {
		flex: 0 0 300px;
		display: flex;
		justify-content: flex-end;
		gap: 16px;

		.is-active {
			color: $primary-color;
		}
	}
</style>
