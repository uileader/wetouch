// trajectory.js
export default {
  data () {
    return {
      latitude: 39.855060,
      longitude: 116.368650,
      scale: 16,
      showLocation: true,
      mapCtx: null,
      moveBtnClick: true,
      back: false,
      polyline: [{
        points: [{
          latitude: 39.855745,
          longitude: 116.368432
        }, {
          latitude: 39.856264,
          longitude: 116.370331
        }, {
          latitude: 39.856462,
          longitude: 116.371404
        }, {
          latitude: 39.853212,
          longitude: 116.371388
        }],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }],
      markers: [{
        id: 0,
        latitude: 39.855745,
        longitude: 116.368432,
        iconPath: require('#/images/map/car.png'),
        width: 30,
        height: 30,
        rotate: 100,
        anchor: {
          x: 0.5,
          y: 0.5
        }

      }, {
        id: 1,
        latitude: 39.855745,
        longitude: 116.368432,
        iconPath: require('#/images/map/posi.png'),
        callout: {
          content: '路径A',
          color: '#000000',
          fontSize: 12,
          bgColor: '#ffffff',
          borderRadius: 11,
          display: 'BYCLICK',
          padding: 5
        },
        width: 30,
        height: 40
      }, {
        id: 2,
        latitude: 39.856264,
        longitude: 116.370331,
        iconPath: require('#/images/map/posi.png'),
        callout: {
          content: '路径B',
          color: '#000000',
          fontSize: 12,
          bgColor: '#ffffff',
          borderRadius: 11,
          display: 'BYCLICK',
          padding: 5
        },
        width: 30,
        height: 40
      }, {
        id: 3,
        latitude: 39.856462,
        longitude: 116.371404,
        iconPath: require('#/images/map/posi.png'),
        callout: {
          content: '路径C',
          color: '#000000',
          fontSize: 12,
          bgColor: '#ffffff',
          borderRadius: 11,
          display: 'BYCLICK',
          padding: 5
        },
        width: 30,
        height: 40
      }, {
        id: 4,
        latitude: 39.853212,
        longitude: 116.371388,
        iconPath: require('#/images/map/posi.png'),
        callout: {
          content: '路径D',
          color: '#000000',
          fontSize: 12,
          bgColor: '#ffffff',
          borderRadius: 11,
          display: 'BYCLICK',
          padding: 5
        },
        width: 30,
        height: 40
      }],
      controls: [{
        id: 2,
        iconPath: require('#/images/map/location.png'),
        clickable: true,
        position: {
          left: 15,
          top: 570,
          width: 64,
          height: 64
        }
      }],
      circles: [{
        latitude: 39.855060,
        longitude: 116.368650,
        color: '#0000FF33',
        fillColor: '#0000FF33',
        radius: 100,
        strokeWidth: 1

      }]
    }
  },
  created () {
    this.mapCtx = ui.createMapContext('map')
  },
  mounted () {
  },
  methods: {
    move () {
      if (!this.moveBtnClick) return
      this.moveBtnClick = false
      var mapCtx = ui.createMapContext('map')
      // 声明汽车运动轨迹

      var path = [{
        latitude: 39.855745,
        longitude: 116.368432
      }, {
        latitude: 39.856264,
        longitude: 116.370331
      }, {
        latitude: 39.856462,
        longitude: 116.371404
      }, {
        latitude: 39.853212,
        longitude: 116.371388
      }]
      if (this.$data.back) path.reverse()
      mapCtx.translateMarker({
        markerId: 0,
        destination: path[1],
        autoRotate: true,
        duration: 4000,
        animationEnd: () => {
          mapCtx.translateMarker({
            markerId: 0,
            destination: path[2],
            autoRotate: true,
            duration: 4000,
            animationEnd: () => {
              mapCtx.translateMarker({
                markerId: 0,
                destination: path[3],
                autoRotate: true,
                duration: 4000,
                animationEnd: () => {
                  this.$data.back = !this.$data.back
                  this.$data.moveBtnClick = true
                }
              })
            }
          })
        }
      })
    }

  }
}
