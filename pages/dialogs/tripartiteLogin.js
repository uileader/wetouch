// loginInterface.js
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
      tel: '',
      pwd: '',
      code: '',
      flag: false,
      openid:'',
      unionid:'',
      type:''
    }
  },
  methods: {
    hideWindow (e) {
      ui.hideDialog()
    },
    login(){
      if(this.type === 'wx'){
        console.log('微信登陆')
        ui.request({
          url: '/touchui-backstage/wxLogin.do',
          data: {
            unionid: this.unionid,
            tel:this.tel,
            pwd:encryptRSA(this.pwd)
          },
          success: function (data) {
            console.log(data.data.error_code,'success')
            if(data.data.error_code === 0){
              ui.showToast({ title: '登录成功', icon: 'success' })
              ui.hideDialog()
              ui.setStorageSync('userinfo', data.data.result)
            }
          },
          fail: function (data) {
            console.log(data,'fail')
          }
        })
      }else if(this.type === 'qq'){
        console.log('qq登陆')
        ui.request({
          url: '/touchui-backstage/qqLogin.do',
          data: {
            openid: this.openid,
            tel:this.tel,
            pwd:encryptRSA(this.pwd)
          },
          success: function (data) {
            console.log(data,'success111')
            if(data.data.error_code === 0){
              ui.showToast({ title: '登录成功', icon: 'success' })
              ui.hideDialog()
              ui.setStorageSync('userinfo', data.data.result)
            }
          },
          fail: function (data) {
            console.log(data,'fail')
          }
        })
      }
      
    }
  },
  mounted () {
    this.$DialogOpen((data) => {
      if(data.type === 'wx'){
        this.unionid = data.unionid
        this.type='wx'
      }else if(data.type === 'qq'){
        this.openid = data.openid
        this.type='qq'
      }
    })
    this.$DialogClose((data) => {
      this.currentNum = 0
    })
  }
}
