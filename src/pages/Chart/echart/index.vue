<template>
    
    <Box class="chartBox">
        <Echarts
            :option="option"
        ></Echarts>
    </Box>
    <button @click="changeData">改变数值</button>
</template>
<script lang="ts" setup>
import Echarts from '@/components/Echart/index.vue'
import { onMounted, ref } from 'vue';
import useEcharts from '@/hooks/useEcharts';
import Box from '@/components/Box/Box.vue';

const option = ref({
    // 这里是ECharts的配置项，可以根据需要绘制不同类型的图表
    title: {
    text: 'ECharts 示例图表'
    },
    tooltip: {},
    xAxis: {
    data: ['类别1', '类别2', '类别3', '类别4', '类别5']
    },
    yAxis: {},
    series: [{
        name: '数据系列',
        type: 'line', // 这里可以是'line'、'bar'、'pie'等，根据图表类型选择
        data: [120, 200, 150, 80, 70]
    }]
})
const changeData = () => {
    option.value = {
        title: {
        text: 'ECharts 示例图表'
        },
        tooltip: {},
        xAxis: {
        data: ['类别1', '类别2', '类别3', '类别4', '类别5']
        },
        yAxis: {},
        series: [{
            name: '数据系列',
            type: 'line', // 这里可以是'line'、'bar'、'pie'等，根据图表类型选择
            data: [220, 200, 150, 80, 70]
        }]
    }
}
</script>
<style scoped>
.chartBox{
    height: 400px;
    width: 600px;
}
</style>