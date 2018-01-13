export default {
  data () {
    return {
      current: 0,
      items0: [],
      items1: [],
      items2: [],
      items3: [],
      items4: [],
      items5: [],
      items6: [],
      items7: [],
      items8: [],
      items9: [],
      contentHeight: ui.DEFAULT_CONTENT_HEIGHT,
      tabsWidth: ui.WIN_WIDTH - 70
    }
  },
  mounted () {
    for (let i = 1; i <= 100; i++) {
      this.items1.push(i + ' - 热点项目列表')
      this.items3.push(i + ' - 问答项目列表')
      this.items4.push(i + ' - 社会项目列表')
      this.items5.push(i + ' - 娱乐项目列表')
      this.items6.push(i + ' - 科技项目列表')
      this.items8.push(i + ' - 科技项目列表')
    }
    for (let i = 1; i <= 30; i++) {
      this.items0.push(i + ' - 推荐项目列表')
      this.items2.push(i + ' - 视频项目列表')
      this.items7.push(i + ' - 汽车项目列表')
      this.items9.push(i + ' - 汽车项目列表')
    }
  },
  methods: {
    handleChange (index, key) {
      this[key] = index
    },
    handleContentChange (index, key) {
      this[key] = index
    },
    navigateBack () {
      ui.navigateBack()
    }
  }
}
