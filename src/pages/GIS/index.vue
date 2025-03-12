<template>
    <div id="cesiumContainer" ref="cesiumContainer"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as Cesium from 'cesium'
import '@/assets/Widgets/widgets.css'

//设置cesium静态资源的路径
window.CESIUM_BASE_URL = '/Cesium';
onMounted(() => {
    const viewer = new Cesium.Viewer('cesiumContainer')
})

</script>

<style scoped>
#cesiumContainer{
    width: 100%;
    height: 100%;
}
</style>