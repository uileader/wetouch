// notice.js
export default {
  data () {
    return {
      list: [
        { height: 80, title: '旺顺阁鱼头泡饼', imgUrl: 'http://p0.meituan.net/200.0/deal/1e257a1f5b0d974b292ac7bc9a3c21ad71414.jpg', switcher: 'off' },
        { height: 80, title: '吉野家', imgUrl: 'http://p0.meituan.net/200.0/deal/271ab37c767d8c4ba5f705da8eb00e9032980.jpg', switcher: 'off' }
      ]
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    del (index) {
      this.list[index].height = 0
      // 实际使用时将该项id传给后台即可，不需要在前台真正删除数据。
      // 前台直接删除数据会导致一些问题。
      // setTimeout(() => {
      //   this.list.splice(index, 1, {})
      // }, 500)
    },
    changeHandler (index) {
      for (var i = 0; i < this.list.length; i++) {
        if (i !== index) {
          this.list[i].switcher = 'off'
        }
      }
    }

  }
}
