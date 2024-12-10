<script setup>
import subscriiptionPlans from "./cpns/subscriiption-plans.vue";
import collaborativeUser from "./cpns/collaborative-user.vue";
import translationInformation from "./cpns/translation-information.vue";
</script>

<template>
	<section id="overview">
		<subscriiptionPlans />
		<collaborativeUser />
		<translationInformation />
	</section>
</template>

<style lang="scss" scoped>
#overview {
	width: 100%;
	height: $oneScreenHeight;
	display: flex;
	flex-flow: column wrap;
	justify-content: space-between;
	align-content: space-between;

	& > div {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
}
</style>
