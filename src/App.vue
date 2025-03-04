<template>
  <RouterView class="content"></RouterView>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import useFontSize from './hooks/useFontSize';
import { useFontSizeStore } from '@/store/fontSize'

// const fontSize = 
// let fontSize = ref<number>(useFontSize())
const fontSizeStore = useFontSizeStore()
// const fontSize = fontSizeStore

onBeforeMount(() => {
  const animationFrameID = null;
  const observer = new ResizeObserver(() => {
    const newWidth = document.documentElement.clientWidth || 1920;
    const newFontSize = 16 * newWidth / 1920;
    console.log(fontSizeStore.fontSize, newFontSize)
    if (newFontSize !== fontSizeStore.fontSize) {
      document.documentElement.style.fontSize = `${newFontSize}px`;
      fontSizeStore.fontSize = newFontSize
      console.log(fontSizeStore.fontSize)
    }
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