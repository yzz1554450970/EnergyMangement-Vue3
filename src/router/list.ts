export default [
    {
        name: '能耗监测',
        path: '/EnergyMonitoring',
        iconCode: 'e68c',
        redirect: '/Comprehensive',
        children: [
            {
                name: '综合监测',
                path: '/Comprehensive',
                iconCode: 'e6d6',
                component: require('pages/EnergyMonitoring/Comprehensive/Comprehensive').default,
            },
            {
                name: '设备类型监测',
                path: '/EquipmentType',
                iconCode: 'e6d6',
                component: require('pages/EnergyMonitoring').default,
            },
            {
                name: '能源类型监测',
                path: '/EnergytType',
                iconCode: 'e6d6',
                component: require('pages/EnergyMonitoring/EnergytType/EnergytType').default,
            },
        ]
    },
    {
        name: '设备监测看板',
        path: '/EquipmentMonitoring',
        iconCode: 'e689',
        redirect: '/Comprehensive',
        // component: require('pages/EquipmentMonitoring').default,
        list: [
            {
                name: '综合监测',
                path: '/Comprehensive',
                iconCode: 'e6d6',
                component: require('pages/EquipmentMonitoring/Comprehensive/Comprehensive').default,
            },
            {
                name: '空调监测',
                path: '/Air',
                iconCode: 'e6d6',
                component: require('pages/EquipmentMonitoring/Air/Air').default,
            },
            {
                name: '给排水监测',
                path: '/Water',
                iconCode: 'e6d6',
                component: require('pages/EquipmentMonitoring/Water/Water').default,
            },
            {
                name: '照明监测',
                path: '/Light',
                iconCode: 'e6d6',
                component: require('pages/EquipmentMonitoring/Light/Light').default,
            },
            {
                name: '电梯监测',
                path: '/Lift',
                iconCode: 'e6d6',
                component: require('pages/EquipmentMonitoring/Lift/Lift').default,
            },
            {
                name: '设备故障',
                path: '/EquipmentFailure',
                iconCode: 'e6d6',
                component: require('pages/EquipmentMonitoring/EquipmentFailure/EquipmentFailure').default,
            },
        ]
    },
    {
        name: '能耗管理',
        path: '/EnergyManagement',
        iconCode: 'e685',
        redirect: '/Plan',
        list: [
            {
                name: '计划管理',
                path: '/Plan',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/PlanRule/Plan/Content/Plan').default,
            },
            {
                name: '规则管理',
                path: '/Rule',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/PlanRule/Rule/Content/Rule').default,
            },
            {
                name: '月能耗记录',
                path: '/EnergyRecords',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/EnergyRecords/Content/EnergyRecords').default,
            },
            {
                name: '能耗报警',
                path: '/EnergyAlarm',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/EnergyAlarm/Content/EnergyAlarm').default,
            },
            {
                name: '综合统计分析',
                path: '/Statistics',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/Statistics').default,
            },
            {
                name: '设备能耗分析',
                path: '/EquipEnergy',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/EquipEnergy').default,
            },
            {
                name: '分析报告',
                path: '/AnalysisReport',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/AnalysisReport').default,
            },
            {
                name: '用水统计',
                path: '/StatisticsWater',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/StatisticsWater').default,
            },
            {
                name: '用电统计',
                path: '/StatisticsElectricity',
                iconCode: 'e6d6',
                component: require('pages/EnergyManagement/StatisticsElectricity').default,
            }
        ]
    },
    {
        name: '策略管理',
        path: '/RuleManagement',
        iconCode: 'e68d',
        // component: require('pages/RuleManagement/RuleManagement').default,
        redirect: '/PolicyModel',
        list: [
            {
                name: '策略中台',
                path: '/PolicyModel',
                iconCode: 'e6d6',
                component: require('pages/RuleManagement/PolicyModel').default,
            },
            {
                name: '空调策略设置',
                path: '/AirConditioning',
                iconCode: 'e6d6',
                component: require('pages/RuleManagement/AirConditioning').default,
            },
            {
                name: '新风策略设置',
                path: '/FreshAirConditioning',
                iconCode: 'e6d6',
                component: require('pages/RuleManagement/FreshAirConditioning').default,
            },
            {
                name: '水泵策略设置',
                path: '/WaterPump',
                iconCode: 'e6d6',
                component: require('pages/RuleManagement/WaterPump').default,
            },
            // {
            //   name: '电梯策略设置',
            //   path: '/Lift',
            //   iconCode: 'e6d6',
            //   component: require('pages/RuleManagement/Lift').default,
            // },
            {
                name: '照明策略设置',
                path: '/IndoorLighting',
                iconCode: 'e6d6',
                component: require('pages/RuleManagement/IndoorLighting').default,
            }
        ]
    },
    {
        name: '设备物联',
        path: '/EquipmentControl',
        iconCode: 'e688',
        // component: require('pages/EquipmentControl/IoTPlatform').default,
        // redirect: '/HighwayFile',
        list: [
            {
                name: '物联中台',
                path: '/IoTPlatform',
                iconCode: 'e6d6',
                component: require('pages/EquipmentControl/IoTPlatform').default,
            },
            {
                name: '设备物模型',
                path: '/EquipmentModel',
                iconCode: 'e6d6',
                component: require('pages/EquipmentControl/IoTPlatform/Details').default,
            },
            {
                name: '设备列表',
                path: '/EquipmentList',
                iconCode: 'e6d6',
                component: require('pages/EquipmentControl/IoTPlatform/Details').default,
            },
            {
                name: '设备管控',
                path: '/EquipmentControl',
                iconCode: 'e6d6',
                component: require('pages/EquipmentControl/IoTPlatform/Details').default,
            },
            // {
            //   name: '物联总览',
            //   path: '/EquipmentDetection',
            //   iconCode: 'e6d6',
            //   component: require('pages/EquipmentControl/EquipmentDetection').default,
            // }
        ]
    },
    {
        name: '系统管理',
        path: '/System',
        iconCode: 'e683',
        redirect: '/User',
        list: [
            {
                name: '用户管理',
                path: '/User',
                iconCode: 'e6d6',
                component: require('pages/System/User').default,
            },
            {
                name: '角色管理',
                path: '/Role',
                iconCode: 'e6d6',
                component: require('pages/System/Role').default,
            },
            {
                name: '部门管理',
                path: '/Org',
                iconCode: 'e6d6',
                component: require('pages/System/Org').default,
            },
            {
                name: '日志管理',
                path: '/Log',
                iconCode: 'e6d6',
                component: require('pages/System/Log/LogM').default,
            }
        ]
    },
];