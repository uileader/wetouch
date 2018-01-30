// userinfo.js
const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]
const uploadFileUrl = 'http://www.uileader.com/touchui-backstage/uploadImgSubmit.do'
const updataHeadUrl = 'http://www.uileader.com/touchui-backstage/updateHead.do'
export default {
  data () {
    return {
      portraitUrl: require('#/images/portrait_bg.png'),
      tokenId: ''
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    uploadPhoto () {
      // ui.showActionSheet({
      //   itemList: [
      //     '拍摄',
      //     '从手机相册选择'
      //   ],
      //   success: (index) => {
      //     if (index > -1) {
      //       this.chooseImage(index)
      //     }
      //   }
      // })
      this.chooseImage(2)
    },
    chooseImage (index) {
      let that = this
      ui.chooseImage({
        clip: true,
        sourceType: sourceType[index],
        sizeType: sizeType[1],
        success: function (res) {
          let imageSrc = res.tempFilePaths[0]
          ui.uploadFile({
            url: uploadFileUrl,
            filePath: imageSrc,
            name: 'file',
            success: function (res) {
              let data = res.data.toString()
              if (data === '10000') {
                ui.showToast({ title: '上传文件不能超过200k' })
              } else if (data === '40000') {
                ui.showToast({ title: '请添加上传文件' })
              } else if (data === '50000') {
                ui.showToast({ title: '上传图片失败' })
              } else {
                ui.request({
                  url: updataHeadUrl,
                  data: {
                    tokenId: that.tokenId,
                    head: res.data
                  },
                  success: function (result) {
                    if (result.data.error_code === -1) {
                      ui.showToast({ title: '接口失败' })
                    } else if (result.data.error_code === 3002) {
                      ui.showToast({ title: 'tokenId失败' })
                    } else {
                      ui.showToast({ title: '上传成功。', icon: 'success' })
                      that.portraitUrl = res.data
                      let userinfo = ui.getStorageSync('userinfo')
                      userinfo.head = res.data
                      ui.setStorageSync('userinfo', userinfo)
                    }
                  },
                  fail: function ({ errMsg }) {
                  }
                })
              }
            },
            fail: function ({ errMsg }) {
              ui.showAlert({
                title: '上传失败' + errMsg
              })
              // self.msg = '上传失败。' + errMsg
            },
            complete: function () { }
          })
        },
        fail: function (res) {
        }
      })
    }
  },
  mounted () {
    let userinfo = ui.getStorageSync('userinfo')
    this.tokenId = userinfo.tokenId
    if (userinfo.head === null) {
      this.portraitUrl = require('#/images/portrait_bg.png')
    } else {
      this.portraitUrl = userinfo.head
    }
  }
}
