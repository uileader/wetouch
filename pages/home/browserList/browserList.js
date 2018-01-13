// dataList.js
let browserManager
let touchuiBridge
export default {
  data () {
    return {
      link: '/pages/apiDemo/browserUrl/browserUrl',
      url: 'http://www.uileader.com/bridgeDemo/index.html',
      url2: 'http://www.uileader.com/bridgeDemo/index2.html',
      collect_press: require('#/images/browser/topbar_white_collect_press.png'),
      collect: require('#/images/browser/topbar_white_collect.png'),
      share: require('#/images/browser/topbar_white_share.png'),
      isCollect: false
    }
  },
  methods: {
    openUrl () {
      var that = this
      browserManager = ui.openBrowser({
        url: this.url,
        backgroundColor: '#3399ff',
        color: '#ffffff',
        success: function () {
          // 监听页面加载完毕事件
          // browserManager.onLoad(function() {
          // })

          that.setBtns(that.collect, that.share)
          browserManager.onBtnClick(function (id) {
            if (id === 'share') {
              browserManager.sentMessage({name: 'share', value: 'http://www.uileader.com'})
            } else if (id === 'collect') {
              if (that.isCollect) {
                that.setBtns(that.collect, that.share)
                that.isCollect = false
              } else {
                that.setBtns(that.collect_press, that.share)
                that.isCollect = true
              }
            }
          })

          browserManager.onMessage(function (message) {
            if (message.name === 'share') {
              var val = message.value
              ui.share({
                  target: val.target,
                  type: val.type,
                  icon: val.icon,
                  title: val.title,
                  content: val.content,
                  href: val.href
                })
            }
          })
        }
      })
    },
    setBtns (collect, share) {
      browserManager.setBtns([
        {
          id: 'share',
          icon: share
        },
        {
          id: 'collect',
          icon: collect
        }
      ])
    },
    switchPage () {
      touchuiBridge = ui.openBrowser({
        url: this.url2,
        backgroundColor: '#3399ff',
        color: '#ffffff',
        success: function () {
          touchuiBridge.onMessage(function (message) {
            if (message.name === 'link') {
              var url = message.value
              ui.navigateTo({
                  url: url
                })
            }
          })
        }
      })
    }
  },
  mounted () {

  }
}