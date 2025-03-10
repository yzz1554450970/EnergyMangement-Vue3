<template>
  <RouterView class="content"></RouterView>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';

onBeforeMount(() => { //根据浏览器大小变化实时改变根元素的fontsize
  const animationFrameID = null;
  const observer = new ResizeObserver(() => {
    const newWidth = document.documentElement.clientWidth || 1920;
    const newFontSize = 16 * newWidth / 1920;
    document.documentElement.style.fontSize = `${newFontSize}px`;
  });
  observer.observe(document.body);
  return () => {
    observer.disconnect();
    window.cancelAnimationFrame(animationFrameID);
  };
})
</script>

<style scoped>
.content{
  height: 100%;
  width: 100%;
  
}
</style>