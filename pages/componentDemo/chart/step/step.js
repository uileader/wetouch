// step.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      clickText: '',
      data: [
        {
          value: 1,
          key: '1月'
        },
        {
          value: 2,
          key: '2月'
        },
        {
          value: 3,
          key: '3月'
        },
        {
          value: 6,
          key: '4月'
        },
        {
          value: 8,
          key: '5月'
        },
        {
          value: 11,
          key: '6月'
        },
        {
          value: 7,
          key: '7月'
        },
        {
          value: 6,
          key: '8月'
        },
        {
          value: 5,
          key: '9月'
        },
        {
          value: 2,
          key: '10月'
        },
        {
          value: 2,
          key: '11月'
        },
        {
          value: 1,
          key: '12月'
        }
      ],
      colorSchema: ['#70f0c7', '#41c4c9', '#fed009', '#fda71e', '#f65bb9'],
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 1,
            name: '1月'
          },
          {
            id: 2,
            quantity: 5,
            name: '2月'
          },
          {
            id: 3,
            quantity: 10,
            name: '3月'
          },
          {
            id: 4,
            quantity: 15,
            name: '4月'
          },
          {
            id: 4,
            quantity: 12,
            name: '5月'
          },
          {
            id: 4,
            quantity: 19,
            name: '6月'
          }
        ],
        textSize: 16
      }
    }
  },
  methods: {
    customclick (e) {
      this.clickText = `点击的是${e.key},值为：${e.value}`
    }
  }
}
