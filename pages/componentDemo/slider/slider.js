export default {
  data () {
    return {
      value1: 0,
      value2: [3, 12],
      bufferValue: 0,
      interval: null,
      formatval: this.getformatval,
      tooltipformat: this.gettooltipformat,
      tooltipformat2: this.gettooltipformat2
    }
  },
  methods: {
    changeValue () {
      this.value1 += 10
      if (this.value1 >= 100) {
        this.value1 = 100
      } else if (this.value1 < 0) {
        this.value1 = 0
      }
    },
    sliderchange (val) {
      ui.showToast({ title: '拖动后的值为：' + val })
    },
    changeBufferValue () {
      this.interval = setInterval(() => {
        this.bufferValue += 50
        if (this.bufferValue > 202) {
          this.bufferValue = 202
          clearInterval(this.interval)
        }
      }, 1000)
    },
    getformatval (num) {
      return parseInt(num / 60) + ':' + parseInt((num % 60 >= 10 ? '' : '0') + (num % 60))
    },
    gettooltipformat (num) {
      return parseInt(num / 60) + ':' + (num % 60 >= 10 ? '' : '0') + (num % 60)
    },
    gettooltipformat2 (num) {
      return num + '元'
    }
  }
}
