// donut.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      donut: {
        data: [
          {
            quantity: 14.4,
            name: '学生',
            id: 1
          }, {
            quantity: 35.9,
            name: '白领',
            id: 2
          }, {
            quantity: 49.6,
            name: '其他',
            id: 3
          }
        ],
        colorSchema: ['#2ec7ff', '#3f8ff1', '#ff574d']
      },
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 3,
            name: '学生'
          },
          {
            id: 2,
            quantity: 3,
            name: '白领'
          },
          {
            id: 3,
            quantity: 3,
            name: '其他'
          }

        ],
        textSize: 16,
        colorSchema: ['#2ec7ff', '#3f8ff1', '#ff574d']
      }
    }
  },
  methods: {}
}
