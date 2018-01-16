// stackedBar.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      clickText: '',
      stackedBarDataEn: {
        'data': [
          {
            'stack': 'Direct',
            'value': 3,
            'name': '2011-01-05',
            'color': '#3399ff'
          },
          {
            'stack': 'Eventbrite',
            'value': 23,
            'name': '2011-01-05',
            'color': '#54cd72'
          },
          {
            'stack': 'Email',
            'value': 10,
            'name': '2011-01-05',
            'color': '#fdd210'
          },
          {
            'stack': 'Direct',
            'value': 10,
            'name': '2011-01-06',
            'color': '#3399ff'
          },
          {
            'stack': 'Eventbrite',
            'value': 16,
            'name': '2011-01-06',
            'color': '#54cd72'
          },
          {
            'stack': 'Email',
            'value': 20,
            'name': '2011-01-06',
            'color': '#fdd210'
          },
          {
            'stack': 'Direct',
            'value': 16,
            'name': '2011-01-07',
            'color': '#3399ff'
          },
          {
            'stack': 'Eventbrite',
            'value': 10,
            'name': '2011-01-07',
            'color': '#54cd72'
          },
          {
            'stack': 'Email',
            'value': 26,
            'name': '2011-01-07',
            'color': '#fdd210'
          },
          {
            'stack': 'Direct',
            'value': 23,
            'name': '2011-01-08',
            'color': '#3399ff'
          },
          {
            'stack': 'Eventbrite',
            'value': 0,
            'name': '2011-01-08',
            'color': '#54cd72'
          },
          {
            'stack': 'Email',
            'value': 33,
            'name': '2011-01-08',
            'color': '#fdd210'
          }
        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210']
      },
      stackedBarData: {
        'data': [
          {
            'stack': '北京',
            'value': 0,
            'name': '2011-01-05'
          },
          {
            'stack': '上海',
            'value': 23,
            'name': '2011-01-05'
          },
          {
            'stack': '深圳',
            'value': 10,
            'name': '2011-01-05'
          },
          {
            'stack': '北京',
            'value': 10,
            'name': '2011-01-06'
          },
          {
            'stack': '上海',
            'value': 16,
            'name': '2011-01-06'
          },
          {
            'stack': '深圳',
            'value': 20,
            'name': '2011-01-06'
          },
          {
            'stack': '北京',
            'value': 16,
            'name': '2011-01-07'
          },
          {
            'stack': '上海',
            'value': 10,
            'name': '2011-01-07'
          },
          {
            'stack': '深圳',
            'value': 26,
            'name': '2011-01-07'
          },
          {
            'stack': '北京',
            'value': 23,
            'name': '2011-01-08'
          },
          {
            'stack': '上海',
            'value': 0,
            'name': '2011-01-08'
          },
          {
            'stack': '深圳',
            'value': 33,
            'name': '2011-01-08'
          }
        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210']
      },
      stackedBarData2: {
        'data': [
          {
            'stack': '北京',
            'views': 0.2,
            'date': '2011-01-05'
          },
          {
            'stack': '上海',
            'views': 0.5,
            'date': '2011-01-05'
          },
          {
            'stack': '深圳',
            'views': 0.3,
            'date': '2011-01-05'
          },
          {
            'stack': '北京',
            'views': 0.3,
            'date': '2011-01-06'
          },
          {
            'stack': '上海',
            'views': 0.3,
            'date': '2011-01-06'
          },
          {
            'stack': '深圳',
            'views': 0.4,
            'date': '2011-01-06'
          },
          {
            'stack': '北京',
            'views': 0.2,
            'date': '2011-01-07'
          },
          {
            'stack': '上海',
            'views': 0.4,
            'date': '2011-01-07'
          },
          {
            'stack': '深圳',
            'views': 0.4,
            'date': '2011-01-07'
          },
          {
            'stack': '北京',
            'views': 0.25,
            'date': '2011-01-08'
          },
          {
            'stack': '上海',
            'views': 0.2,
            'date': '2011-01-08'
          },
          {
            'stack': '深圳',
            'views': 0.55,
            'date': '2011-01-08'
          }
        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210']
      },
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 3,
            name: '北京'
          },
          {
            id: 2,
            quantity: 3,
            name: '上海'
          },
          {
            id: 3,
            quantity: 3,
            name: '深圳'
          }

        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210']
      },
      legendDataEn: {
        legend: [
          {
            id: 1,
            quantity: 3,
            name: 'Direct'
          },
          {
            id: 2,
            quantity: 3,
            name: 'Eventbrite'
          },
          {
            id: 3,
            quantity: 3,
            name: 'Email'
          }

        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210']
      },
      margin: {
        left: 100,
        right: 20,
        top: 20,
        bottom: 20
      }
    }
  },
  methods: {
    custommove (dataPoint, topicColorMap, x, y) {
      console.log('111')
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

      this.clickText = `点击的日期为${dataPoint.key},${getValues(dataPoint)}`
    }
  },
  mounted () {
  }
}
