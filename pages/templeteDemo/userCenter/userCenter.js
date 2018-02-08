// userCenter.js

export default {
  data () {
    return {
      isLogin: false,
      userName: '',
      currentNum: 0,
      portraitUrl: require('#/images/portrait_bg.png'),
      pageLoad: {// 进入页面通过缓存tokenId来判断是否是登录状态
        trigger: 'always',
        handle: () => {
          let userinfo = ui.getStorageSync('userinfo')
          if (userinfo !== null) {
            if (userinfo.tokenId === '') {
              this.isLogin = false
              this.portraitUrl = require('#/images/portrait_bg.png')
            } else {
              this.isLogin = true
              this.userName = userinfo.tel
              if (userinfo.head === null) {
                this.portraitUrl = require('#/images/portrait_bg.png')
              } else {
                this.portraitUrl = userinfo.head
              }
            }
          }
        }
      },
      pullDown: {
        distance: 100
      }
    }
  },
  methods: {
    loginPage () {
      import(`#/pages/dialogs/loginInterface.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          // 向loginInterface.ui传入数据
          data: {
            currentNum: this.currentNum
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.userinfo) {
              this.isLogin = data.userinfo.isLogin
              this.userName = data.userinfo.data.tel
              this.portraitUrl = data.userinfo.data.head
            } else {
              this.isLogin = false
            }
          }
        })
      })
    },
    login () {
      if (this.isLogin) {
        ui.navigateTo({
          url: '/pages/templeteDemo/userCenter/userInfo'
        })
      } else {
        this.loginPage()
      }
    },
    openMessage () {
      ui.navigateTo({
        url: '/pages/templeteDemo/userCenter/notice'
      })
    },
    // 设置
    setting () {
      if (this.isLogin) {
        ui.navigateTo({
          url: '/pages/templeteDemo/userCenter/setting'
        })
      } else {
        this.loginPage()
      }
    },
    // 添加地址
    address () {
      if (this.isLogin) {
        ui.navigateTo({
          url: '/pages/templeteDemo/userCenter/address'
        })
      } else {
        this.loginPage()
      }
    },
    // 收藏
    collect () {
      if (this.isLogin) {
        ui.navigateTo({
          url: '/pages/templeteDemo/userCenter/collect'
        })
      } else {
        this.loginPage()
      }
    },
    shoppingMall () {
      if (this.isLogin) {
        ui.openBrowser({
          url: 'http://www.uileader.com/price.html',
          backgroundColor: '#3399ff',
          color: '#ffffff'
        })
      } else {
        this.loginPage()
      }
    },
    // 客服
    Meiqia () {
      if (this.isLogin) {
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
      } else {
        this.loginPage()
      }
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {

  }
}
