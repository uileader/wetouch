// groupedBar.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      clickText: '',
      clickText2: '',
      groupData: {
        data: [
          {
            group: '北京',
            value: 3,
            date: '2011-01-05',
            "color": "#3399ff"
          },
          {
            group: '上海',
            value: 23,
            date: '2011-01-05',
            "color": "#54cd72"
          },
          {
            group: '深圳',
            value: 10,
            date: '2011-01-05',
            "color": "#fdd210"
          },
          {
            group: '北京',
            value: 10,
            date: '2011-01-06',
            "color": "#3399ff"
          },
          {
            group: '上海',
            value: 16,
            date: '2011-01-06',
            "color": "#54cd72"
          },
          {
            group: '深圳',
            value: 20,
            date: '2011-01-06',
            "color": "#fdd210"
          },
          {
            group: '北京',
            value: 16,
            date: '2011-01-07',
            "color": "#3399ff"
          },
          {
            group: '上海',
            value: 10,
            date: '2011-01-07',
            "color": "#54cd72"
          },
          {
            group: '深圳',
            value: 26,
            date: '2011-01-07',
            "color": "#fdd210"
          },
          {
            group: '北京',
            value: 23,
            date: '2011-01-08',
            "color": "#3399ff"
          },
          {
            group: '上海',
            value: 4,
            date: '2011-01-08',
            "color": "#54cd72"
          },
          {
            group: '深圳',
            value: 33,
            date: '2011-01-08',
            "color": "#fdd210"
          }
        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210'],
        margin: {
          top: 40,
          right: 20,
          bottom: 60,
          left: 50
        }
      },
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 134,
            name: '北京'
          },
          {
            id: 2,
            quantity: 100,
            name: '上海'
          },
          {
            id: 3,
            quantity: 234,
            name: '深圳'
          }
        ],
        textSize: 16,
        colorSchema: ['#3399ff', '#54cd72', '#fdd210']
      }
    }
  },
  methods: {
    custommove (dataPoint, topicColorMap, x, y) {
      let getValues = function (dataPoint) {
        let obj = {
          topicName: [],
          value: []
        }
        let str = ''
        for (let i = 0; i < dataPoint.values.length; i++) {
          obj.topicName.push(dataPoint.values[i].topicName)
          obj.value.push(dataPoint.values[i].value)
          str += `${dataPoint.values[i].topicName}的值为:${dataPoint.values[i].value} `
        }
        return str
      }

      this.clickText = `点击的日期为${dataPoint.date},${getValues(dataPoint)}`
    },
    custommove2 (dataPoint, topicColorMap, x, y) {
      let getValues = function (dataPoint) {
        let obj = {
          topicName: [],
          value: []
        }
        let str = ''
        for (let i = 0; i < dataPoint.values.length; i++) {
          obj.topicName.push(dataPoint.values[i].topicName)
          obj.value.push(dataPoint.values[i].value)
          str += `${dataPoint.values[i].topicName}的值为:${dataPoint.values[i].value} `
        }
        return str
      }

      this.clickText2 = `点击的日期为${dataPoint.date},${getValues(dataPoint)}`
    }
  }
}
