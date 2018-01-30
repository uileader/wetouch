// input.js
export default {
  data () {
    return {
      value2: ''
    }
  },
  methods: {
    handleInput (e) {
      ui.showToast({ title: e })
    },
    handleFocus (e) {
      ui.showToast({ title: '获取焦点' })
    },
    handleBlur (e) {
      ui.showToast({ title: '失去焦点'})
    }
  }
}
