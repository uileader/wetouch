// bar.js
export default {
  data () {
    return {
      width: ui.WIN_WIDTH,
      clickText: '',
      clickText1: '',
      bar1: {
        margin: {
          left: 90,
          right: 20,
          top: 20,
          bottom: 20
        },
        colorSchema: ['#ffdd83'],
        data: [
          {
            value: 1236,
            name: '1月'
          }, {
            value: 334,
            name: '2月'
          }, {
            value: 535,
            name: '3月'
          }, {
            value: 413,
            name: '4月'
          }, {
            value: 175,
            name: '5月'
          }, {
            value: 623,
            name: '6月'
          }
        ]

      },
      bar2: {
        colorSchema: ['#70f0c7', '#41c4c9', '#fed009', '#fda71e', '#f65bb9'],
        data: [
          {
            value: 134,
            name: '1月'
          }, {
            value: 100,
            name: '2月'
          }, {
            value: 234,
            name: '3月'
          }, {
            value: 345,
            name: '4月'
          }, {
            value: 432,
            name: '5月'
          }, {
            value: 341,
            name: '6月'
          }
        ]
      },
      bar3: {
        data: [
          {
            value: 0.033,
            name: '1-2分'
          }, {
            value: 0.023,
            name: '3-4分'
          }, {
            value: 0.105,
            name: '5-6分'
          }, {
            value: 0.259,
            name: '7-8分'
          }, {
            value: 0.58,
            name: '9-10分'
          }
        ],
        margin: {
          left: 60,
          right: 20,
          top: 10,
          bottom: 20
        },
        colorSchema: ['#70f0c7', '#41c4c9', '#fed009', '#fda71e', '#f65bb9']
      },
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 134,
            name: '1月'
          },
          {
            id: 2,
            quantity: 100,
            name: '2月'
          },
          {
            id: 3,
            quantity: 234,
            name: '3月'
          },
          {
            id: 4,
            quantity: 345,
            name: '4月'
          },
          {
            id: 4,
            quantity: 432,
            name: '5月'
          },
          {
            id: 4,
            quantity: 341,
            name: '6月'
          }
        ],
        textSize: 16
      },
      legendData2: {
        legend: [
          {
            id: 1,
            quantity: 134,
            name: '1-2分'
          },
          {
            id: 2,
            quantity: 100,
            name: '3-4分'
          },
          {
            id: 3,
            quantity: 234,
            name: '5-6分'
          },
          {
            id: 4,
            quantity: 345,
            name: '7-8分'
          },
          {
            id: 4,
            quantity: 432,
            name: '9-10分'
          }
        ],
        textSize: 16
      }
    }
  },
  methods: {
    movingLog (e) {
    },
    customclick (e) {
      this.clickText = `点击的是${e.name},值为：${e.value}人`
      // ui.showToast({ title: e.name + ':' + e.value })
    },
    customclick1 (e) {
      this.clickText1 = `点击的是${e.name},值为：${Math.round(e.value * 100)}%`
      // ui.showToast({ title: e.name + ':' + e.value })
    }
  }
}
