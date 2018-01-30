// stackedArea.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      tempAreaData: {},
      count: null,
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
        data: [
          {
            date: '2011-10-20',
            name: '票房',
            value: 210
          },
          {
            date: '2011-10-21T00:00:00Z',
            name: '票房',
            value: 200
          },
          {
            date: '2011-10-22T00:00:00Z',
            name: '票房',
            value: 224
          },
          {
            date: '2011-10-23T00:00:00Z',
            name: '票房',
            value: 230
          },
          {
            date: '2011-10-24T00:00:00Z',
            name: '票房',
            value: 228
          },
          {
            date: '2011-10-25T00:00:00Z',
            name: '票房',
            value: 240
          },
          {
            date: '2011-10-26T00:00:00Z',
            name: '票房',
            value: 266
          },
          {
            date: '2011-10-27T00:00:00Z',
            name: '票房',
            value: 257
          },
          {
            date: '2011-10-28T00:00:00Z',
            name: '票房',
            value: 287
          },
          {
            date: '2011-10-29T00:00:00Z',
            name: '票房',
            value: 279
          },
          {
            date: '2011-10-30T00:00:00Z',
            name: '票房',
            value: 301
          },
          {
            date: '2011-10-31T00:00:00Z',
            name: '票房',
            value: 305
          },
          {
            date: '2011-11-01T00:00:00Z',
            name: '票房',
            value: 335
          },
          {
            date: '2011-11-02T00:00:00Z',
            name: '票房',
            value: 345
          },
          {
            date: '2011-11-03T00:00:00Z',
            name: '票房',
            value: 325
          },
          {
            date: '2011-11-04T00:00:00Z',
            name: '票房',
            value: 289
          },
          {
            date: '2011-11-05T00:00:00Z',
            name: '票房',
            value: 276
          },
          {
            date: '2011-11-06T00:00:00Z',
            name: '票房',
            value: 265
          }
        ],
        colorSchema: ['#fc9e08']
      },
      areaChartData3: {
        data: [
          {
            date: '2011-10-20',
            name: '票房',
            value: 80
          },
          {
            date: '2011-10-21T00:00:00Z',
            name: '票房',
            value: 100
          },
          {
            date: '2011-10-22T00:00:00Z',
            name: '票房',
            value: 150
          },
          {
            date: '2011-10-23T00:00:00Z',
            name: '票房',
            value: 130
          },
          {
            date: '2011-10-24T00:00:00Z',
            name: '票房',
            value: 187
          },
          {
            date: '2011-10-25T00:00:00Z',
            name: '票房',
            value: 159
          },
          {
            date: '2011-10-26T00:00:00Z',
            name: '票房',
            value: 154
          },
          {
            date: '2011-10-27T00:00:00Z',
            name: '票房',
            value: 198
          },
          {
            date: '2011-10-28T00:00:00Z',
            name: '票房',
            value: 167
          }
        ],
        colorSchema: ['#fc9e08']
      },
      areaChartData4: {
        'data': [
          {
            'name': '帕丁顿熊2',
            'value': 0,
            'date': '2011-01-05T00:00:00Z',
            'color':'#70f0c7'
          },
          {
            'name': '帕丁顿熊2',
            'value': 1000,
            'date': '2011-01-06T00:00:00Z',
            'color':'#70f0c7'
          },
          {
            'name': '帕丁顿熊2',
            'value': 1006.34,
            'date': '2011-01-07T00:00:00Z',
            'color':'#70f0c7'
          },
          {
            'name': '帕丁顿熊2',
            'value': 2000,
            'date': '2011-01-08T00:00:00Z',
            'color':'#70f0c7'
          },
          {
            'name': '怪兽大学',
            'value': 1003,
            'date': '2011-01-05T00:00:00Z',
            'color':'#41c4c9'
          },
          {
            'name': '怪兽大学',
            'value': 1006,
            'date': '2011-01-06T00:00:00Z',
            'color':'#41c4c9'
          },
          {
            'name': '怪兽大学',
            'value': 1000,
            'date': '2011-01-07T00:00:00Z',
            'color':'#41c4c9'
          },
          {
            'name': '怪兽大学',
            'value': 500,
            'date': '2011-01-08T00:00:00Z',
            'color':'#41c4c9'
          },
          {
            'name': '父子雄兵',
            'value': 1000,
            'date': '2011-01-05T00:00:00Z',
            'color':'#fed009'
          },
          {
            'name': '父子雄兵',
            'value': 2000,
            'date': '2011-01-06T00:00:00Z',
            'color':'#fed009'
          },
          {
            'name': '父子雄兵',
            'value': 2002,
            'date': '2011-01-07T00:00:00Z',
            'color':'#fed009'
          },
          {
            'name': '父子雄兵',
            'value': 700,
            'date': '2011-01-08T00:00:00Z',
            'color':'#fed009'
          },
          {
            'name': '绝世高手',
            'value': 0,
            'date': '2011-01-05T00:00:00Z',
            'color':'#fda71e'
          },
          {
            'name': '绝世高手',
            'value': 1000,
            'date': '2011-01-06T00:00:00Z',
            'color':'#fda71e'
          },
          {
            'name': '绝世高手',
            'value': 1006,
            'date': '2011-01-07T00:00:00Z',
            'color':'#fda71e'
          },
          {
            'name': '绝世高手',
            'value': 300,
            'date': '2011-01-08T00:00:00Z',
            'color':'#fda71e'
          },
          {
            'name': '奇门遁甲',
            'value': 1008,
            'date': '2011-01-05T00:00:00Z',
            'color':'#f65bb9'
          },
          {
            'name': '奇门遁甲',
            'value': 1002,
            'date': '2011-01-06T00:00:00Z',
            'color':'#f65bb9'
          },
          {
            'name': '奇门遁甲',
            'value': 500,
            'date': '2011-01-07T00:00:00Z',
            'color':'#f65bb9'
          },
          {
            'name': '奇门遁甲',
            'value': 300,
            'date': '2011-01-08T00:00:00Z',
            'color':'#f65bb9'
          },
          {
            'name': '寻梦环游记',
            'value': 400,
            'date': '2011-01-05T00:00:00Z',
            'color':'#9887e3'
          },
          {
            'name': '寻梦环游记',
            'value': 900,
            'date': '2011-01-06T00:00:00Z',
            'color':'#9887e3'
          },
          {
            'name': '寻梦环游记',
            'value': 600,
            'date': '2011-01-07T00:00:00Z',
            'color':'#9887e3'
          },
          {
            'name': '寻梦环游记',
            'value': 300,
            'date': '2011-01-08T00:00:00Z',
            'color':'#9887e3'
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

        ]
      }
    }
  },
  methods: {
    tagsChange (index) {
      this.list[index].checked = !this.list[index].checked
      let data = this.tempAreaData
      data = JSON.parse(JSON.stringify(data))

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
        for (let i = 0; i < this.areaChartData4.data.length; i++) {
          if (this.list[index].text === this.areaChartData4.data[i].name) {
            this.count++
            this.tempAreaData.push(this.areaChartData4.data[i])
          }
        }
      }
    }
  },
  mounted () {
    this.tempAreaData = this.areaChartData4.data
    this.count = this.tempAreaData.length
  }
}
