// savepictures.js
export default {
  data () {
    return {
      imageSrc: 'http://images.uileader.com/20170930/7fbde6a5-2e25-4f74-873d-a4b44fd82269.jpg'
    }
  },
  methods: {
    saveImg () {
      var self = this
      ui.downloadFile({
        url: self.imageSrc,
        success: function (res) {
          ui.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              ui.showToast({ title: '已保存到相册', icon: 'success' })
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
            title: '图片下载失败'
          })
        },
        complete: function () {

        }
      })
    }
  },
  mounted () {

  }

}
