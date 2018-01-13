// getLocation.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
export default {
  data () {
    return {
      latitude: '',
      longitude: '',
      location: {},
      hasLocation: false,
      textDatas: {}
    }
  },
  mounted () {

  },
  methods: {
    getLocation () {
      ui.getLocation({
        type: 'gcj02',
        success: (res) => {
          this.setData({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            longitude: res.longitude,
            latitude: res.latitude,
            hasLocation: true
          })
          this.getLocalInfo()
        },
        fail: (res) => {
        }
      })
    },
    getLocalInfo () {
      var myAmapFun = new amapFile.AMapWX({ key: key })
      myAmapFun.getRegeo({
        location: `${this.longitude},${this.latitude}`,
        success: (data) => {
          // 调用成功则将相关数据存储至textData
          this.setData({
            textDatas: {
              name: data[0].regeocodeData.formatted_address,
              address: data[0].name,
              latitude: data[0].latitude,
              longitude: data[0].longitude
            }
          })
        },
        fail: (info) => {
        }
      })
    },
    openLocation () {
      if (!this.hasLocation) return
      ui.openLocation({
        backgroundColor: 'rgb(51, 153, 255)',
        longitude: Number(this.longitude),
        latitude: Number(this.latitude),
        name: this.textDatas.name,
        address: this.textDatas.address,
        scale: 16
      })
      // ui.openSysMap({
      //   latitude: Number(this.longitude),
      //   longitude: Number(this.latitude),
      //   name: this.textDatas.name,
      //   success: function(res) {
      //   },
      //   fail: function(res) {
      //   },
      //   complete: function(res) {
      //   }
      // })
    }
  }
}
