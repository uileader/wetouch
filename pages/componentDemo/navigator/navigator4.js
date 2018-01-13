// navigator4.js
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    navigateBack () {
      ui.setStorageSync('backParameter', this.value)
      // localStorage.backParameter = this.value
      ui.navigateBack()
    }
  },
  mounted () {
  }
}