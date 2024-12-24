import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHomeData } from '@/services/index'

const useHomeStore = defineStore('home', () => {
	/* state */
	const homeData = ref({})

	/* action */
	const getHomeDataAction = async params => {
		const res = await getHomeData(params)

		homeData.value = res.data
	}

	return {
		homeData,
		getHomeDataAction,
	}
})

export default useHomeStore
