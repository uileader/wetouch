export default {
  data () {
    return {
      valueArray1: [1, 2, 1],
      colorArray1: ['#FF514B', '#FFDE4F', '#3FB178'],
      dashboardValue: 60,

      valueArray2: [1, 1, 1],
      colorArray2: ['#FF6A30', '#FFF72D', '#86EC38'],

      valueArray3: [4, 1, 3],
      colorArray3: ['#FF596A', '#FFB901', '#58CF01'],

      dashboardValue4: 50,

      dashboard6Value: 40,

      dashboard7Value: 50,
      dashboard7TextValue: 1500
    }
  },

  methods: {
    changeDashboard (methods) {
      let count = 10
      if (methods === 'plus') {
        this.dashboardValue += count
        if (this.dashboardValue >= 100) {
          this.dashboardValue = 100
        }
      } else {
        this.dashboardValue -= count
        if (this.dashboardValue <= 0) {
          this.dashboardValue = 0
        }
      }
    },
    setValue (index) {
      let num = Math.round(Math.random() * 100)
      if (index === 6) {
        this.dashboard6Value = num
      } else {
        this.dashboard7Value = num
        this.dashboard7TextValue = this.dashboard7Value / (100 / 3000)
      }
    }
  },
  mounted () {

  }
}
