// webSocket.js
const sendUrl = 'ws://www.uileader.com/touchui-backstage/websocket.do'
export default {
  data () {
    return {
      loading: false,
      disabled: false,
      open: false,
      text: '',
      socketOpen: false,
      exampleText: '',
      socketMsgQueue: [],
      array: []
    }
  },
  methods: {
    handleInputChange (val) {
      this.exampleText = val
    },
    establish () {
      var that = this
      that.loading = true
      ui.connectSocket({
        url: sendUrl,
        data: {
          x: '',
          y: ''
        },
        success: function (res) {
          ui.showToast({
            title: 'WebSocket创建成功！'
          })
          that.loading = false
          that.socketOpen = true
          that.disabled = true
          that.open = true

          ui.onSocketOpen(function (res) {
            ui.showToast({
              title: 'WebSocket连接已打开！'
            })
            for (var i = 0; i < that.socketMsgQueue.length; i++) {
              that.sendSocketMessage(that.socketMsgQueue[i])
            }
            that.socketMsgQueue = []
          })
          ui.onSocketError(function (res) {
            ui.showToast({
              title: 'WebSocket连接打开失败，请检查！'
            })
          })
          ui.onSocketMessage(function (res) {
            that.array.push(`收到服务器返回内容：${res.data}`)
          })
        },
        fail: function (res) {
          ui.showToast({
            title: 'WebSocket创建失败！'
          })
          that.loading = false
          that.socketOpen = false
          that.disabled = false
          that.open = false
        }
      })
    },
    sendSocketMessage () {
      var that = this
      var msg = that.exampleText
      if (that.socketOpen) {
        ui.sendSocketMessage({
          data: msg,
          success: function (res) {
          },
          fail: function (res) {
            ui.showToast({
              title: '发送失败！'
            })
          }
        })
      } else {
        that.socketMsgQueue.push(msg)
      }
    },
    close () {
      var that = this
      that.loading = true
      ui.closeSocket({
        success: function (res) {
          that.socketOpen = false
          that.disabled = false
          that.open = false
          ui.showToast({
            title: '关闭WebSocket连接'
          })
          ui.onSocketClose(function (res) {
            ui.showToast({
              title: 'WebSocket 已关闭！'
            })
          })
        },
        fail: function () {
          ui.showToast({
            title: 'WebSocket 关闭失败'
          })
        }
      })
    }
  }
}
