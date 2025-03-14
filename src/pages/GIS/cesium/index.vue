<template>
    <div id="cesiumContainer" ref="cesiumContainer"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as Cesium from 'cesium'
import '@/assets/Widgets/widgets.css'

//设置cesium的token
// Cesium.Ion.defaultAccessToken = ''
Cesium.Ion.defaultAccessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkOWQ4OGU2ZS0xMDllLTRmOWEtYWI3OC1lMGMxOTgyYTRjYzEiLCJpZCI6MjgzNDc5LCJpYXQiOjE3NDE3NjA1NjJ9.4eoRXeFJf4Lm4Nuj7OsrQi47T0q2w1r-47tcnpnEaaU'

//设置cesium静态资源的路径
window.CESIUM_BASE_URL = '/Cesium';

onMounted(() => {
    // viewer 是所有API的开始 
    // 默认谷歌影像图层 这里使用ArcGIS影像图层
    const esri = new Cesium.ArcGisMapServerImageryProvider({
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/Mapserver",
        enablePickFeatures:false,
    })
    const viewer = new Cesium.Viewer('cesiumContainer' , {
        // imageryProvider: esri, //自定义图层
        // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        //     url: '',
        //     layer: 
        // })
        // terrainProvider: Cesium.createWorldTerrain(), //地形图层
        terrainProvider: Cesium.createWorldTerrain({
            requestVertexNormals: true,
            requestWaterMask: true
        }),
        // requestWaterMask: true, //水面特效 没必要的话无需设置
        // 隐藏控件
        timeline:false, // 控制下方时间轴控件
        animation:false, // 控制左下角的动画控件
        geocoder:false, // 控制右上角第一个位置的搜索按钮
        homeButton:false, // 控制右上角第二个位置的home图标-主页按钮
        sceneModePicker:false, // 投影方式按钮 控制右上角第三个位置的选择视角模式，2d，3d
        baseLayerPicker:false, // 控制右上角第四个位置的图层选择按钮
        navigationHelpButton:false, // 控制右上角第五个位置的帮助按钮
        vrButton: false, // 右下角vr按钮
        infoBox: false, // 不显示点击要素之后显示的信息
        selectionIndicator: false, // 隐藏选中状态
        shouldAnimate: true, // 允许动画同步
        fullscreenButton:false, // 右下角全屏按钮
        // skyBox: new Cesium.SkyBox({
        //     sources {
        //     }
        // })
    })
    viewer._cesiumWidget._creditContainer.style.display="none";//取消版权信息
})

</script>

<style scoped>
#cesiumContainer{
    width: 100%;
    height: 100%;
}
</style>