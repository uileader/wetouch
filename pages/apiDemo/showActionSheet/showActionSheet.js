// showActionSheet.js
export default {
  data () {
    return {
      imgUrl: 'http://images.uileader.com/20170930/7fbde6a5-2e25-4f74-873d-a4b44fd82269.jpg'
    }
  },
  methods: {
    showActionSheet1 () {
      ui.showActionSheet({
        itemList: [
          '选项1',
          '选项2'
        ],
        success: (index) => {
          ui.showToast({
            title: `index: ${index}`
          })
        }
      })
    },
    showActionSheet2 () {
      ui.showActionSheet({
        itemList: [
          '选项1',
          '选项2'
        ],
        showCancel: false,
        success: (index) => {
          ui.showToast({
            title: `index: ${index}`
          })
        }
      })
    },
    showActionSheet3 () {
      ui.showActionSheet({
        itemList: [
          '<span style="color: green">保存</span>',
          '<span style="color: red">删除</span>'
        ],
        success: (index) => {
          ui.showToast({
            title: `index: ${index}`
          })
        }
      })
    },
    showActionSheet4 () {
      ui.showActionSheet({
        header: '<p>确定吗?<br><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span></p>',
        itemList: [
          '<span style="color: red">删除</span>'
        ],
        success: (index) => {
          ui.showToast({
            title: `index: ${index}`
          })
        }
      })
    },
    showActionSheet5 () {
      ui.showActionSheet({
        itemList: [
          '<span style="color: #ff2f00">分享到微博</span>',
          '<span style="color: #b0e46e">分享到微信</span>'
        ],
        success: (index) => {
          ui.showToast({
            title: `index: ${index}`
          })
        }
      })
    }
  }
}
