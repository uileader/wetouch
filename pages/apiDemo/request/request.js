// request.js
const requestUrl = '/touchui-backstage/testRequest.do'
export default {
  data () {
    return {
      loading: false,
      res: ''
    }
  },
  methods: {
    makeRequest () {
      var self = this
      self.loading = true
      ui.request({
        url: requestUrl,
        data: {
          // noncestr: Date.now()
          x: '',
          y: ''
        },
        success: function (result) {
          self.loading = false
          self.res = JSON.stringify(result, null, 4)
        },
        fail: function ({ errMsg }) {
          self.loading = false
        }
      })
    }
  }
}
