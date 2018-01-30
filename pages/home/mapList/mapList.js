// mapList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '地图组件',
          items: [
            { title: '地图基础示例', link: '/pages/componentDemo/map/mapDemo/mapDemo' },
            { title: '轨迹移动缩放', link: '/pages/componentDemo/map/trajectory/trajectory' },
            { title: '获取位置并查看', link: '/pages/componentDemo/map/getLocation/getLocation' },
            { title: '地图综合示例', link: '/pages/componentDemo/mapsdk/mapComprehensive/mapComprehensive' }
          ]
        },
        {
          title: '地图服务',
          items: [
            { title: '周围兴趣点', link: '/pages/componentDemo/mapsdk/interestPointAroud/interestPointAroud' },
            { title: '搜索位置并查看', link: '/pages/componentDemo/mapsdk/mapSearchTips/mapSearchTips' },
            { title: '计算距离', link: '/pages/componentDemo/mapsdk/distanceCalculation/distanceCalculation' },
            { title: '路线选择与规划', link: '/pages/componentDemo/mapsdk/routePlanning/routePlanning' },
            { title: '绘制静态图', link: '/pages/componentDemo/mapsdk/drawStaticMap/drawStaticMap' },
            { title: '地址逆向解析-示例1', link: '/pages/componentDemo/mapsdk/mapSearchInput/mapSearchInput' },
            { title: '地址逆向解析-示例2', link: '/pages/componentDemo/mapsdk/reverseAddressResolution/reverseAddressResolution' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}