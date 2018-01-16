// uploadDownload.js
const uploadFileUrl = '图片上传地址'
var uploadTask
export default {
  data () {
    return {
      loading: false,
      loading2: false,
      msg: '',
      imageSrc: '',
      downurl: '',
      progress: 0
    }
  },
  methods: {
    chooseImage () {
      var self = this
      ui.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album'],
        success: function (res) {
          var imageSrc = res.tempFilePaths[0]
          uploadTask = ui.uploadFile({
            url: uploadFileUrl,
            filePath: imageSrc,
            name: 'file',
            success: function (res) {
              self.downurl = res.data.toString()
              if (self.downurl === '10000') {
                self.msg = '上传文件不能超过200k'
              } else if (self.downurl === '40000') {
                self.msg = '请添加上传文件'
              } else if (self.downurl === '50000') {
                self.msg = '上传图片失败'
              } else {
                self.msg = '上传成功。' + self.downurl
              }
            },
            fail: function ({ errMsg }) {
              ui.showAlert({
                title: errMsg
              })
              self.msg = '上传失败。' + errMsg
            },
            complete: function () {}
          })
          uploadTask.onProgressUpdate((res) => {
            self.progress = res.progress
          })
        },
        fail: function ({ errMsg }) {
        }
      })
    },
    downloadImage () {
      var self = this
      ui.downloadFile({
        url: self.downurl,
        success: function (res) {
          self.imageSrc = self.downurl
        },
        fail: function ({ errMsg }) {
        },
        complete: function () {
          self.loading2 = false
        }
      })
    }
  }
}
