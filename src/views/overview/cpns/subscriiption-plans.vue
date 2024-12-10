<script setup></script>

<template>
	<div class="subscriiption-plans">
		<h2 class="overview-title">Subscriiption Plans</h2>
		<div class="overview-content">
			<div class="content-item current-plan">
				<strong class="item-title">Current Plan:</strong>
				<span class="item-value">basic</span>
			</div>
			<div class="content-item rights-packages">
				<strong class="item-title">Rights Packages:</strong>
				<span class="item-value">2</span>
			</div>
			<div class="content-item days-of-use">
				<el-progress
					:text-inside="false"
					:stroke-width="12"
					:percentage="30"
					status="warning"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	$itemValuePrimaryColor: #ff8529;

	.subscriiption-plans {
		width: 30%;
		height: 60%;
	}

	.content-item {
		min-height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;
		border-bottom: 1px dashed #ccc;

		.item-title {
			font-size: 14px;
		}
	}

	.current-plan {
		padding-top: 0;

		.item-value {
			font-size: 14px;
			color: $itemValuePrimaryColor;
			background-color: #fff2d8;
			padding: 4px 8px;
			border-radius: 2px;
		}
	}

	.rights-packages {
		.item-value {
			color: $itemValuePrimaryColor;
		}
	}

	.days-of-use {
		background-color: teal;

		.el-progress--line {
			width: 100%;
		}
	}
</style>
