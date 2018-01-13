// reverseAddressResolution.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
export default {
  data () {
    return {
      markers: [],
      latitude: '',
      longitude: '',
      textData: {},
      mapHeight: ui.DEFAULT_CONTENT_HEIGHT - 35 + 'px'
    }
  },
  mounted () {
    // 执行地址逆解析初始化事件
    this.init()
  },
  methods: {
    // 地址逆解析初始化事件
    init () {
      // 调用 amapFile.AMapWX 构造函数创建yAmapFun实例
      var myAmapFun = new amapFile.AMapWX({ key: key })

      // 调用getRegeo方法获取解析数据
      myAmapFun.getRegeo({
        // 解析地点的显示图标
        iconPath: require('#/images/map/marker.png'),
        // 定于图标宽高
        iconWidth: 22,
        iconHeight: 32,
        // 配置指定位置坐标,若未配置则默认为当前定位位置
        location: '116.38482,39.94858',
        // 调用成功则执行此回调函数逻辑
        success: (data) => {
          this.refreshData(data)
        },
        // 调用失败则执行此回调函数逻辑
        fail: (info) => {
        }
      })
    },
    refreshData (data) {
      var marker = [{
        id: data[0].id,
        latitude: data[0].latitude,
        longitude: data[0].longitude,
        iconPath: data[0].iconPath,
        width: data[0].width,
        height: data[0].height
      }]
      this.setData({
        markers: marker
      })
      this.setData({
        latitude: data[0].latitude
      })
      this.setData({
        longitude: data[0].longitude
      })
      this.setData({
        textData: {
          name: data[0].name,
          desc: data[0].desc
        }
      })
    }
  }
}

