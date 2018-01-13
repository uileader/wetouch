export default {
  data () {
    return {

    }
  },
  methods: {
    // meiQia1 () {
    //   var metadata = {}
    //   metadata = {
    //     'name': '未登录用户',
    //     '来源': '联系我们页面',
    //     '邀请码': '无',
    //     'tel': '无',
    //     '机型': '',
    //     '客户端版本': ''
    //   }
    //   let url = 'https://static.meiqia.com/dist/standalone.html?eid=87603&metadata=' + encodeURIComponent(JSON.stringify(metadata))
    //   if (ui.IS_APP) {
    //     var browserManager = ui.openBrowser({
    //       url: url
    //     })
    //   } else {
    //     window.location.href = url
    //   }
    // },
    meiQia2 () {
      ui.startMeiqia({
        info: {
          name: '张三',
          tel: '123456',
          weixin: '5201314',
          '爱好': '吃苹果'
        },
        message: '你好',
        success: function (data) {
        },
        fail: function (data) {
        }
      })
    }
  },
  mounted () {
  }
}