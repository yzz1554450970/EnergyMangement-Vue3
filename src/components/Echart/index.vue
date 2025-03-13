<template>
  <div ref="chartDom" class="chart"></div>
</template>

<script lang="ts" setup>
import { useAttrs,inject, defineOptions, ref, onMounted, onUnmounted, nextTick, watch, onBeforeUnmount, watchEffect } from 'vue';
import * as echarts from 'echarts';
import useBox from '@/components/Box/useBox';

// defineOptions({
//   name: 'IconComponent'
// })

const props = defineProps<{
  option: object
}>()
const attrs = useAttrs()

// const {containerWidth, containerHeight} = inject('boxContext', {containerWidth:400, containerHeight:300})
const {containerWidth, containerHeight} = useBox()
// watchEffect(() => {
//   console.log(containerWidth.value, containerHeight.value)
// })

// 创建一个响应式引用来保存DOM元素
const chartDom = ref(null);
let chartInstance = null;

// const

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
  await nextTick(); // 确保DOM已经渲染完成
  chartInstance = echarts.init(chartDom.value);
  // const option = props.option;
  chartInstance.setOption(props.option);
});


watch([() => props.option],()=>{ //监听option,发生变化就重新渲染
  if (chartInstance) {
    chartInstance.setOption(props.option);
  }
}, {deep:true})

watch([containerWidth, containerHeight],()=>{ //监听option,发生变化就重新渲染
  if (chartInstance) {
    chartInstance.resize();
  }
}, {})

onBeforeUnmount(() => { //销毁
  if (chartInstance) {
    chartInstance.dispose()
  }
})


</script>

<style scoped>
.chart{
  height: 100%;
  width: 100%;
}
</style>