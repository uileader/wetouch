export default {
  data () {
    return {
      items0: [],
      items1: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      items6: [],
      items7: [],
      items8: [],
      top: 0,
      index: 0,
      bottom: 30,
      proportion: 0,
      // 下拉刷新（初始状态）
      state: 1,
      showLoading: false,
      imgSrc: require('#/images/mt_01.png')
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items0.push(i + ' - 推荐项目列表')
      this.items1.push(i + ' - 热点项目列表')
      this.items2.push(i + ' - 视频项目列表')
      this.items3.push(i + ' - 问答项目列表')
      this.items4.push(i + ' - 社会项目列表')
      this.items5.push(i + ' - 娱乐项目列表')
      this.items6.push(i + ' - 科技项目列表')
      this.items7.push(i + ' - 汽车项目列表')
      this.items8.push(i + ' - 体育项目列表')
    }
  },
  methods: {
    handleChange (index) {
      this.index = index
    },
    handleBegin ({ distance, direction }) {
      this.proportion = distance / 60
      // 拉满60px
      if (this.proportion >= 1) {
        if (this.state === 1 && direction === 'down') {
          // 释放刷新
          this.state = 2

          // 300ms吉祥物翻转时间
          window.setTimeout(() => {
            // 刷新中...
            this.state = 3
          }, 300)
        }
      } else {
        this.state = 1
      }
    },
    handleActive () {

    },
    handleAfter (flag) {
      this.proportion = 0
      if (flag) {
        // 刷新成功...
        this.state = 4
        for (let i = this.top - 1; i >= this.top - 10; i--) {
          this[`items${this.index}`].unshift(i + ' - 项目列表')
        }
        this.top -= 10
      }
    },
    handleLoadMore () {
      window.setTimeout(() => {
        for (let i = this.bottom; i < this.bottom + 10; i++) {
          this[`items${this.index}`].push(i + ' - 项目列表')
        }
        this.bottom += 10
      }, 1500)
    }
  }
}
