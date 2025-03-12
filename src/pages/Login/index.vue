<template>
    <div>
        <div class="loginContent">
            <ul class="title">登录</ul>
            <input class="input" v-model="username"/>
            <input class="input" v-model="password"/>
            <input class="input" v-model="vertifyCode"/>
            <img class="img" :src="`data:image/jpg;base64,${verifyCodeUrl}`" @click="getCapcha" alt="Base64 Image"/>
            <div
            
            ></div>
            <button class="button" @click="login">登录</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import http from '@/utils/request';
import { onBeforeMount, ref } from 'vue';
import { first } from 'lodash';
import md5 from 'blueimp-md5';
import router from '@/router';

const username = ref<string>() //账号
const password = ref<string>() //密码
const blobKey = ref<string>()  //验证码Key
const verifyCodeUrl = ref<string>() //验证码图片地址
const vertifyCode = ref<string | number>()  //验证码

const getCapcha = () => {
    http.get('/captcha?height=60').then((res) => {
        if (res.status === 0) {
            console.log(first(res.list))
            blobKey.value = first(res.list).key
            verifyCodeUrl.value = first(res.list).image
        }
    })
}

const login = () => {
    const str = {
        loginname: username.value,
        passwrd: md5(window.btoa(password.value)).toString(),
        vcode: vertifyCode.value,
        key: blobKey.value,
    }
    // console.log(str)
    http.get('/login', str).then((res) => {
        if (res.status === 0) {
            localStorage.setItem('token', first(res.list).token); //获取token
            localStorage.setItem('resource', JSON.stringify(first(res.list).modules)); //获取资源列表
            router.push('/')
        } else {
            getCapcha()
            console.log(res.statusDesc)
        }
    })
}

onBeforeMount(() => {
    getCapcha()
})

</script>

<style lang="css" scoped>
.loginContent{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title{
    font-weight: bold;
    font-size: 36px;
    color: #222222;
}
.input{
    width: 470px;
    height: 60px;
    background: #ECF6F4;
    border-radius: 5px;
    border: 1px solid #0C7A6A;
}
.img{
    width: 125px;
    height: 60px;
    background: #FAFBFF;
    border-radius: 5px;
    border: 1px solid #D9D9DE;
}
.button{
    width: 470px;
    height: 60px;
    background: #0C7A6A;
    box-shadow: 0px 12px 54px 0px rgba(12,122,106,0.33);
    border-radius: 5px;
}
</style>