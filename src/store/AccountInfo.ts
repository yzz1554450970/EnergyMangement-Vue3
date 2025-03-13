// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useAccountInfoStore = defineStore('accountInfo',{
  // 动作
  actions:{
    changeUserInfo (val:object) {
        this.userInfo = val
    },
    changeResource (val:Array) {
        this.resource = val
    }
  },
  // 状态
  state(){
    return {
        userInfo: {
            name: 'admin',
            age: '11'
        }, //用户信息
        resource: [] //权限 资源列表
    }
  },
  // 计算
  getters:{}
})