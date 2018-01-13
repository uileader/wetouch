// homeTemplete.js
export default {
  data () {
    return {
      groups: [
        {
          title: '模板',
          items: [
            { title: '音乐播放器', link: '/pages/templeteDemo/musicPlayer/musicPlayer' },
            { title: '朋友圈', link: '/pages/templeteDemo/friendCircle/friendCircle' }
          ]
        }
      ],
      currentNum: 0
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
          }
        })
      })
    },
    loginInterface () {
      let userinfo = ui.getStorageSync('userinfo')
      if (userinfo === null) {
        this.loginPage()
      } else {
        if (userinfo.tokenId !== '') {
          ui.navigateTo({
            url: '/pages/templeteDemo/userCenter/setting'
          })
        } else {
          this.loginPage()
        }
      }
    }
  },
  mounted () {

  }
}
