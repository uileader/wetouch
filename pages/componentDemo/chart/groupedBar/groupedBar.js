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
            name: 'Direct1',
            value: 3,
            date: '2011-01-05'
          },
          {
            group: '上海',
            name: 'Eventbrite1',
            value: 23,
            date: '2011-01-05'
          },
          {
            group: '深圳',
            name: 'Email1',
            value: 10,
            date: '2011-01-05'
          },
          {
            group: '北京',
            name: 'Direct2',
            value: 10,
            date: '2011-01-06'
          },
          {
            group: '上海',
            name: 'Eventbrite2',
            value: 16,
            date: '2011-01-06'
          },
          {
            group: '深圳',
            name: 'Email2',
            value: 20,
            date: '2011-01-06'
          },
          {
            group: '北京',
            name: 'Direct3',
            value: 16,
            date: '2011-01-07'
          },
          {
            group: '上海',
            name: 'Eventbrite3',
            value: 10,
            date: '2011-01-07'
          },
          {
            group: '深圳',
            name: 'Email3',
            value: 26,
            date: '2011-01-07'
          },
          {
            group: '北京',
            name: 'Direct4',
            value: 23,
            date: '2011-01-08'
          },
          {
            group: '上海',
            name: 'Eventbrite4',
            value: 4,
            date: '2011-01-08'
          },
          {
            group: '深圳',
            name: 'Email4',
            value: 33,
            date: '2011-01-08'
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
      groupDataEn: {
        data: [
          {
            group: 'Direct',
            name: 'Direct1',
            value: 3,
            date: '2011-01-05'
          },
          {
            group: 'Eventbrite',
            name: 'Eventbrite1',
            value: 23,
            date: '2011-01-05'
          },
          {
            group: 'Email',
            name: 'Email1',
            value: 10,
            date: '2011-01-05'
          },
          {
            group: 'Direct',
            name: 'Direct2',
            value: 10,
            date: '2011-01-06'
          },
          {
            group: 'Eventbrite',
            name: 'Eventbrite2',
            value: 16,
            date: '2011-01-06'
          },
          {
            group: 'Email',
            name: 'Email2',
            value: 20,
            date: '2011-01-06'
          },
          {
            group: 'Direct',
            name: 'Direct3',
            value: 16,
            date: '2011-01-07'
          },
          {
            group: 'Eventbrite',
            name: 'Eventbrite3',
            value: 10,
            date: '2011-01-07'
          },
          {
            group: 'Email',
            name: 'Email3',
            value: 26,
            date: '2011-01-07'
          },
          {
            group: 'Direct',
            name: 'Direct4',
            value: 23,
            date: '2011-01-08'
          },
          {
            group: 'Eventbrite',
            name: 'Eventbrite4',
            value: 4,
            date: '2011-01-08'
          },
          {
            group: 'Email',
            name: 'Email4',
            value: 33,
            date: '2011-01-08'
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
      },
      legendDataEn: {
        legend: [
          {
            id: 1,
            quantity: 134,
            name: 'Direct'
          },
          {
            id: 2,
            quantity: 100,
            name: 'Eventbrite'
          },
          {
            id: 3,
            quantity: 234,
            name: 'Email'
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
