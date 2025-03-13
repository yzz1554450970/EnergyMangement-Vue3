
import { useAttrs, defineOptions, ref,unref, onMounted, onUnmounted, nextTick, watch, onBeforeUnmount, watchEffect } from 'vue';
import * as echarts from 'echarts';

const useEcharts = (chartRef: Ref<HTMLDivElement>, option:Ref<object>) => {
console.log(chartRef, option.value)
    let chartInstance = null;

    const initCharts = () => {
        const el = unref(chartRef)
        if (!el || !unref(chartRef)) {
            return
        }
        chartInstance = echarts.init(el)
    }

    const resize = () => {
        chartInstance?.resize()
    }

    const setOption = (option, clear = true) => {
        nextTick(() => {
            if (!chartInstance) {
                initCharts()

                if (!chartInstance) {
                    return
                }
            }
            clear && chartInstance?.clear()

            chartInstance?.setOption(option)
        })
    }

    watchEffect( () => {
        if (chartInstance) {
            // chartInstance.dispose()
            // initCharts()
            setOption(option.value)
        } else {
            initCharts()
            setOption(option.value)
        }
    })

    onBeforeUnmount(() => { //销毁
        if (chartInstance) {
            chartInstance.dispose()
        }
    })

}


export default useEcharts;