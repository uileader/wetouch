export default {
  data () {
    return {
      contrastValue: [54.3, 45.7],
      colorArry: ['#65A2ED', '#F6564A'],

      contrastValue2: [68.8, 31.2],
      colorArry2: ['#4ECEA6', '#A8DB3D'],

      contrastValue3: [54.3, 45.7],
      contrastValue4: [29.8, 70.2],
      colorArry3: ['#5C9AFF', '#EB2429'],

      contrastValue5: [1, 1],
      colorArry5: ['#F1961C', '#3C7ADA'],
      upCount: 0,
      downCount: 0,
      colorArry6: ['#406DE0', '#F6C538'],
      ageArry: [
        {
          age: [17, 22]
        }, {
          age: [27, 32]
        }, {
          age: [37, 42]
        }, {
          age: [47, 52]
        }, {
          age: [57, 62]
        }, {
          age: [67, 72]
        }, {
          age: [77, 82]
        }, {
          age: [87, 92]
        }
      ],
      contrast: [
        {
          value: [50, 50]
        }, {
          value: [60, 75]
        }, {
          value: [48, 80]
        }, {
          value: [45, 85]
        }, {
          value: [40, 82]
        }, {
          value: [38, 78]
        }, {
          value: [35, 68]
        }, {
          value: [30, 55]
        }, {
          value: [28, 45]
        }, {
          value: [25, 35]
        }, {
          value: [20, 30]
        }, {
          value: [18, 25]
        }, {
          value: [15, 15]
        }, {
          value: [10, 10]
        }, {
          value: [5, 5]
        }
      ]
    }
  },

  methods: {
    praise () {
      this.contrastValue5 = [this.upCount += 1, this.downCount]
    },
    tread () {
      this.contrastValue5 = [this.upCount, this.downCount += 1]
    }
  }
}
