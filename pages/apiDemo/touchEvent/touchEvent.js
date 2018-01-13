// touchEvent.js
export default {
  data () {
    return {
      imgUrl: 'http://images.uileader.com/20170930/7fbde6a5-2e25-4f74-873d-a4b44fd82269.jpg',
      tapText: '',
      longtapText: '',
      touchText: '',
      scrollText: '',
      startX: '',
      startY: '',
      itemList: ['发送给朋友', '收藏', '保存图片', '编辑', '定位到聊天位置']
    }
  },
  methods: {
    bindlongtap () {
      var that = this
      this.longtapText = 'longtap'
      setTimeout(function () {
        that.longtapText = ''
      }, 1000)
    },
    bindlongtap2 () {
      ui.showActionSheet({
        itemList: this.itemList,
        success: (index) => {
          if (index !== -1) {
            ui.showToast({
              title: this.itemList[index]
            })
          }
        }
      })
    },
    bindtap () {
      var that = this
      this.tapText = 'tap'
      setTimeout(function () {
        that.tapText = ''
      }, 1000)
    },
    bindtouchstart (e) {
      this.touchText = 'touchstart'
    },
    bindtouchmove (e) {
      this.touchText = 'touchmove'
    },
    bindtouchend () {
      var that = this
      this.touchText = 'touchend'
      setTimeout(function () {
        that.touchText = ''
      }, 1000)
    },
    touchstart (e) {
      this.startX = e.changedTouches[0].clientX
      this.startY = e.changedTouches[0].clientY
    },
    touchmove (e) {
      var moveX = e.changedTouches[0].clientX
      var moveY = e.changedTouches[0].clientY
      var disX = moveX - this.startX
      var disY = moveY - this.startY
      if (Math.abs(disX) > Math.abs(disY) && disX > 0) {
        this.scrollText = 'right'
      } else if (Math.abs(disX) > Math.abs(disY) && disX < 0) {
        this.scrollText = 'left'
      } else if (Math.abs(disX) < Math.abs(disY) && disY < 0) {
        this.scrollText = 'up'
      } else if (Math.abs(disX) < Math.abs(disY) && disY > 0) {
        this.scrollText = 'down'
      }
    },
    touchend (e) {
      this.startX = ''
      this.startY = ''
    }
  }
}
