export default {
  data () {
    return {
      disabled: false
    }
  },
  value (val) {
    this.start = val
    val && this.run()
  },
  methods: {
    handlesend () {
      ui.showToast({ title: '验证码已发送' })
    }
  }
}
