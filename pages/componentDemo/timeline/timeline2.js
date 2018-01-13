// timeline2.js
export default {
  data () {
    return {
      list: [
        { pos: '上海市', content: '已发货' },
        { content: '运输中' },
        { content: '派件中' },
        { pos: '北京市', content: '已签收' }
      ],
      left: (window.innerWidth - 280) / 2,
      winWidth: window.innerWidth,
      color: '',
      thisIndex: 0
    }
  },
  methods: {
    Next () {
      if (this.thisIndex !== this.list.length - 1) {
        this.thisIndex++
      } else {
        this.thisIndex = 0
      }
    },
    Previous () {
      if (this.thisIndex !== 0) {
        this.thisIndex--
      } else {
        this.thisIndex = this.list.length - 1
      }
    }
  }
}
