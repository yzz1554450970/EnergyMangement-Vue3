import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/pages/Home/index.vue'
import News from '@/pages/News/index.vue'
import About from '@/pages/About/index.vue'
import Login from '@/pages/Login/index.vue'

const router = createRouter({
	history:createWebHistory(),
	routes:[
		{
			name: '登录',
			path:'/login',
			component: Login
		},
		{
			name: 'layout',
			path:'/',
			component: () => import('@/pages/Home/index.vue'),
			children: [
				{
					name: '能耗监测',
					path:'/energyMonitor',
					component: () => import('@/pages/energyMonitor/index.vue')
				},
				{
					name: '设备监测',
					path:'/equipmentMonitor',
					component:Home
				},
				{
					name: '能耗管理',
					path:'/energyManagement',
					component:News
				},
				{
					name: '设备物联',
					path:'/equipmentInternet',
					component:About
				},
				{
					name: '策略管理',
					path:'/strategyManagement',
					component:About
				},
				{
					name: '系统管理',
					path:'/systemManagement',
					component:About
				}
			]
		}
	]
})
export default router