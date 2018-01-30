// screenBrightness.js
export default {
  data () {
    return {
      value: 0,
      isKeep: false,
      sliderMax: 100,
      sliderMin: 0
    }
  },
  methods: {
    get () {
      ui.getScreenBrightness({
        success: ({ value }) => {
          this.value = value * 100
        }
      })
    },
    set (value) {
      ui.setScreenBrightness({
        value
      })
    },
    keep () {
      ui.setKeepScreenOn({
        keepScreenOn: true,
        success: () => {
          this.isKeep = true
        }
      })
    },
    cancel () {
      ui.setKeepScreenOn({
        keepScreenOn: false,
        success: () => {
          this.isKeep = false
        }
      })
    },
    sliderChange (value) {
      this.set(value / 100)
    }
  },
  mounted () {
    this.get()
  }
}

