// setting.js
const logoutUrl = '/touchui-backstage/logout.do'
export default {
  data () {
    return {}
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    loginPage () {
      import(`#/pages/dialogs/loginInterface.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          // 向dialog2.ui传入数据
          data: {

          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.userinfo) {
              this.isLogin = true
              this.userName = data.userinfo.tel
            }
            if (data && data.isLogin) {
              this.isLogin = data.isLogin
            }
          }
        })
      })
    },
    logOut () {
      let userinfo = ui.getStorageSync('userinfo')
      console.log(userinfo)
      ui.request({
        url: logoutUrl,
        data: {
          userId: userinfo.userId,
          tokenId: userinfo.tokenId
        },
        success: function (result) {
          console.log(result)
          if (result.data.error_code === 0) {
            console.log('0')
            ui.showToast({ title: '退出成功', icon: 'success' })
            ui.navigateBack()
            ui.clearStorage('userinfo')
          } else if(result.data.error_code === 3002) {
            console.log('3003')
            ui.clearStorage('userinfo')
          }else{
            console.log('失败')
            ui.showToast({ title: '退出失败' })
          }
        },
        fail: function ({ errMsg }) {
          console.log(errMsg)
        }
      })
    },
    accountSecurity () {
      let userinfo = ui.getStorageSync('userinfo')
      if (userinfo.tokenId === '') {
        this.loginPage()
      } else {
        ui.navigateTo({
          url: '/pages/templeteDemo/userCenter/userInfo'
        })
      }
    }
  }
}
