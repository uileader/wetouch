export default {
  data () {
    return {
      item: [{
        head: require('#/images/indexList/t1.png'),
        title: 'TOUCH UI',
        time: '1月25日',
        content: '如何优雅的抄袭代码？'
      }, {
        head: require('#/images/indexList/t2.png'),
        title: 'TOUCH UI',
        time: '1月20日',
        content: '如何在大屏幕上吃鸡？'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: 'TOUCH UI',
        time: '1月28日',
        content: '过去了没？我快到了'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: 'TOUCH UI',
        time: '1月20日',
        content: '麻烦去一下快递！'
      }, {
        head: require('#/images/indexList/t5.png'),
        title: 'TOUCH UI',
        time: '1月29日',
        content: '我今天不回家了，你自己吃吧。'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: 'TOUCH UI',
        time: '1月10日',
        content: '今天天气正好，适合出行。'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: 'TOUCH UI',
        time: '1月15日',
        content: '通知：再过几天都放假，请做好手头工作。'
      },{
        head: require('#/images/indexList/t1.png'),
        title: 'TOUCH UI',
        time: '1月25日',
        content: '如何优雅的抄袭代码？'
      }, {
        head: require('#/images/indexList/t2.png'),
        title: 'TOUCH UI',
        time: '1月20日',
        content: '如何在大屏幕上吃鸡？'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: 'TOUCH UI',
        time: '1月28日',
        content: '过去了没？我快到了'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: 'TOUCH UI',
        time: '1月20日',
        content: '麻烦去一下快递！'
      }, {
        head: require('#/images/indexList/t5.png'),
        title: 'TOUCH UI',
        time: '1月29日',
        content: '我今天不回家了，你自己吃吧。'
      }, {
        head: require('#/images/indexList/t4.png'),
        title: 'TOUCH UI',
        time: '1月10日',
        content: '今天天气正好，适合出行。'
      }, {
        head: require('#/images/indexList/t3.png'),
        title: 'TOUCH UI',
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
    popoverShow (e) {
      console.log(e)
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
      ui.showToast({
        title: title
      })
      this.$refs.popover.hidePopover()
    }
  },
  mounted () {

  }
}
