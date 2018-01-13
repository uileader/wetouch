export default {
  data () {
    return {}
  },
  methods: {
    navigateurl (staterefer) {
      let state
      switch (staterefer) {
        // 正常请求
        case 'normal':
          state = '1'
          break
        // 返回结果为空
        case 'backnull':
          state = '3'
          break
        // 网络超时
        case 'overtime':
          state = '4'
          break
        // 请求失败
        case 'failed':
          state = '5'
          break
        // 已知结果为空，不发请求
        case 'isnull':
          state = '7'
          break
        // 需要登录，不发请求
        case 'login':
          state = '6'
          break
      }
      ui.navigateTo({
        url: 'requestApi4?state=' + state
      })
    }
  }
}
