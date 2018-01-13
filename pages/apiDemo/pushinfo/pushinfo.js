// pushinfo.js
const requestUrl = 'http://www.uileader.com/touchui-backstage/push.do'

export default {
  data () {
    return {
      url: 'http://uileader.com',
      loading: false,
      clientid: '',
      title: 'TOUCH UI',
      content: 'TOUCH UI框架',
      payload: 'TOUCH UI是非常好的一套框架',
      message: '',
      monitor: ''
    }
  },
  methods: {
    open () {
      ui.openBrowser({
        url: this.url,
        backgroundColor: '#3399ff',
        color: '#ffffff'
      })
    },
    pushMessage () {
      var that = this
      that.loading = true

      ui.request({
        url: requestUrl,
        data: {
          clientId: that.clientid,
          title: that.title,
          content: that.content,
          payload: that.payload
        },
        success: function (result) {
          that.loading = false
          that.message = result.data
        },
        fail: function ({ errMsg }) {
          that.loading = false
        }
      })
    },
    clearPushMessage () {
      ui.clearPushMessage()
    }
  },
  mounted () {
    var that = this
    ui.getPushInfo({
      success: function (res) {
        that.clientid = res.clientid
      },
      fail: function (res) {
      }
    })

    ui.onPushClick(function (res) {
      that.monitor = res
    })
  }
}
