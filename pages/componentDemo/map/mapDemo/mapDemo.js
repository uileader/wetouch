// mapDemo.js
// mapDemo02.js
var pathIcon = require('#/images/map/path.png')
export default {
  data () {
    return {
      latitude: 39.855060,
      longitude: 116.368650,
      scale: 16,
      showLocation: true,
      mapCtx: null,
      markers: [{
        id: 1,
        latitude: 39.855060,
        longitude: 116.368650,
        iconPath: require('#/images/map/posi.png'),
        label: {
          fontSize: 12,
          color: '#FF0000',
          content: '',
          x: 0.5,
          y: 0.5
        },
        callout: {
          content: `<div class="c-wrap">
                    <div class="info">
                      <p class="a-name">北京引领视觉科技有限公司</p>
                      <p class="a-info">丰台区南三环搜宝商务中心3号楼1205</p>
                    </div>
                    <div class="click">导航</div>
                   </div>
                  `,
          color: '#000000',
          fontSize: 16,
          bgColor: '#ffffff',
          borderRadius: 10,
          display: 'ALWAYS',
          padding: 6
          // boxShadow: '0 0 1px 1px rgba(0,0,0,.2)'
        },
        width: 30,
        height: 40
      }, {
        id: 2,
        latitude: 39.851297,
        longitude: 116.368175,
        iconPath: require('#/images/map/qcsc_ic_location_pin.png'),
        label: {
          fontSize: 12,
          color: '#FF0000',
          content: '',
          x: 0.5,
          y: 0.5
        },
        callout: {
          content: `在这里上车`,
          color: '#000000',
          fontSize: 16,
          bgColor: '#ffffff',
          borderRadius: 14,
          display: 'ALWAYS',
          padding: 8,
          boxShadow: '0 0 4px 1px rgba(0,0,0,.1)'
        },
        width: 22,
        height: 54
      }, {
        id: 3,
        latitude: 39.858620,
        longitude: 116.369580,
        iconPath: require('#/images/map/trip_hotelreuse_map_poi_around_info_stations_selected.png'),
        label: {
          fontSize: 12,
          color: '#FF0000',
          content: '',
          x: 0.5,
          y: 0.5
        },
        callout: {
          content: `<div class="s-map">
                      <p class="s-name clearfix">右安门翠林小区二里</p>
                      <div class="btn">
                        <img src="${pathIcon}"/>
                        <span>导航</span>
                      </div>
                    </div>`,
          color: '#000000',
          fontSize: 16,
          bgColor: '#ffffff',
          borderRadius: 5,
          display: 'ALWAYS',
          padding: 8,
          boxShadow: '0 0 4px 1px rgba(0,0,0,.1)'
        },
        width: 32,
        height: 45
      }],
      controls: [{
        id: 1,
        iconPath: require('#/images/map/location.png'),
        clickable: true,
        position: {
          left: 15,
          top: 570,
          width: 64,
          height: 64
        }
      }],
      controls: [{
        id: 1,
        iconPath: require('#/images/map/location.png'),
        clickable: true,
        position: {
          left: 15,
          top: ui.DEFAULT_CONTENT_HEIGHT - 100,
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
    // this.setData({
    //   mapCtx: ui.createMapContext('map')

    // })
  },
  mounted () {
    this.mapCtx = ui.createMapContext('map')
  },
  methods: {
    controltap (e) {
      if (e.controlId === 1) {
        this.mapCtx.moveToLocation()
      }
    },
    regionchange () {

    },
    callouttap (e) {
      if (e.markerId === 2) return
      if (e.markerId === 1) {
        this.toSysMap(39.855060, 116.368650, '北京引领视觉科技有限公司')
      }
      if (e.markerId === 3) {
        this.toSysMap(39.858620, 116.369580, '右安门翠林小区二里')
      }
    },
    toSysMap (lat, lng, names) {
      ui.openSysMap({
        latitude: lat,
        longitude: lng,
        name: names,
        success: function (res) {
        },
        fail: function (res) {
        },
        complete: function (res) {
        }
      })
    },
    go () {
    }
  }
}
