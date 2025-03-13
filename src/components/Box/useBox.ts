import { inject } from 'vue'
const useBox = () => {
  const { containerWidth, containerHeight } = inject('boxContext', { containerWidth: 400, containerHeight: 300 })

  return {
    containerWidth,
    containerHeight,
  };
};

export default useBox;
