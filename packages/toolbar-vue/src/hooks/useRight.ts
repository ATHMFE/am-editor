import { ref, onMounted, Ref } from 'vue';
import { isMobile } from 'aomao_engine';

const useRight = (button: Ref<HTMLElement | null>) => {
	const isRight = ref(false);

	onMounted(() => {
		if (button.value && isMobile) {
			const rect = button.value.getBoundingClientRect();
			isRight.value = rect.left > window.visualViewport.width / 2;
		}
	});

	return isRight;
};

export default useRight;
