<template>
    <div class="header">Vue路由测试</div>
    <div class="body">
        <!-- 导航区 -->
        <div class="navigate">
            <div v-for="item in menuList" :key="item.path" style="width: 100%">
                <RouterLink class="tab parentTab" active-class="tab-active" :to="item.path">
                    {{ item.name }}
                    <Icon 
                        :code="item.iconCode" 
                        color="#222222"
                        class="icon"
                    ></Icon>
                </RouterLink>
                <RouterLink class="tab" active-class="tab-active" :to="ele.path" v-for="ele in item.children" :key="ele.path" >
                    {{ ele.name }}
                </RouterLink>
            </div>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script lang="ts" setup>
// import router from '@/router'
import { defineOptions } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Icon from '@/components/Icon/Icon.vue'

defineOptions({
  name: 'HomeComponent'
});

const route = useRouter()
const menuList = route.options.routes[1].children

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
    height: calc(100% - 56px);
    padding: 0 18px;
    background: #F4FAF9;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.parentTab{
    display: flex;
    align-items: center;
}
.tab{
    width: 100%;
    height: 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
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