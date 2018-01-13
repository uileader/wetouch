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
    // run (lastSecond) {
    //   let second = this.runSecond

    //   if (this.storageKey) {
    //     const runSecond = new Date().getTime() + second * 1000
    //     window.sessionStorage.setItem(this.storageKey, runSecond)
    //   }

    //   if (!lastSecond) {
    //     this.tmpStr = this.getStr(second)
    //   }

    //   this.timer = setInterval(() => {
    //     second--
    //     this.tmpStr = this.getStr(second)

    //     this.disabled = true


    //     if (second <= 0) {
    //       this.disabled = false
    //       this.stop()
    //     }
    //   }, 1000)
    // },
    // stop () {
    //   this.tmpStr = this.resetStr
    //   this.start = false
    //   this.$emit('input', false)
    //   clearInterval(this.timer)
    // },
    // getStr (second) {
    //   return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g, second)
    // },
    handlesend () {
      ui.showToast({ title: '验证码已发送' })
    }
  }
}
