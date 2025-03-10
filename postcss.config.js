export default {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16, // 基准大小 base size，根据设计稿的宽度来定，比如设计稿是750px，那么这里可以设置为75
        propList: ['*'], // 可以从px变为rem的属性值
        selectorBlackList: ['html'], // 过滤掉不转换的类名
        replace: true, // 替换包含REM的规则，而不是添加回退
        mediaQuery: false, // 允许在媒体查询中转换px
        minPixelValue: 3 // 设置要替换的最小像素值（3px会被转rem）
      }
    }
  }