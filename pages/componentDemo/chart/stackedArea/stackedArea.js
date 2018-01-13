// stackedArea.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      tempAreaData: {},
      tempAreaData2: {},
      count: null,
      emptyDataConfig: {
        minDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        maxDate: new Date(),
        maxY: 600
      },
      areaChartData: {
        data: [
          {
            date: '2011-10-20',
            name: '票房',
            value: 7363
          },
          {
            date: '2011-10-21T00:00:00Z',
            name: '票房',
            value: 10042
          },
          {
            date: '2011-10-22T00:00:00Z',
            name: '票房',
            value: 7019
          },
          {
            date: '2011-10-23T00:00:00Z',
            name: '票房',
            value: 2632
          },
          {
            date: '2011-10-24T00:00:00Z',
            name: '票房',
            value: 2276
          },
          {
            date: '2011-10-25T00:00:00Z',
            name: '票房',
            value: 2033
          },
          {
            date: '2011-10-26T00:00:00Z',
            name: '票房',
            value: 1815
          },
          {
            date: '2011-10-27T00:00:00Z',
            name: '票房',
            value: 1282
          },
          {
            date: '2011-10-28T00:00:00Z',
            name: '票房',
            value: 2468
          },
          {
            date: '2011-10-29T00:00:00Z',
            name: '票房',
            value: 1975
          },
          {
            date: '2011-10-30T00:00:00Z',
            name: '票房',
            value: 711
          },
          {
            date: '2011-10-31T00:00:00Z',
            name: '票房',
            value: 728
          }
        ],
        colorSchema: ['#fc9e08']
      },
      areaChartData2: {
        'data': [
          {
            'name': '帕丁顿熊2',
            'value': 0,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '帕丁顿熊2',
            'value': 1000,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '帕丁顿熊2',
            'value': 1006.34,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '帕丁顿熊2',
            'value': 2000,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 1003,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 1006,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 1000,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 500,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 1000,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 2000,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 2002,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 700,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 0,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 1000,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 1006,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 300,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 1008,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 1002,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 500,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 300,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 400,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 900,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 600,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 300,
            'date': '2011-01-08T00:00:00Z'
          }
        ]
      },
      areaChartData3: {
        'data': [
          {
            'name': '帕丁顿熊2',
            'value': 0,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '帕丁顿熊2',
            'value': 1000,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '帕丁顿熊2',
            'value': 1006.34,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '帕丁顿熊2',
            'value': 2000,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 1003,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 1006,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 1000,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '怪兽大学',
            'value': 500,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 1000,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 2000,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 2002,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '父子雄兵',
            'value': 700,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 0,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 1000,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 1006,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '绝世高手',
            'value': 300,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 1008,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 1002,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 500,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '奇门遁甲',
            'value': 300,
            'date': '2011-01-08T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 400,
            'date': '2011-01-05T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 900,
            'date': '2011-01-06T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 600,
            'date': '2011-01-07T00:00:00Z'
          },
          {
            'name': '寻梦环游记',
            'value': 300,
            'date': '2011-01-08T00:00:00Z'
          }
        ]
      },
      list: [{
        text: '帕丁顿熊2',
        topic: 0,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#70f0c7',
        checked: true
      }, {
        text: '怪兽大学',
        topic: 3,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#41c4c9',
        checked: true
      }, {
        text: '父子雄兵',
        topic: 4,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#fed009',
        checked: true
      }, {
        text: '绝世高手',
        topic: 5,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#fda71e',
        checked: true
      }, {
        text: '奇门遁甲',
        topic: 5,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#f65bb9',
        checked: true
      }, {
        text: '寻梦环游记',
        topic: 5,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#9887e3',
        checked: true
      }],
      colorSchema: ['#70f0c7', '#41c4c9', '#fed009', '#fda71e', '#f65bb9', '#9887e3'],
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 3,
            name: '帕丁顿熊2'
          },
          {
            id: 2,
            quantity: 3,
            name: '怪兽大学'
          },
          {
            id: 3,
            quantity: 3,
            name: '父子雄兵'
          },
          {
            id: 4,
            quantity: 3,
            name: '绝世高手'
          },
          {
            id: 5,
            quantity: 3,
            name: '奇门遁甲'
          },
          {
            id: 6,
            quantity: 3,
            name: '寻梦环游记'
          }

        ],
        textSize: 16,
        colorSchema: ['#70f0c7', '#41c4c9', '#fed009', '#fda71e', '#f65bb9', '#9887e3']
      }
    }
  },
  methods: {
    tagsChange (index) {
      this.list[index].checked = !this.list[index].checked
      let data = this.tempAreaData
      data = JSON.parse(JSON.stringify(data))
      // for (let i = 0; i < data.length; i++) {
      //   if (this.list[index].text === data[i].name) {
      //     data.splice(i, 1)
      //     i--
      //   }
      //   this.tempAreaData = data
      // }

      if (!this.list[index].checked) {
        for (let i = 0; i < data.length; i++) {
          if (this.list[index].text === data[i].name) {
            if (this.count === 4) {
              this.list[index].checked = true
              return false
            } else if (this.count > 1) {
              this.count--
              data.splice(i, 1)
              i--
              this.tempAreaData = data
            }
          }
        }
      } else if (this.list[index].checked) {
        for (let i = 0; i < this.areaChartData3.data.length; i++) {
          if (this.list[index].text === this.areaChartData3.data[i].name) {
            this.count++
            // this.tempAreaData2 = data
            this.tempAreaData.push(this.areaChartData3.data[i])
            // this.tempAreaData = this.tempAreaData2
          }
        }
      }
    }
  },
  mounted () {
    this.tempAreaData = this.areaChartData3.data
    this.count = this.tempAreaData.length
  }
}
