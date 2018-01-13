// savepictures.js
var videoContext
function getRandomColor () {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
export default {
  data () {
    return {
      videoSrc: 'http://images.uileader.com/20171024/392f790e-4c5b-4909-83dd-d13e94bcd64f.mp4',
      danmuList: [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
    }
  },
  methods: {
    saveVideo () {
      var self = this
      ui.downloadFile({
        url: self.videoSrc,
        success: function (res) {
          ui.showToast({
            title: '视频下载成功'
          })
          ui.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              ui.showToast({
                title: '已保存到相册'
              })
            },
            fail () {
              ui.showToast({
                title: '保存失败'
              })
            },
            complete () {

            }
          })
        },
        fail: function ({ errMsg }) {
          ui.showToast({
            title: '视频下载失败'
          })
        },
        complete: function () {

        }
      })
    },
    onReady: function (res) {
      videoContext = ui.createVideoContext('myVideo')
    },
    bindSendDanmu () {
      videoContext.sendDanmu({
        text: '测试弹幕',
        color: getRandomColor()
      })
    }
  },
  mounted () {
    this.onReady()
  }

}
