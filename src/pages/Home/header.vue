<template>
    <div class="header">
        <div class="title">Vue3-cli</div>
        <div class="adminContent">
            <ul>{{ accountInfoStore.userInfo?.name }}</ul>
            <button @click="loginOut">登出</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
// import router from '@/router'
import { computed, onBeforeMount, reactive, ref, watchEffect } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Icon from '@/components/Icon/Icon.vue'
import http from '@/utils/request';
import { useAccountInfoStore } from '@/store/AccountInfo';

const accountInfoStore = useAccountInfoStore()

const loginOut = () => {
    accountInfoStore.changeUserInfo(null)
    accountInfoStore.changeResource(null)
}

</script>

<style scoped>
.header {
    width: 100%;
    height: 56px;
    background: #F4FAF9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.title{
    font-size: 30px;
    color:cornflowerblue;
}
.adminContent{
    display: flex;
    align-items: center;
}
</style>