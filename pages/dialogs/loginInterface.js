// loginInterface.js
const registerUrl = '/touchui-backstage/register.do'
const loginUrl = '/touchui-backstage/login.do'
import encryptRSA from '#/static/utils/security'
export default {
  data () {
    return {
      barHeight: ui.STATUS_BAR_HEIGHT,
      swiperHeight: ui.DEFAULT_CONTENT_HEIGHT,
      currentNum: 0,
      registerTel: '',
      registerPassword: '',
      loginTel: '',
      loginPassword: '',
      code: '',
      flag: false
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    formSubmit (e) {
    },
    hideWindow (e) {
      ui.hideDialog()
    },
    loginPage1 () {
      // ui.navigateTo({
      //   url: 'pages/templeteDemo/register/register'
      // })
      this.currentNum = 1
    },
    loginPage2 () {
      this.currentNum = 0
    },
    smsCode () {
      ui.showToast({ title: '没有真正发送，随便输什么都行～' })
    },
    login () {
      let pwd = this.loginPassword.toString().length
      if (this.loginTel === '') {
        ui.showToast({ title: '请输入手机号' })
      } else if (pwd < 6) {
        ui.showToast({ title: '请输入6位以上密码' })
      } else {
        ui.request({
          url: loginUrl,
          data: {
            tel: this.loginTel,
            pwd: encryptRSA(this.loginPassword)
          },
          success: function (result) {
            if (result.data.error_code === -1) {
              ui.showToast({ title: '接口失败' })
            } else if (result.data.error_code === 2001) {
              ui.showToast({ title: '密码错误' })
            } else if (result.data.error_code === 2002) {
              ui.showToast({ title: '手机号未注册' })
            } else {
              let userinfo = {
                isLogin: true,
                data: result.data.result
              }
              ui.showToast({ title: '登录成功', icon: 'success' })

              ui.hideDialog({ userinfo: userinfo })
              // ui.hideDialog()
              ui.setStorageSync('userinfo', result.data.result)
            }
          },
          fail: function ({ errMsg }) {
          }
        })
      }
    },
    register () {
      let that = this
      let pwd = this.registerPassword.toString().length
      if (this.registerTel === '') {
        ui.showToast({ title: '请输入手机号' })
      } else if (pwd < 6) {
        ui.showToast({ title: '请输入6位以上密码' })
      } else if (this.code === '') {
        ui.showToast({ title: '请输入验证码' })
      } else {
        // this.flag = true

        ui.request({
          url: registerUrl,
          data: {
            tel: this.registerTel,
            pwd: encryptRSA(this.registerPassword)
          },
          success: function (result) {
            if (result.data.error_code === -1) {
              ui.showToast({ title: '接口失败' })
            } else if (result.data.error_code === 1001) {
              ui.showToast({ title: '注册失败' })
            } else if (result.data.error_code === 1002) {
              ui.showToast({ title: '手机号已被注册' })
            } else {
              ui.showToast({ title: '注册成功', icon: 'success' })
              that.currentNum = 0
            }
          },
          fail: function ({ errMsg }) {
            ui.showToast({ title: '请求失败' })
          }
        })
      }
    }
  },
  mounted () {
    this.$DialogOpen((data) => {

    })
    this.$DialogClose((data) => {
      this.currentNum = 0
    })
  }
}
