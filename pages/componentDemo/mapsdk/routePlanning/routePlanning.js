// routePlanning.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
export default {
  data () {
    return {
      mapHeight: ui.DEFAULT_CONTENT_HEIGHT - 35 + 'px',
      latitude: 39.973700,
      longitude: 116.470528,
      // scale: 16,
      showLocation: true,
      mapCtx: null,
      myAmapFun: null,
      polyline: [],
      markers: [{
        id: 0,
        latitude: 39.989643,
        longitude: 116.481028,
        iconPath: require('#/images/map/mapicon_navi_s.png'),
        width: 24,
        height: 34
      }, {
        id: 1,
        latitude: 39.90816,
        longitude: 116.434446,
        iconPath: require('#/images/map/mapicon_navi_e.png'),
        width: 24,
        height: 34
      }],
      includePoints: [],
      polyline: [],
      distance: 0,
      cost: 0.00
    }
  },
  created () {
    this.initView()
  },
  mounted () {
    this.mapCtx = ui.createMapContext('map')
    this.myAmapFun = new amapFile.AMapWX({key: key})
    this.initView()
  },
  methods: {
    walkNav () {
      this.initView()
      this.myAmapFun.getWalkingRoute({
        origin: '116.481028,39.989643',
        destination: '116.434446,39.90816',
        success: (data) => {
          this.drawLine(data, 'steps')
        },
        fail: (info) => {
        }
      })
    },
    driveNav () {
      this.initView()
      this.myAmapFun.getDrivingRoute({
        origin: '116.481028,39.989643',
        destination: '116.434446,39.90816',
        success: (data) => {
          this.drawLine(data, 'steps')
        },
        fail: (info) => {
        }
      })
    },
    ridingNav () {
      this.initView()
      this.myAmapFun.getRidingRoute({
        origin: '116.481028,39.989643',
        destination: '116.434446,39.90816',
        success: (data) => {
          this.drawLine(data, 'rides')
        },
        fail: (info) => {
        }
      })
    },
    transitNav () {
      this.initView()
      this.myAmapFun.getTransitRoute({
        origin: '116.481028,39.989643',
        destination: '116.434446,39.90816',
        city: '北京',
        success: (data) => {
          this.setData({
            distance: data.distance,
            cost: parseFloat(data.taxi_cost).toFixed(2)
          })
        },
        fail: (info) => {
        }
      })
    },
    drawLine (data, styles) {
      var points = []
      if (data.paths && data.paths[0] && data.paths[0][styles]) {
        this.setData({
          distance: data.paths[0].distance,
          cost: 0.00
        })
        var steps = data.paths[0][styles]
        steps.forEach((item, index) => {
          var polen = item.polyline.split(';')

          polen.forEach((item_, index_) => {
            points.push({
              longitude: parseFloat(item_.split(',')[0]),
              latitude: parseFloat(item_.split(',')[1])
            })
          })
        })
      }
      this.setData({
        polyline: [{
          points: points,
          color: '#0091ff',
          width: 5
        }]
      })
    },
    initView () {
      this.setData({
        includePoints: [{
          latitude: 39.989643,
          longitude: 116.481028
        }, {
          latitude: 39.90816,
          longitude: 116.434446
        }]
      })
    }

  }
}
