<template>
    <div
        v-bind="attrs"
        ref="container"
    >
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import {onMounted, useAttrs, ref, provide} from 'vue'

// const props = defineProps<{
//   option: object
// }>()
const attrs = useAttrs()
console.log(attrs)

const container = ref();
const containerWidth = ref(0)
const containerHeight = ref(0)

provide('boxContext', {containerWidth, containerHeight})

onMounted(() => {
    let animationFrameID = null;
    const observer = new ResizeObserver((entries) => {
      const newContainerWidth = entries[0].contentRect.width;
      const newContainerHeight = entries[0].contentRect.height;
      if (newContainerWidth !== containerWidth.value || newContainerHeight !== containerHeight.value) {
        animationFrameID = window.requestAnimationFrame(() => {
            containerWidth.value = newContainerWidth
            containerHeight.value = newContainerHeight
        });
      }
    });
    observer.observe(container.value);
})

</script>
<style scoped>
</style>