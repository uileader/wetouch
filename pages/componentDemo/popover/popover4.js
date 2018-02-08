export default {
  data () {
    return {
      listIndex: null,
      item: [{
        head: require('#/images/indexList/t1.png'),
        title: '阿强',
        time: '1月25日',
        content: '如何优雅的抄袭代码？'
      }, {
        head: require('#/images/indexList/t2.png'),
        title: '安生',
        time: '1月20日',
        content: '如何在大屏幕上吃鸡？'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: '波波',
        time: '1月28日',
        content: '过去了没？我快到了'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: '陈杰',
        time: '1月20日',
        content: '麻烦去一下快递！'
      }, {
        head: require('#/images/indexList/t5.png'),
        title: '长安',
        time: '1月29日',
        content: '我今天不回家了，你自己吃吧。'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: '程玲',
        time: '1月10日',
        content: '今天天气正好，适合出行。'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: '董子健',
        time: '1月15日',
        content: '通知：再过几天都放假，请做好手头工作。'
      }, {
        head: require('#/images/indexList/t1.png'),
        title: '董洁',
        time: '1月25日',
        content: '如何优雅的抄袭代码？'
      }, {
        head: require('#/images/indexList/t2.png'),
        title: '冬雪',
        time: '1月20日',
        content: '如何在大屏幕上吃鸡？'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: '丁洁',
        time: '1月28日',
        content: '过去了没？我快到了'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: '邓超',
        time: '1月20日',
        content: '麻烦去一下快递！'
      }, {
        head: require('#/images/indexList/t5.png'),
        title: '大豆',
        time: '1月29日',
        content: '我今天不回家了，你自己吃吧。'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: '厄尔',
        time: '1月10日',
        content: '今天天气正好，适合出行。'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: '何伟',
        time: '1月15日',
        content: '通知：再过几天都放假，请做好手头工作。'
      }],
      maskStyle: { backgroundColor: 'transparent' }
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    popoverShow (e, index) {
      console.log(index)
      this.listIndex = index
      // this.popover = []
      // this.popover[index] = true
      // if (this.popoverText[index] === undefined) {
      //   this.popoverText[index] = '赞'
      // }
      this.$refs.popover.showPopover({
        el: e.target,
        position: 'bottom',
        effect: 'slide'
      })
    },
    showTitle (title) {
      console.log(this.item[this.listIndex])
      ui.showToast({
        title: `${title}(${this.item[this.listIndex].title})`
      })
      this.$refs.popover.hidePopover()
    }
  },
  mounted () {

  }
}
