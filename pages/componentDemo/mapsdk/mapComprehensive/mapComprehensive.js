// mapComprehensive.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
var icon = require('#/images/map/ic_map_mode.png'),
  iconActive = require('#/images/map/ic_map_mode_active.png')

export default {
  data () {
    return {
      src: require('#/images/map/shop-1.png'),
      markers: [{
        id: 1,
        latitude: 39.855745,
        longitude: 116.368432,
        iconPath: iconActive,
        width: 23,
        height: 30
      }, {
        id: 2,
        latitude: 39.867277,
        longitude: 116.368475,
        iconPath: icon,
        width: 23,
        height: 30
      }, {
        id: 3,
        latitude: 39.857755,
        longitude: 116.364870,
        iconPath: icon,
        width: 23,
        height: 30
      }, {
        id: 4,
        latitude: 39.851907,
        longitude: 116.376114,
        iconPath: icon,
        width: 23,
        height: 30
      }, {
        id: 5,
        latitude: 39.863898,
        longitude: 116.375256,
        iconPath: icon,
        width: 23,
        height: 30
      }],
      latitude: 39.855745,
      longitude: 116.368432,
      textData: {},
      controls: [{
        id: 0,  // 设置当前控件id,且唯一
        iconPath: require('#/images/map/location.png'),
        clickable: true,
        position: {
          left: 15,
          top: 450,
          width: 64,
          height: 64
        }
      }],
      city: '',
      starData: [],
      mapHeight: ui.DEFAULT_CONTENT_HEIGHT + 'px'
    }
  },
  mounted () {
    var obj = {
      latitude: 39.855745,
      longitude: 116.368432
    }
    this.reserveAddr(obj)
  },
  methods: {
    // 标记点markers点击事件
    makertap (e) {
      var markerId = e.markerId
      // 执行标记点活动事件
      this.markerActive(markerId)
      // 执行更新信息事件
      this.infoChange(markerId)
    },
    // 标记点活动事件
    markerActive (id) {
      // 遍历marker数组若每一项的id与传过来的参数id相等  那么将该项的图标变为活动状态
      var a = this.markers.map((item, index) => {
        return item.id === id ? {
          id: item.id,
          latitude: item.latitude,
          longitude: item.longitude,
          iconPath: iconActive,
          width: item.width,
          height: item.height
        } : {
          id: item.id,
          latitude: item.latitude,
          longitude: item.longitude,
          iconPath: icon,
          width: item.width,
          height: item.height
        }
      })
      this.setData({
        markers: a
      })
    },
    // 更新信息事件
    infoChange (id) {
      var current = this.markers.filter((item, index) => {
        return item.id === id
      })[0]
      this.reserveAddr(current)
    },
    reserveAddr (markerObj) {
      // 调用amapFile.AMapWX构造函数创建myAmapFun实例
      var myAmapFun = new amapFile.AMapWX({ key: key })
      // 根据参数的坐标值,调用getRegeo方法逆解析地址
      myAmapFun.getRegeo({
        location: `${markerObj.longitude},${markerObj.latitude}`,
        success: (data) => {
          // 调用成功则将相关数据存储至textData
          this.setData({
            textData: {
              name: data[0].regeocodeData.formatted_address,
              address: data[0].name,
              latitude: data[0].latitude,
              longitude: data[0].longitude
            }
          })
        }
      })
    },
    // 点击文本详情跳转本机地图查看事件
    open () {
      // 调用ui.openLocation方法打开本机地图查看
      ui.openLocation({
        backgroundColor: 'rgb(51, 153, 255)',
        longitude: Number(this.textData.longitude),
        latitude: Number(this.textData.latitude),
        name: this.textData.name,
        address: this.textData.address,
        scale: 16
      })
    },
    controltap (e) {
      var mapCtx = ui.createMapContext('map')
      if (e.controlId === 0) {
        // 调用获取的map对象的移动地图中心点到定位点方法
        mapCtx.moveToLocation()
      }
    },
    toDetail () {
      ui.navigateTo({
        url: `/pages/component/mapComprehensive/detail/detail?lat=${this.textData.latitude}&lng=${this.textData.longitude}`
      })
    }
  }
}
