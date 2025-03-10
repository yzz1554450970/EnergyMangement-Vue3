<template>
    <div class="header">Vue路由测试</div>
    <div class="body">
        <!-- 导航区 -->
        <div class="navigate">
            <div v-for="item in menuList" :key="item.path">
                <RouterLink class="tab" :to="item.component?item.path:''" active-class="active">{{ item.name }}</RouterLink>
                <RouterLink class="tab" v-for="ele in item.children"  :to="ele.path" active-class="active">{{ ele.name }}</RouterLink>
            </div>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterLink, RouterView, useRouter } from 'vue-router'

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
    background: #F4FAF9;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tab{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #79837C;
}

.active {
    color: blueviolet;
}
</style>