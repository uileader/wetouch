const textUrl = '/touchui-backstage/insertCircle.do'
const imageUrl = 'http://www.uileader.com/touchui-backstage/uploadThumbnail.do'
// const textUrl = 'http://192.168.1.109:8080/touchui-backstage/insertCircle.do'
// const imageUrl = 'http://192.168.1.109:8080/touchui-backstage/uploadThumbnail.do'
const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]
export default {
  data () {
    return {
      className: '',
      rotate: 0,
      imgWidth: '85',
      imgHeight: '85',
      imgWidth2: '45%',
      popupNav: ui.DEFAULT_HEADER_HEIGHT,
      popupBar: ui.STATUS_BAR_HEIGHT,

      imageSrc: [],
      popupShow: false,
      compileImg: [],
      value: '',
      qzoneColor: '#D1D1D1',
      colorActive: false,
      lookText: '公开',
      remindText: '',
      popover: [],
      popoverText: [],
      support: [],
      comment: [],
      maskStyle: { backgroundColor: 'transparent' },
      supportText: '赞',
      previewerShow: false,
      previewerIndex: 0,
      paginationFraction: {
        type: 'fraction'
      },
      previewerImages: [],
      config: {
        url: '/touchui-backstage/listCircle.do',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 15
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        param: {
          sort: 'createTime',
          direction: 'desc'
        },
        dataKey: 'data.listCircle',
        reload: false,
        refresh: false
      },
      pullDown: {
        distance: 60,
        onBegin: this.handleBegin,
        onActive: this.handleActive,
        onAfter: this.handleAfter,
        disableContentMove: ['android', 'ios', 'web']
      },
      picNumber: 0

    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    handleNavRight () {
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
    // 调取系统相册或者摄像头
    chooseImage (index) {
      var that = this
      ui.chooseImage({
        sourceType: sourceType[index],
        sizeType: sizeType[1],
        success: function (res) {
          // 为解决选择图片后出现白屏，使用定时器控制
          setTimeout(() => {
            that.imageSrc = []
            setTimeout(() => {
              that.imageSrc = res.tempFilePaths
            }, 500)
          }, 500)
        },
        fail: function (res) {
        }
      })
    },
    imageLoad () {
      // ui.showToast({ title: 'pic' })
      this.picNumber++
      if (this.picNumber === this.imageSrc.length) {
        this.popupShow = true
        this.picNumber = 0
      }
    },
    addPhoto () {
      this.chooseImage(1)
    },

    // 解析后台返回的时间格式
    getLocalTime (tm) {
      var tt = new Date(tm).toLocaleString().replace(/\//g, '-')
      return tt
    },
    leftNav () {
      this.popupShow = false
    },
    // 发表内容
    publish () {
      this.popupShow = false
      let that = this
      let newContent = {
        id: ''
      }
      // 发表时分为两步，先传文字内容后返回id，再根据id往后台传入选择的照片
      ui.request({
        url: textUrl,
        data: {
          head: 'http://images.uileader.com/20171128/ae067cb2-b336-4d5c-b845-b93c1901600e.png',
          name: 'TOUCH UI',
          content: this.value
        },
        success: function (content) {
          that.value = ''
          if (content.data.error_code === 0) {
            // 存入返回的id
            newContent.id = content.data.result
            let progress = 0
            ui.showLoading({
              text: '发表中...',
              maskStyle: {
                'background-color': 'rgba(231,231,231,0)'
              }
            })
            // 循环上传选择的照片
            for (var i = 0; i < that.imageSrc.length; i++) {
              ui.uploadFile({
                url: imageUrl,
                filePath: that.imageSrc[i],
                name: 'file',
                formData: {
                  'circleId': newContent.id
                },
                success: function (res) {
                  let state = JSON.parse(res.data)
                  // 上传成功
                  if (state.error_code === 0) {
                    progress++
                    // 判断最后一张上传成功后发布
                    if (progress === that.imageSrc.length) {
                      ui.hideLoading()
                      ui.showToast({ title: '发表成功', icon: 'success' })
                      that.config.refresh = true
                    }
                  } else {
                    ui.hideLoading()
                    ui.showToast({ title: '发表失败' })
                  }
                },
                fail: function ({ errMsg }) {
                  ui.hideLoading()
                  ui.showToast({ title: '图片上传失败' })
                }
              })
            }
          } else {
            // 文字发表成功后返回的失败状态
            that.value = ''
            ui.showToast({ title: '发表失败' })
          }
        },
        fail: function ({ errMsg }) {
          // 文字发表失败
          that.value = ''
          ui.showToast({ title: '文字提交失败' })
        }
      })
    },
    // 点赞
    popoverShow (e) {
      console.log(e)
      // this.popover = []
      // this.popover[index] = true
      // if (this.popoverText[index] === undefined) {
      //   this.popoverText[index] = '赞'
      // }
      this.$refs.popover.showPopover({
        el: e.target,
        position: 'left',
        effect: 'slide'
      })
    },
    // 点赞后
    giveSupport (index) {
      // this.popover = []
      // this.support = []
      // if (!this.comment[index]) {
      //   this.comment[index] = true
      //   this.popoverText[index] = '取消'
      // } else {
      //   this.comment[index] = false
      //   this.popoverText[index] = '赞'
      // }
      
    },
    look () {
      let itemList = [
        '公开',
        '私密',
        '部分可见',
        '不给谁看'
      ]
      let that = this
      ui.showActionSheet({
        itemList: itemList,
        success: (index) => {
          that.lookText = itemList[index]
        }
      })
    },
    remind () {
      let itemList = [
        '好友',
        '标签',
        '部分好友'
      ]
      let that = this
      ui.showActionSheet({
        itemList: itemList,
        success: (index) => {
          that.remindText = itemList[index]
        }
      })
    },
    qzone () {
      if (this.colorActive) {
        this.qzoneColor = '#D1D1D1'
        this.colorActive = false
      } else {
        this.qzoneColor = '#FCC416'
        this.colorActive = true
      }
    },
    handleListViewChange (status) {
    },
    handleReload () {
      this.config.reload = true
    },
    handleBegin ({ distance, direction }) {
      console.log(123131)
      this.rotate = parseInt(distance * 5)
    },
    handleActive () {
      this.className = 'after'
      this.config.refresh = true
    },
    handleAfter () {
      this.className = ''
    }
  },
  mounted () {
    // 进页面后请求数据
    let that = this
    // 根据屏幕大小适配照片大小
    ui.getSystemInfo({
      success: function (res) {
        if (res.windowWidth < 360) {
          that.imgWidth = '70'
          that.imgHeight = '70'
        }
      }
    })
  }
}
