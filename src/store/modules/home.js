import { defineStore } from 'pinia'
import { ref, useTemplateRef, computed } from 'vue'

const useHomeStore = defineStore('home', () => {
	/* state */
	const counter = ref(1)
	const counterEl = useTemplateRef('counter') // 句柄

	/* getter */
	const doubleCounter = computed(() => {
		return counter.value * 2
	})

	return {
		counter,
		doubleCounter,
		counterEl,
	}
})

export default useHomeStore
