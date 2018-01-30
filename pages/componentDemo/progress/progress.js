// progress.js
export default {
  data () {
    return {
      percent: 30,
      disabled: false,
      arrcolor: ['#20a0ff', 'red']
    }
  },
  methods: {
    handleProgressChange () {
      if (this.percent > 0) {
        this.percent = 0
      }
      let sid = window.setInterval(() => {
        this.disabled = true
        this.percent++
        if (this.percent >= 100) {
          this.disabled = false
          window.clearInterval(sid)
        }
      }, 20)
    }
  }
}
