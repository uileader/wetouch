// distanceCalculation.js
var QQMapWX = require('qqmap-touchui')
var key = 'RHGBZ-S2LAU-5MRV7-4QPTZ-JI25K-HVBDV'

var list = []
export default {
  data () {
    return {
      mapHeight: ui.DEFAULT_CONTENT_HEIGHT - 35 + 'px',
      latitude: 39.853212,
      longitude: 116.371388,
      froms: {},
      to: {},
      distance: 0,
      mapCTX: null,
      markers: [{
        iconPath: require('#/images/map/mapicon_navi_s.png'),
        id: 0,
        latitude: 39.853212,
        longitude: 116.371388,
        width: 23,
        height: 33
      }, {
        iconPath: require('#/images/map/mapicon_navi_e.png'),
        id: 0,
        latitude: 39.855060,
        longitude: 116.368650,
        width: 24,
        height: 34
      }]
    }
  },
  mounted () {
    // 组件挂载完成后执行初始化
    this.init()
  },
  methods: {
    init () {
      // 调用QQMapWX构造函数构建map对象挂载到组件data中
      this.mapCTX = new QQMapWX({key: key})
      // 调用calculateDistance方法获取数据
      // 详见touch-ui文档腾讯地图SDK距离计算
      this.mapCTX.calculateDistance({
        from: {
          latitude: 39.853312,
          longitude: 116.371488
        },
        to: [{
          location: {
            lat: 39.853212,
            lng: 116.371388
          }
        }],
        success: (res) => {
          // 接口调用成功则执行更新数据事件
          this.refreshData(res)
        },
        fail: (res) => {
          // 失败则执行此逻辑
        },
        complete: () => {
          // 成功与否都会执行此逻辑
        }
      })
    },
    // 更新组件数据事件
    refreshData (response) {
      list = response.result.elements[0]
      this.setData({
        froms: {
          latitude: list.from.lat,
          longitude: list.from.lng
        },
        to: {
          latitude: list.to.lat,
          longitude: list.to.lng
        },
        distance: list.distance
      })
    }
  }

}

