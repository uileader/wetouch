// interestPointAroud.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
var markersData = []
export default {
  data () {
    return {
      markers: [],
      latitude: '',
      longitude: '',
      textData: {},
      city: '',
      mapHeight: ui.DEFAULT_CONTENT_HEIGHT - 35 + 'px'
    }
  },
  methods: {
    makertap: function (e) {
      var id = e.markerId
      var that = this
      that.showMarkerInfo(markersData, id)
      that.changeMarkerColor(markersData, id)
    },
    onLoad: function (e) {
      var that = this
      var myAmapFun = new amapFile.AMapWX({ key: key })
      var params = {
        iconPathSelected: require('#/images/map/posi.png'),
        iconPath: require('#/images/map/marker.png'),
        success: function (data) {
          markersData = data.markers
          var poisData = data.poisData
          var markersNew = []
          markersData.forEach(function (item, index) {
            markersNew.push({
              id: item.id,
              latitude: item.latitude,
              longitude: item.longitude,
              iconPath: item.iconPath,
              width: item.width,
              height: item.height
            })
          })
          if (markersData.length > 0) {
            that.setData({
              markers: markersNew
            })
            that.setData({
              city: poisData[0].cityname || ''
            })
            that.setData({
              latitude: markersData[0].latitude
            })
            that.setData({
              longitude: markersData[0].longitude
            })
            that.showMarkerInfo(markersData, 0)
          }
        },
        fail: function (info) {
        }
      }

      myAmapFun.getPoiAround(params)
    },
    showMarkerInfo: function (data, i) {
      var that = this
      that.setData({
        textData: {
          name: data[i].name,
          desc: data[i].address
        }
      })
    },
    changeMarkerColor: function (data, i) {
      var that = this
      var markers = []

      for (var j = 0; j < data.length; j++) {
        if (j === i) {
          data[j].iconPath = require('#/images/map/posi.png')
        } else {
          data[j].iconPath = require('#/images/map/marker.png')
        }
        markers.push({
          id: data[j].id,
          latitude: data[j].latitude,
          longitude: data[j].longitude,
          iconPath: data[j].iconPath,
          width: data[j].width,
          height: data[j].height
        })
      }
      that.setData({
        markers: markers
      })
    }
  },
  mounted () {
    this.onLoad()
  }
}
