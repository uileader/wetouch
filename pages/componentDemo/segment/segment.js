// segment.js
export default {
  data () {
    return {
      value: 1,
      contentshow: 0,
      contentshow2: 0,
      tabContent: ['内容一', '内容二', '内容三']
    }
  },
  methods: {
    handleChange (index) {
      ui.showToast({
        title: 'index: ' + index
      })
    },
    changeTab1 (index) {
      this.contentshow = index
    },
    changeTab2 (index) {
      this.contentshow2 = index
    }
  }
}
