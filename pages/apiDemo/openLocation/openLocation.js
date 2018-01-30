
export default {
  data () {
    return {
      longitude: 116.368650,
      latitude: 39.855030,
      name: '北京引领视觉科技有限公司',
      address: '北京市丰台区南三环西路16号3'
    }
  },
  methods: {
    openLocation: function () {
      ui.openLocation({
        longitude: this.longitude,
        latitude: this.latitude,
        name: this.name,
        address: this.address,
        backgroundColor: '#3699FD',
        success: function () {

        },
        fail: function (res) {
        }
      })
    }
  }
}
