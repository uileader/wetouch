export default {
  data () {
    return {
      value1: true,
      value2: true,
      value3: false,
      value4: true,
      htmlTitle: '<span style="color:red">标题使用html</span>'
    }
  },
  methods: {
    handleSwitchChange (val) {
      ui.showToast({
        title: `switch的值为${val}`
      })
    }
  }
}