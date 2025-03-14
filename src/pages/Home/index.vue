<template>
    <div>
        <Header></Header>
        <div class="body">
            <!-- 导航区 -->
            <div class="navigate">
                <div v-for="item in menuList" :key="item.path" style="width: 100%">
                    <div class="parentTab" @click="item.showchild = !item.showchild">
                        <div class="parentTab_tilte">
                            <Icon 
                                :code="item.iconCode" 
                                color="#222222"
                                class="icon"
                                style="margin-right: 10px;"
                            ></Icon>
                            {{ item.name }}
                        </div>
                        <Icon 
                            code="e6d9" 
                            color="#222222"
                            class="icon"
                            :style="{transform:(item.showchild?'rotate(90deg)':'')}"
                        ></Icon>
                    </div>
                    <RouterLink v-show="item.showchild" class="tab" active-class="tab-active" :to="ele.path" v-for="ele in item.children" :key="ele.path" >
                        {{ ele.name }}
                        <Icon 
                            code="e6d9" 
                            color="#222222"
                            class="icon"
                        ></Icon>
                    </RouterLink>
                </div>
            </div>
            <!-- 展示区 -->
            <div class="main-content">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
// import router from '@/router'
import { computed, defineOptions, onBeforeMount, reactive,toRef, ref, watchEffect } from 'vue'
import { RouterLink, RouterView, useRouter, type RouteRecordRaw } from 'vue-router'
import Icon from '@/components/Icon/Icon.vue'
import {first} from 'lodash'
import http from '@/utils/request';
import Header from './header.vue';

defineOptions({
  name: 'HomeComponent'
});

const router = useRouter()

interface MenuListItem {
  name: string,
  path: string,
  iconCode: string,
  children?: {
    name: string,
    path: string,
  }[]
}

console.log(router.getRoutes())
const menuList = computed(() => {
    return first(router.options.routes.filter(ele => ele.name === 'layout'))?.children?.map(item => ({
        ...item,
        showchild: true
    })) as MenuListItem[]
}) 

// const getInfo = () => {
//     http.get('/info').then((res) => {
//         if (res.status === 0) {
//             console.log(res)
//         } else {
//             console.log(res.statusDesc)
//         }
//     })
// }

// onBeforeMount(() => {
//     getInfo()
// })

</script>

<style scoped>
.header {
    width: 100%;
    height: 56px;
    background: #F4FAF9;
}

.body {
    display: flex;
    height: calc(100% - 56px);
}

.navigate {
    width: 291px;
    height: 100%;
    background: #F4FAF9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px;
}
.parentTab{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    color: #79837C;
    cursor: pointer;
    padding: 0 18px;
}
.parentTab_tilte{
    display: flex;
    align-items: center;
}
.tab{
    width: 100%;
    height: 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px 0 60px;
    font-size: 18px;
    color: #79837C;
    cursor: pointer;
    margin: 2px 0;
}
.tab:hover{
    background: #0C7A6A;
    width: 100%;
    border-radius: 4px;
    color: #FFFFFF;
}
.tab-active{
    background: #0C7A6A;
    width: 100%;
    border-radius: 4px;
    color: #FFFFFF;
}

.active {
    color: blueviolet;
}
.icon{
    height: 18px;
    width: 18px;
}
</style>