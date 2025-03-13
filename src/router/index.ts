import {createRouter,createWebHistory} from 'vue-router'
// import Home from '@/pages/Home/index.vue'
// import News from '@/pages/News/index.vue'
// import About from '@/pages/About/index.vue'
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
			redirect: '/gis',
			children: [
				{
					name: 'GIS',
					path:'/gis',
					iconCode: 'e68c',
					redirect: '/gis/cesium',
					children: [
						{
							name: 'cesium',
							path: '/gis/cesium',
							iconCode: 'e6d6',
							component: () => import('@/pages/GIS/cesium/index.vue'),
						},
					]
				},
				{
					name: 'Chart',
					path:'/chart',
					iconCode: 'e68c',
					children: [
						{
							name: 'echart',
							path: '/chart/echart',
							iconCode: 'e6d6',
							component: () => import('@/pages/Chart/echart/index.vue'),
						},
					]
				},
				{
					name: '设备监测',
					path:'/equipmentMonitor',
					iconCode: 'e689',
					component:() => import('@/pages/equipmentMonitor/index.vue')
				},
				{
					name: '能耗管理',
					path:'/energyManagement',
					iconCode: 'e685',
					redirect: '/energyManagement/plan',
					// component:() => import('@/pages/energyManagement/index.vue'),
					children: [
						{
							name: '计划管理',
							path: '/energyManagement/plan',
							iconCode: 'e6d6',
							component: () => import('@/pages/energyManagement/plan/index.vue'),
						},
						{
							name: '规则管理',
							path: '/energyManagement/rule',
							iconCode: 'e6d6',
							component: () => import('@/pages/EnergyManagement/rule/index.vue'),
						},
						// {
						// 	name: '月能耗记录',
						// 	path: '/EnergyRecords',
						// 	iconCode: 'e6d6',
						// 	component: require('pages/EnergyManagement/EnergyRecords/Content/EnergyRecords').default,
						// },
						// {
						// 	name: '能耗报警',
						// 	path: '/EnergyAlarm',
						// 	iconCode: 'e6d6',
						// 	component: require('pages/EnergyManagement/EnergyAlarm/Content/EnergyAlarm').default,
						// },
						// {
						// 	name: '综合统计分析',
						// 	path: '/Statistics',
						// 	iconCode: 'e6d6',
						// 	component: require('pages/EnergyManagement/Statistics').default,
						// },
						// {
						// 	name: '设备能耗分析',
						// 	path: '/EquipEnergy',
						// 	iconCode: 'e6d6',
						// 	component: require('pages/EnergyManagement/EquipEnergy').default,
						// },
						// {
						// 	name: '分析报告',
						// 	path: '/AnalysisReport',
						// 	iconCode: 'e6d6',
						// 	component: require('pages/EnergyManagement/AnalysisReport').default,
						// },
						// {
						// 	name: '用水统计',
						// 	path: '/StatisticsWater',
						// 	iconCode: 'e6d6',
						// 	component: require('pages/EnergyManagement/StatisticsWater').default,
						// },
						// {
						// 	name: '用电统计',
						// 	path: '/StatisticsElectricity',
						// 	iconCode: 'e6d6',
						// 	component: require('pages/EnergyManagement/StatisticsElectricity').default,
						// }
					]
				},
				{
					name: '设备物联',
					path:'/equipmentInternet',
					iconCode: 'e688',
					component:() => import('@/pages/equipmentInternet/index.vue')
				},
				{
					name: '策略管理',
					path:'/strategyManagement',
					iconCode: 'e68d',
					component:() => import('@/pages/strategyManagement/index.vue')
				},
				{
					name: '系统管理',
					path:'/systemManagement',
					iconCode: 'e683',
					component:() => import('@/pages/systemManagement/index.vue')
				}
			]
		}
	]
})
export default router