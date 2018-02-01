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
    },

    login_qq(){
      console.log('调用qq接口')
      ui.login({
        target: 'qq',
        success: data => {
          console.log('success', data.errMsg)
          if(data.errMsg === "ok"){
            this.checkOpenid(data.openid)
          }else{
            console.log('失败s')
          }
              
        },
        fail:data=>{
          console.log('fail', data)
        }
      })
    },
    //验证openid是否绑定
    checkOpenid(openid){
      ui.request({
        url: '/touchui-backstage/checkOpenid.do',
        data: {
          openid: openid,
        },
        success: function (data) {
          console.log(data)
          console.log(data.data.error_code,'checkOpenid,success')
          //没有绑定
          if(data.data.error_code === 0){
            ui.hideDialog()
            import(`#/pages/dialogs/tripartiteLogin.ui`).then((content) => {
              ui.showDialog({
                content: content,
                statusBarColor: 'black',
                // 向loginInterface.ui传入数据
                data: {
                  openid: openid,
                  type:'qq'
                },
                // 接收ui.hideDialog回传的数据
                onHide: (data) => {
                }
              })
            })
          }else if(data.data.error_code === 1){
            ui.showToast({ title: '登录成功', icon: 'success' })
            ui.hideDialog()
            console.log(data.data.result)
            ui.setStorageSync('userinfo', data.data.result)
          }
        },
        fail: function (data) {
          console.log(data,'checkOpenid,fail')
        }
      })
    },
    login_weixin(){
      ui.login({
        target: 'weixin',
        success: data => {
          console.log('success', data)
          this.checkUnionid(data.unionid)
          
        },
        fail:data=>{
          console.log('fail', data)
        }
      })
      
    },
    //验证微信Unionid
    checkUnionid(unionid){
      ui.request({
        url: '/touchui-backstage/checkUnionid.do',
        data: {
          unionid: unionid,
        },
        success: function (data) {
          console.log(data)
          console.log(data.data.error_code,'checkUnionid,success')
          //没有绑定
          if(data.data.error_code === 0){
            console.log('没有绑定')
            ui.hideDialog()
            import(`#/pages/dialogs/tripartiteLogin.ui`).then((content) => {
              ui.showDialog({
                content: content,
                statusBarColor: 'black',
                // 向loginInterface.ui传入数据
                data: {
                  unionid: unionid,
                  type:'wx'
                },
                // 接收ui.hideDialog回传的数据
                onHide: (data) => {
                }
              })
            })
          }else if(data.data.error_code === 1){
            ui.showToast({ title: '登录成功', icon: 'success' })
            ui.hideDialog()
            console.log(data.data.result)
            ui.setStorageSync('userinfo', data.data.result)
          }
        },
        fail: function (data) {
          console.log(data,'checkOpenid,fail')
        }
      })
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
