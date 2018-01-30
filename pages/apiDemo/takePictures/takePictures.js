
var sourceType = [['camera'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]
export default {
  data () {
    return {
      imageList: [

      ],
      sourceTypeIndex: 2,
      sourceType: ['拍照', '相册', '拍照或相册'],
      sizeTypeIndex: 1,
      sizeType: ['压缩', '原图', '压缩或原图'],
      countIndex: 8,
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    chooseImage () {
      var that = this
      ui.chooseImage({
        sourceType: sourceType[this.sourceTypeIndex],
        sizeType: sizeType[this.sizeTypeIndex],
        count: this.count[this.countIndex],
        success: function (res) {
          that.imageList = res.tempFilePaths
          // that.previewImage()
        },
        fail: function (res) {
        }
      })
    },
    previewImage () {
      var that = this
      ui.previewImage({
        urls: that.imageList, // 需要预览的图片http链接列表
        success: function () {
        },
        fail () {
        }
      })
    }
  }
}
