// details.js
export default {
  data () {
    return {
      contentHeight: ui.DEFAULT_CONTENT_HEIGHT,
      commentValue: '',
      commentContent: [
        {
          head: require('#/images/head.jpg'),
          name: 'Touch UI',
          time: '9小时前',
          content: '也不知东北吧，天下乌鸦一般黑'
        }
      ],
      popupShow: false,
      identity: 'TOUCH UI（自己）',
      textareaValue: '',
      className: '',
      statusBar: ui.STATUS_BAR_HEIGHT
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    commentSubmit (e) {
      console.log(e)
      let value = e.search
      let date = new Date()
      // let h = date.getHours();
      // let m = date.getMinutes();
      // let s = date.getSeconds();
      let mytime = date.toLocaleTimeString()
      let content = {
        head: require('#/images/head.jpg'),
        name: 'Touch UI',
        time: mytime,
        content: value
      }
      if (value !== '') {
        this.commentContent.unshift(content)
        ui.showToast({ title: '评论成功' })
      }
      this.commentValue = ''
    },
    openPopup () {
      this.popupShow = true
      // 这是调用全屏搜索的
      // ui.app.searchShow = true
    },
    changeTextarea (e) {
      console.log(e)
      this.textareaValue = e
      if (this.textareaValue.length > 0) {
        this.className = 'active'
      } else {
        this.className = ''
      }
    },
    cancel () {
      this.popupShow = false
    },
    popupInit () {

    },
    publish () {
      if (this.className !== '') {
        this.popupShow = false

        let date = new Date()
        // let h = date.getHours();
        // let m = date.getMinutes();
        // let s = date.getSeconds();
        let mytime = date.toLocaleTimeString()
        let content = {
          head: require('#/images/head.jpg'),
          name: 'Touch UI',
          time: mytime,
          content: this.textareaValue
        }
        this.commentContent.unshift(content)
        ui.showToast({ title: '评论成功' })
        this.textareaValue = ''
      }
    },
    showActionSheet () {
      let itemList = [
        'TOUCH UI（自己）'
      ]
      // 上面下面两种写法都行
      // let itemList = [
      //   '<span style="color: #0E63FF">TOUCH UI（自己）</span>'
      // ]
      ui.showActionSheet({
        header: '<p><span style="color:#828282;font-size:12px;">选择发布身份</span></p>',
        itemList: itemList,
        success: (index) => {
          this.identity = itemList[index]
        }
      })
    }

  },
  mounted () {

  }
}
