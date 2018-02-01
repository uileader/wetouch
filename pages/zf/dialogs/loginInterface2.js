// loginInterface.js
const loginUrl = '/zf_crm/interface/loginAction.do'
import encryptRSA from '#/static/utils/security'
export default {
  data () {
    return {
      //登录页面等变量
      winHeight: ui.WIN_HEIGHT,
      active1: '',
      active2: '',
      active3: '',
      telValue: '',
      pwdValue: '',
      effect: false
    }
  },
  methods: {
    // 登录页面的js

    handleFocus1() {
      this.active1 = 'active'
      this.active2 = ''
    },
    handleBlur1() {
      this.active1 = ''
    },
    handleFocus2() {
      this.active1 = ''
      this.active2 = 'active'
    },
    handleBlur2() {
      this.active2 = ''
    },
    handleInput(e) {
      if (e.length > 0) {
        this.active3 = 'active'
        this.effect = true
      } else {
        this.active3 = ''
        this.effect = false
      }
    },
    submit() {
      let pwd = this.pwdValue.toString().length
      if (this.telValue === '') {
        ui.showToast({ title: '请输入手机号' })
      } else if (pwd < 6) {
        ui.showToast({ title: '请输入6位以上密码' })
      } else {
        ui.showLoading({
          text: '登录中...',
          maskStyle: {
            'background-color': 'rgba(0,0,0,0)'
          }
        })
        ui.request({
          url: loginUrl,
          data: {
            userName: this.telValue,
            pwd: encryptRSA(this.pwdValue)
          },
          success: (result) => {
            console.log(result)
            if (result.data.error_code === -1) {
              ui.showToast({ title: '接口失败' })
            } else if (result.data.error_code === 2001) {
              ui.showToast({ title: '密码错误' })
            } else if (result.data.error_code === 2002) {
              ui.showToast({ title: '手机号未注册' })
            } else {
              ui.hideLoading()
              ui.showToast({ title: '登录成功', icon: 'success' })
              ui.setStorageSync('zfUserInfo', result.data.result)
              ui.hideDialog()
            }
          },
          fail: function ({ errMsg }) {
            console.log(errMsg)
            ui.hideLoading()
            if (errMsg === 'timeout') {
              ui.showToast({ title: '提交超时' })
            } else {
              ui.showToast({ title: '报错啦～' })
            }
          }
        })
      }
    }

  },
  mounted () {
    this.$DialogOpen((data) => {

    })
    this.$DialogClose((data) => {
      // this.currentNum = 0
    })
  }
}
