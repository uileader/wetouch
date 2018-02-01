// loginInterface.js
const loginUrl = '/zf_crm/interface/loginAction.do'
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
    formSubmit (e) {
    },
    hideWindow (e) {
      ui.hideDialog()
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
            userName: this.loginTel,
            pwd: encryptRSA(this.loginPassword)
          },
          success: function (result) {
            console.log(result)
            if (result.data.error_code === -1) {
              ui.showToast({ title: '接口失败' })
            } else if (result.data.error_code === 2001) {
              ui.showToast({ title: '密码错误' })
            } else if (result.data.error_code === 2002) {
              ui.showToast({ title: '手机号未注册' })
            } else {
              // ui.showToast({ title: '登录成功', icon: 'success' })

              let zfUserInfo = {
                isLogin: true,
                data: result.data.result
              }
              ui.showToast({ title: '登录成功', icon: 'success' })

              ui.hideDialog({ zfUserInfo: zfUserInfo })
              ui.setStorageSync('zfUserInfo', result.data.result)
            }
          },
          fail: function ({ errMsg }) {
            console.log(errMsg)
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
