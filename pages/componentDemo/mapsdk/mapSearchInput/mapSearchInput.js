// mapSearchInput.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
export default {
  data () {
    return {
      text: '北京市',
      latitude: '',
      longitude: '',
      location: {
        latitude: 39.854192,
        longitude: 116.362123
      },
      src: require('#/images/map/pos.png')
    }
  },
  mounted () {

  },
  methods: {
    fn () {
      this.reserveAddr()
      ui.getLocation({
        type: 'wgs84',
        success: (res) => {
          this.setData({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            }

          })
          this.reserveAddr()
        },
        fail: (err) => {
        }
      })
    },
    reserveAddr () {
      var myAmapFun = new amapFile.AMapWX({ key: key })
      myAmapFun.getRegeo({
        iconPath: require('#/images/map/marker.png'),
        iconWidth: 22,
        iconHeight: 32,
        location: this.location.longitude + ',' + this.location.latitude,
        success: (data) => {
          this.setData({
            text: data[0].name
          })
        },
        fail: (info) => {
        }
      })
    },
    toast () {
      ui.showToast({ title: '此示例用于演示地址逆向解析' })
    }
  }
}
