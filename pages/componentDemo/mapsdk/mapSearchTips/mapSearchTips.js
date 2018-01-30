// mapSearchTips.js
// mapSearchTips.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
var QQMapWX = require('qqmap-touchui')
var qqkey = 'RHGBZ-S2LAU-5MRV7-4QPTZ-JI25K-HVBDV'
// var api = require('touchui-api')
var lonlat
var city
export default {
  data () {
    return {
      tips: [],
      prevent: false,
      keywords: ''
    }
  },
  mounted () {

  },
  methods: {

    // 输入框正在输入时触发的事件
    bindInput (e) {
      // 通过e.target.value获得输入框当前的值
      var keywords = this.keywords
      // 调用amapFile.AMapWX方法构建myAmapFun对象
      var myAmapFun = new amapFile.AMapWX({ key: key })

      // myAmapFun对象调用getInputtips方法获得搜索提示数据
      myAmapFun.getInputtips({
        keywords: keywords, // 输入框键入的关键字
        location: lonlat, // 坐标
        city: city, // 城市
        success: (data) => { // 调用成功后的回调函数
          if (data && data.tips) {
            this.setData({
              tips: data.tips
            })
          }
        }
      })
    },
    // 搜索显示列表点击事件触发
    bindSearch (e) {
      var keywords = e.target.dataset.keywords
      // 调用QQMapWX构造函数构建出qqmap对象
      var qqmap = new QQMapWX({key: qqkey})
      // qqmap调用geocoder方法来获取
      qqmap.geocoder({
        address: `北京${keywords}`,
        success: (res) => {
          // 调用成功则执行文字描述转换事件
          this.reverseGeocoder(qqmap, res)
        },
        fail: (res) => {
          // 调用失败则执行此回调函数
        },
        complete: (res) => {
          // 成功与否都将执行此回调函数
        }

      })
    },
    // 文字描述转换事件
    reverseGeocoder (mapObj, response) {
      var name = response.result.title
      // 调用reverseGeocoder由坐标到坐标所在位置的文字描述的转换，输入坐标返回地理位置信息和附近poi列表
      mapObj.reverseGeocoder({
        location: {
          latitude: response.result.location.lat,
          longitude: response.result.location.lng
        },
        success: (res) => {
          // 调用成功则执行此回调函数
          // 执行打开第三方地图查看事件
          this.openLocation(res, name)
        },
        fail: (res) => {
          // 调用失败则执行此回调函数
        },
        complete: (res) => {
          // 无论成功与否都会执行此回调函数
        }
      })
    },
    // 打开第三方地图查看事件
    openLocation (response, name) {
      // 通过拿到的response解构赋值给lat lng
      let {lat, lng} = response.result.location
      // 调用ui.openLocation方法打开第三方地图查看
      ui.openLocation({
        backgroundColor: 'rgb(51, 153, 255)',
        latitude: lat,
        longitude: lng,
        name: name,
        address: response.result.address,
        scale: 28
      })
    }

  }
}
