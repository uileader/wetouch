// donut.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      newLineData: {},
      newLineData2: {},
      tempLine2: {
        dataByTopic: []
      },
      count: 5,
      firstFlag: true,
      data: {
        dataByTopic: [
          {
            topicName: '猩球崛起3:终极之战',
            topic: 123,
            dates: [
              {
                date: '2017-01-16',
                value: 2234
              },
              {
                date: '2017-01-17',
                value: 1342
              },
              {
                date: '2017-01-18',
                value: 2345
              },
              {
                date: '2017-01-19',
                value: 3225
              },
              {
                date: '2017-01-20',
                value: 2435
              },
              {
                date: '2017-01-21',
                value: 2977
              },
              {
                date: '2017-01-22',
                value: 4532
              },
              {
                date: '2017-01-23',
                value: 5323
              },
              {
                date: '2017-01-24',
                value: 3564
              },
              {
                date: '2017-01-25',
                value: 6532
              }
            ]
          }
        ],
        colorSchema: ['#e60012']
      },
      data2: {
        dataByTopic: [
          {
            topicName: '猩球崛起3:终极之战',
            topic: 123,
            dates: [
              {
                date: '2017-01-16',
                value: 2234
              },
              {
                date: '2017-01-17',
                value: 1342
              },
              {
                date: '2017-01-18',
                value: 2345
              },
              {
                date: '2017-01-19',
                value: 3225
              },
              {
                date: '2017-01-20',
                value: 2435
              },
              {
                date: '2017-01-21',
                value: 2977
              },
              {
                date: '2017-01-22',
                value: 4532
              },
              {
                date: '2017-01-23',
                value: 5323
              },
              {
                date: '2017-01-24',
                value: 3564
              },
              {
                date: '2017-01-25',
                value: 6532
              }
            ]
          }, {
            topicName: '长城',
            topic: 345,
            dates: [
              {
                date: '2017-01-16',
                value: 4832
              },
              {
                date: '2017-01-17',
                value: 6453
              },
              {
                date: '2017-01-18',
                value: 5342
              },
              {
                date: '2017-01-19',
                value: 7565
              },
              {
                date: '2017-01-20',
                value: 6767
              },
              {
                date: '2017-01-21',
                value: 7867
              },
              {
                date: '2017-01-22',
                value: 8675
              },
              {
                date: '2017-01-23',
                value: 7434
              },
              {
                date: '2017-01-24',
                value: 8973
              },
              {
                date: '2017-01-25',
                value: 9874
              }
            ]
          }
        ],
        colorSchema: ['#e60012', '#39f']
      },
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 3243,
            name: '猩球崛起3:终极之战'
          },
          {
            id: 2,
            quantity: 3,
            name: '长城'
          }

        ],
        colorSchema: ['#e60012', '#39f']
      },
      legendData1: {
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
          }

        ],
        colorSchema: ['#ef3d36', '#39f', '#2ec7ff', '#23d8dc', '#36cd6a']
      },
      lineData1: {
        data: {
          dataByTopic: [
            {
              topicName: '帕丁顿熊2',
              topic: 1,
              dates: [
                {
                  date: '2017-01-01',
                  value: 0
                }, {
                  date: '2017-01-02',
                  value: 2
                }, {
                  date: '2017-01-03',
                  value: 1.6
                }, {
                  date: '2017-01-04',
                  value: 1.6
                }, {
                  date: '2017-01-05',
                  value: 0.3006
                }, {
                  date: '2017-01-06',
                  value: 0
                }, {
                  date: '2017-01-07',
                  value: 14.6
                }, {
                  date: '2017-01-08',
                  value: 2622.5
                }, {
                  date: '2017-01-09',
                  value: 4331.4
                }, {
                  date: '2017-01-10',
                  value: 3475.7
                }, {
                  date: '2017-01-11',
                  value: 999.5
                }, {
                  date: '2017-01-12',
                  value: 976.7
                }, {
                  date: '2017-01-13',
                  value: 878.1
                }, {
                  date: '2017-01-14',
                  value: 641.8
                }, {
                  date: '2017-01-15',
                  value: 447.8
                }, {
                  date: '2017-01-16',
                  value: 0
                }, {
                  date: '2017-01-17',
                  value: 0
                }, {
                  date: '2017-01-18',
                  value: 0
                }, {
                  date: '2017-01-19',
                  value: 16
                }, {
                  date: '2017-01-20',
                  value: 0
                }, {
                  date: '2017-01-21',
                  value: 0
                }, {
                  date: '2017-01-22',
                  value: 0
                }, {
                  date: '2017-01-23',
                  value: 0
                }, {
                  date: '2017-01-24',
                  value: 0
                }, {
                  date: '2017-01-25',
                  value: 16
                }, {
                  date: '2017-01-26',
                  value: 0
                }, {
                  date: '2017-01-27',
                  value: 0
                }, {
                  date: '2017-01-28',
                  value: 0
                }, {
                  date: '2017-01-29',
                  value: 0
                }, {
                  date: '2017-01-30',
                  value: 0
                }, {
                  date: '2017-01-31',
                  value: 0
                }
              ]
            },
            {
              topicName: '怪兽大学',
              topic: 2,
              dates: [
                {
                  date: '2017-01-01',
                  value: 0
                }, {
                  date: '2017-01-02',
                  value: 0
                }, {
                  date: '2017-01-03',
                  value: 0
                }, {
                  date: '2017-01-04',
                  value: 0
                }, {
                  date: '2017-01-05',
                  value: 0
                }, {
                  date: '2017-01-06',
                  value: 0
                }, {
                  date: '2017-01-07',
                  value: 25.5
                }, {
                  date: '2017-01-08',
                  value: 2284.1
                }, {
                  date: '2017-01-09',
                  value: 3135.9
                }, {
                  date: '2017-01-10',
                  value: 2748.4
                }, {
                  date: '2017-01-11',
                  value: 1418.5
                }, {
                  date: '2017-01-12',
                  value: 1557.5
                }, {
                  date: '2017-01-13',
                  value: 1293.9
                }, {
                  date: '2017-01-14',
                  value: 1068.5
                }, {
                  date: '2017-01-15',
                  value: 1085.8
                }, {
                  date: '2017-01-16',
                  value: 1837
                }, {
                  date: '2017-01-17',
                  value: 1304
                }, {
                  date: '2017-01-18',
                  value: 295.3
                }, {
                  date: '2017-01-19',
                  value: 325.6
                }, {
                  date: '2017-01-20',
                  value: 256.2
                }, {
                  date: '2017-01-21',
                  value: 146.9
                }, {
                  date: '2017-01-22',
                  value: 206.1
                }, {
                  date: '2017-01-23',
                  value: 686.7
                }, {
                  date: '2017-01-24',
                  value: 599.1
                }, {
                  date: '2017-01-25',
                  value: 100.8
                }, {
                  date: '2017-01-26',
                  value: 144.4
                }, {
                  date: '2017-01-27',
                  value: 88.2
                }, {
                  date: '2017-01-28',
                  value: 40.7
                }, {
                  date: '2017-01-29',
                  value: 33.8
                }, {
                  date: '2017-01-30',
                  value: 97.3
                }, {
                  date: '2017-01-31',
                  value: 87.9
                }
              ]
            },
            {
              topicName: '父子雄兵',
              topic: 3,
              dates: [
                {
                  date: '2017-01-01',
                  value: 0
                }, {
                  date: '2017-01-02',
                  value: 4
                }, {
                  date: '2017-01-03',
                  value: 538.1
                }, {
                  date: '2017-01-04',
                  value: 17.4
                }, {
                  date: '2017-01-05',
                  value: 1.8
                }, {
                  date: '2017-01-06',
                  value: 1.2
                }, {
                  date: '2017-01-07',
                  value: 12.2
                }, {
                  date: '2017-01-08',
                  value: 22645.3
                }, {
                  date: '2017-01-09',
                  value: 2708.6
                }, {
                  date: '2017-01-10',
                  value: 2436.4
                }, {
                  date: '2017-01-11',
                  value: 1196.5
                }, {
                  date: '2017-01-12',
                  value: 1053
                }, {
                  date: '2017-01-13',
                  value: 935.3
                }, {
                  date: '2017-01-14',
                  value: 359.7
                }, {
                  date: '2017-01-15',
                  value: 94.4
                }, {
                  date: '2017-01-16',
                  value: 104.3
                }, {
                  date: '2017-01-17',
                  value: 90.1
                }, {
                  date: '2017-01-18',
                  value: 58.1
                }, {
                  date: '2017-01-19',
                  value: 44.9
                }, {
                  date: '2017-01-20',
                  value: 41.5
                }, {
                  date: '2017-01-21',
                  value: 11.5
                }, {
                  date: '2017-01-22',
                  value: 3.5
                }, {
                  date: '2017-01-23',
                  value: 6.3
                }, {
                  date: '2017-01-24',
                  value: 6.8
                }, {
                  date: '2017-01-25',
                  value: 6.5
                }, {
                  date: '2017-01-26',
                  value: 6.1
                }, {
                  date: '2017-01-27',
                  value: 5.6
                }, {
                  date: '2017-01-28',
                  value: 5.2
                }, {
                  date: '2017-01-29',
                  value: 2281
                }, {
                  date: '2017-01-30',
                  value: 3157
                }, {
                  date: '2017-01-31',
                  value: 2608
                }
              ]
            },
            {
              topicName: '绝世高手',
              topic: 5,
              dates: [
                {
                  date: '2017-01-01',
                  value: 1
                }, {
                  date: '2017-01-02',
                  value: 520
                }, {
                  date: '2017-01-03',
                  value: 8.4
                }, {
                  date: '2017-01-04',
                  value: 1.1
                }, {
                  date: '2017-01-05',
                  value: 526.1
                }, {
                  date: '2017-01-06',
                  value: 3.9
                }, {
                  date: '2017-01-07',
                  value: 12.9
                }, {
                  date: '2017-01-08',
                  value: 2335.3
                }, {
                  date: '2017-01-09',
                  value: 2075.2
                }, {
                  date: '2017-01-10',
                  value: 1743.9
                }, {
                  date: '2017-01-11',
                  value: 837
                }, {
                  date: '2017-01-12',
                  value: 749.6
                }, {
                  date: '2017-01-13',
                  value: 565.6
                }, {
                  date: '2017-01-14',
                  value: 105.1
                }, {
                  date: '2017-01-15',
                  value: 67.5
                }, {
                  date: '2017-01-16',
                  value: 91.6
                }, {
                  date: '2017-01-17',
                  value: 84
                }, {
                  date: '2017-01-18',
                  value: 47.7
                }, {
                  date: '2017-01-19',
                  value: 28.1
                }, {
                  date: '2017-01-20',
                  value: 10
                }, {
                  date: '2017-01-21',
                  value: 11.2
                }, {
                  date: '2017-01-22',
                  value: 14.6
                }, {
                  date: '2017-01-23',
                  value: 40.6
                }, {
                  date: '2017-01-24',
                  value: 46.4
                }, {
                  date: '2017-01-25',
                  value: 28.6
                }, {
                  date: '2017-01-26',
                  value: 35.6
                }, {
                  date: '2017-01-27',
                  value: 32.9
                }, {
                  date: '2017-01-28',
                  value: 23.5
                }, {
                  date: '2017-01-29',
                  value: 16.6
                }, {
                  date: '2017-01-30',
                  value: 24.6
                }, {
                  date: '2017-01-31',
                  value: 16.6
                }
              ]
            },
            {
              topicName: '奇门遁甲',
              topic: 6,
              dates: [
                {
                  date: '2017-01-01',
                  value: 0
                }, {
                  date: '2017-01-02',
                  value: 20
                }, {
                  date: '2017-01-03',
                  value: 8.4
                }, {
                  date: '2017-01-04',
                  value: 1300
                }, {
                  date: '2017-01-05',
                  value: 27.7
                }, {
                  date: '2017-01-06',
                  value: 25.7
                }, {
                  date: '2017-01-07',
                  value: 9.3
                }, {
                  date: '2017-01-08',
                  value: 6.3
                }, {
                  date: '2017-01-09',
                  value: 2664.3
                }, {
                  date: '2017-01-10',
                  value: 6715.5
                }, {
                  date: '2017-01-11',
                  value: 0
                }, {
                  date: '2017-01-12',
                  value: 0
                }, {
                  date: '2017-01-13',
                  value: 0
                }, {
                  date: '2017-01-14',
                  value: 0
                }, {
                  date: '2017-01-15',
                  value: 0
                }, {
                  date: '2017-01-16',
                  value: 0
                }, {
                  date: '2017-01-17',
                  value: 0
                }, {
                  date: '2017-01-18',
                  value: 0
                }, {
                  date: '2017-01-19',
                  value: 0
                }, {
                  date: '2017-01-20',
                  value: 0
                }, {
                  date: '2017-01-21',
                  value: 0
                }, {
                  date: '2017-01-22',
                  value: 0
                }, {
                  date: '2017-01-23',
                  value: 0
                }, {
                  date: '2017-01-24',
                  value: 0
                }, {
                  date: '2017-01-25',
                  value: 0
                }, {
                  date: '2017-01-26',
                  value: 0
                }, {
                  date: '2017-01-27',
                  value: 0
                }, {
                  date: '2017-01-28',
                  value: 0
                }, {
                  date: '2017-01-29',
                  value: 0
                }, {
                  date: '2017-01-30',
                  value: 0
                }, {
                  date: '2017-01-31',
                  value: 0
                }
              ]
            }
          ],
          dataByDate: [
            {
              date: '2017-01-01',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 0,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 0,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 1,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-02',
              topics: [
                {
                  name: 1,
                  value: 2,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 0,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 4,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 520,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 20,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-03',
              topics: [
                {
                  name: 1,
                  value: 1.6,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 0,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 17.4,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 1.1,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 27.7,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-04',
              topics: [
                {
                  name: 1,
                  value: 3006,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 0,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 1.8,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 526.1,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 25.7,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-05',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 0,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 1.2,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 3.9,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 9.3,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-06',
              topics: [
                {
                  name: 1,
                  value: 14.5,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 24.5,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 12.2,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 12.9,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 6.3,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-07',
              topics: [
                {
                  name: 1,
                  value: 2622.5,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 2284.1,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 2645.3,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 2335.3,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 2664.3,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-07',
              topics: [
                {
                  name: 1,
                  value: 4331.4,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 3135.9,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 2708.6,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 2075.2,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 6715.5,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-07',
              topics: [
                {
                  name: 1,
                  value: 3475.7,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 2784.4,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 2436.4,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 1743.9,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-08',
              topics: [
                {
                  name: 1,
                  value: 999.5,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1418.5,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 1196.6,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 837,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-09',
              topics: [
                {
                  name: 1,
                  value: 976.5,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1557.5,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 1053,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 749.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-10',
              topics: [
                {
                  name: 1,
                  value: 976.7,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1557.5,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 1053,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 749.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-11',
              topics: [
                {
                  name: 1,
                  value: 878.1,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1293.9,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 935.3,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 565.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-12',
              topics: [
                {
                  name: 1,
                  value: 641.8,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1068.5,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 359.7,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 105.1,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-13',
              topics: [
                {
                  name: 1,
                  value: 447.8,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1085.8,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 96.4,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 67.5,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-14',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1837,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 104.3,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 91.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-15',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 1304,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 90.1,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 84,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-16',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 295.3,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 58.1,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 47.7,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-17',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 325.6,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 44.9,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 28.1,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-18',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 255.2,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 41.5,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 10,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-19',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 146.9,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 11.5,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 11.2,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-20',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 206.1,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 3.5,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 14.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-21',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 686.7,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 6.3,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 40.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-22',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 599.1,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 6.8,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 46.4,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-23',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 100.8,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 6.5,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 28.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-23',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 144.4,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 6.1,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 35.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-24',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 88.2,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 5.6,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 32.9,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-25',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 40.7,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 5.2,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 23.5,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-26',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 33.8,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 2281,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 16.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-27',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 97.3,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 3157,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 24.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-28',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 87.9,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 2608,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 16.6,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-29',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 15.1,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 1.1,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 4.8,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-30',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 11,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 3.2,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 5504,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }, {
              date: '2017-01-31',
              topics: [
                {
                  name: 1,
                  value: 0,
                  topicName: '帕丁顿熊2'
                }, {
                  name: 2,
                  value: 8,
                  topicName: '怪兽大学'
                }, {
                  name: 3,
                  value: 3.5,
                  topicName: '父子雄兵'
                }, {
                  name: 4,
                  value: 2741,
                  topicName: '绝世高手'
                }, {
                  name: 5,
                  value: 0,
                  topicName: '奇门遁甲'
                }
              ]
            }
          ],
          colorSchema: ['#ef3d36', '#39f', '#2ec7ff', '#23d8dc', '#36cd6a']
        }
      },
      list4: [{
        text: '帕丁顿熊2',
        topic: 1,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#ef3d36',
        checked: true
      }, {
        text: '怪兽大学',
        topic: 2,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#39f',
        checked: true
      }, {
        text: '父子雄兵',
        topic: 3,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#2ec7ff',
        checked: true
      }, {
        text: '绝世高手',
        topic: 4,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#23d8dc',
        checked: true
      }, {
        text: '奇门遁甲',
        topic: 5,
        tagClass: 'tag-after-5',
        tagSelectedClass: 'tag-before-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#36cd6a',
        checked: true
      }],
      lineData2: {
        data: {
          dataByTopic: null
        }
      },
      dataByTopic: [
        {
          topicName: '帕丁顿熊2',
          topic: 0,
          color: '#ef3d36',
          dates: [
            {
              date: '2017-01-01',
              value: 0
            }, {
              date: '2017-01-02',
              value: 2
            }, {
              date: '2017-01-03',
              value: 1.6
            }, {
              date: '2017-01-04',
              value: 1.6
            }, {
              date: '2017-01-05',
              value: 0.3006
            }, {
              date: '2017-01-06',
              value: 0
            }, {
              date: '2017-01-07',
              value: 14.6
            }, {
              date: '2017-01-08',
              value: 2622.5
            }, {
              date: '2017-01-09',
              value: 4331.4
            }, {
              date: '2017-01-10',
              value: 3475.7
            }, {
              date: '2017-01-11',
              value: 999.5
            }, {
              date: '2017-01-12',
              value: 976.7
            }, {
              date: '2017-01-13',
              value: 878.1
            }, {
              date: '2017-01-14',
              value: 641.8
            }, {
              date: '2017-01-15',
              value: 447.8
            }, {
              date: '2017-01-16',
              value: 0
            }, {
              date: '2017-01-17',
              value: 0
            }, {
              date: '2017-01-18',
              value: 0
            }, {
              date: '2017-01-19',
              value: 16
            }, {
              date: '2017-01-20',
              value: 0
            }, {
              date: '2017-01-21',
              value: 0
            }, {
              date: '2017-01-22',
              value: 0
            }, {
              date: '2017-01-23',
              value: 0
            }, {
              date: '2017-01-24',
              value: 0
            }, {
              date: '2017-01-25',
              value: 16
            }, {
              date: '2017-01-26',
              value: 0
            }, {
              date: '2017-01-27',
              value: 0
            }, {
              date: '2017-01-28',
              value: 0
            }, {
              date: '2017-01-29',
              value: 0
            }, {
              date: '2017-01-30',
              value: 0
            }, {
              date: '2017-01-31',
              value: 0
            }
          ]
        },
        {
          topicName: '怪兽大学',
          topic: 1,
          color: '#39f',
          dates: [
            {
              date: '2017-01-01',
              value: 0
            }, {
              date: '2017-01-02',
              value: 0
            }, {
              date: '2017-01-03',
              value: 0
            }, {
              date: '2017-01-04',
              value: 0
            }, {
              date: '2017-01-05',
              value: 0
            }, {
              date: '2017-01-06',
              value: 0
            }, {
              date: '2017-01-07',
              value: 25.5
            }, {
              date: '2017-01-08',
              value: 2284.1
            }, {
              date: '2017-01-09',
              value: 3135.9
            }, {
              date: '2017-01-10',
              value: 2748.4
            }, {
              date: '2017-01-11',
              value: 1418.5
            }, {
              date: '2017-01-12',
              value: 1557.5
            }, {
              date: '2017-01-13',
              value: 1293.9
            }, {
              date: '2017-01-14',
              value: 1068.5
            }, {
              date: '2017-01-15',
              value: 1085.8
            }, {
              date: '2017-01-16',
              value: 1837
            }, {
              date: '2017-01-17',
              value: 1304
            }, {
              date: '2017-01-18',
              value: 295.3
            }, {
              date: '2017-01-19',
              value: 325.6
            }, {
              date: '2017-01-20',
              value: 256.2
            }, {
              date: '2017-01-21',
              value: 146.9
            }, {
              date: '2017-01-22',
              value: 206.1
            }, {
              date: '2017-01-23',
              value: 686.7
            }, {
              date: '2017-01-24',
              value: 599.1
            }, {
              date: '2017-01-25',
              value: 100.8
            }, {
              date: '2017-01-26',
              value: 144.4
            }, {
              date: '2017-01-27',
              value: 88.2
            }, {
              date: '2017-01-28',
              value: 40.7
            }, {
              date: '2017-01-29',
              value: 33.8
            }, {
              date: '2017-01-30',
              value: 97.3
            }, {
              date: '2017-01-31',
              value: 87.9
            }
          ]
        },
        {
          topicName: '父子雄兵',
          topic: 2,
          color: '#2ec7ff',
          dates: [
            {
              date: '2017-01-01',
              value: 0
            }, {
              date: '2017-01-02',
              value: 4
            }, {
              date: '2017-01-03',
              value: 538.1
            }, {
              date: '2017-01-04',
              value: 17.4
            }, {
              date: '2017-01-05',
              value: 1.8
            }, {
              date: '2017-01-06',
              value: 1.2
            }, {
              date: '2017-01-07',
              value: 12.2
            }, {
              date: '2017-01-08',
              value: 22645.3
            }, {
              date: '2017-01-09',
              value: 2708.6
            }, {
              date: '2017-01-10',
              value: 2436.4
            }, {
              date: '2017-01-11',
              value: 1196.5
            }, {
              date: '2017-01-12',
              value: 1053
            }, {
              date: '2017-01-13',
              value: 935.3
            }, {
              date: '2017-01-14',
              value: 359.7
            }, {
              date: '2017-01-15',
              value: 94.4
            }, {
              date: '2017-01-16',
              value: 104.3
            }, {
              date: '2017-01-17',
              value: 90.1
            }, {
              date: '2017-01-18',
              value: 58.1
            }, {
              date: '2017-01-19',
              value: 44.9
            }, {
              date: '2017-01-20',
              value: 41.5
            }, {
              date: '2017-01-21',
              value: 11.5
            }, {
              date: '2017-01-22',
              value: 3.5
            }, {
              date: '2017-01-23',
              value: 6.3
            }, {
              date: '2017-01-24',
              value: 6.8
            }, {
              date: '2017-01-25',
              value: 6.5
            }, {
              date: '2017-01-26',
              value: 6.1
            }, {
              date: '2017-01-27',
              value: 5.6
            }, {
              date: '2017-01-28',
              value: 5.2
            }, {
              date: '2017-01-29',
              value: 2281
            }, {
              date: '2017-01-30',
              value: 3157
            }, {
              date: '2017-01-31',
              value: 2608
            }
          ]
        },
        {
          topicName: '绝世高手',
          topic: 3,
          color: '#23d8dc',
          dates: [
            {
              date: '2017-01-01',
              value: 1
            }, {
              date: '2017-01-02',
              value: 520
            }, {
              date: '2017-01-03',
              value: 8.4
            }, {
              date: '2017-01-04',
              value: 1.1
            }, {
              date: '2017-01-05',
              value: 526.1
            }, {
              date: '2017-01-06',
              value: 3.9
            }, {
              date: '2017-01-07',
              value: 12.9
            }, {
              date: '2017-01-08',
              value: 2335.3
            }, {
              date: '2017-01-09',
              value: 2075.2
            }, {
              date: '2017-01-10',
              value: 1743.9
            }, {
              date: '2017-01-11',
              value: 837
            }, {
              date: '2017-01-12',
              value: 749.6
            }, {
              date: '2017-01-13',
              value: 565.6
            }, {
              date: '2017-01-14',
              value: 105.1
            }, {
              date: '2017-01-15',
              value: 67.5
            }, {
              date: '2017-01-16',
              value: 91.6
            }, {
              date: '2017-01-17',
              value: 84
            }, {
              date: '2017-01-18',
              value: 47.7
            }, {
              date: '2017-01-19',
              value: 28.1
            }, {
              date: '2017-01-20',
              value: 10
            }, {
              date: '2017-01-21',
              value: 11.2
            }, {
              date: '2017-01-22',
              value: 14.6
            }, {
              date: '2017-01-23',
              value: 40.6
            }, {
              date: '2017-01-24',
              value: 46.4
            }, {
              date: '2017-01-25',
              value: 28.6
            }, {
              date: '2017-01-26',
              value: 35.6
            }, {
              date: '2017-01-27',
              value: 32.9
            }, {
              date: '2017-01-28',
              value: 23.5
            }, {
              date: '2017-01-29',
              value: 16.6
            }, {
              date: '2017-01-30',
              value: 24.6
            }, {
              date: '2017-01-31',
              value: 16.6
            }
          ]
        },
        {
          topicName: '奇门遁甲',
          topic: 4,
          color: '#36cd6a',
          dates: [
            {
              date: '2017-01-01',
              value: 0
            }, {
              date: '2017-01-02',
              value: 20
            }, {
              date: '2017-01-03',
              value: 8.4
            }, {
              date: '2017-01-04',
              value: 1300
            }, {
              date: '2017-01-05',
              value: 27.7
            }, {
              date: '2017-01-06',
              value: 25.7
            }, {
              date: '2017-01-07',
              value: 9.3
            }, {
              date: '2017-01-08',
              value: 6.3
            }, {
              date: '2017-01-09',
              value: 2664.3
            }, {
              date: '2017-01-10',
              value: 6715.5
            }, {
              date: '2017-01-11',
              value: 0
            }, {
              date: '2017-01-12',
              value: 0
            }, {
              date: '2017-01-13',
              value: 0
            }, {
              date: '2017-01-14',
              value: 0
            }, {
              date: '2017-01-15',
              value: 0
            }, {
              date: '2017-01-16',
              value: 0
            }, {
              date: '2017-01-17',
              value: 0
            }, {
              date: '2017-01-18',
              value: 0
            }, {
              date: '2017-01-19',
              value: 0
            }, {
              date: '2017-01-20',
              value: 0
            }, {
              date: '2017-01-21',
              value: 0
            }, {
              date: '2017-01-22',
              value: 0
            }, {
              date: '2017-01-23',
              value: 0
            }, {
              date: '2017-01-24',
              value: 0
            }, {
              date: '2017-01-25',
              value: 0
            }, {
              date: '2017-01-26',
              value: 0
            }, {
              date: '2017-01-27',
              value: 0
            }, {
              date: '2017-01-28',
              value: 0
            }, {
              date: '2017-01-29',
              value: 0
            }, {
              date: '2017-01-30',
              value: 0
            }, {
              date: '2017-01-31',
              value: 0
            }
          ]
        }
      ],
      colorSchema: null

    }
  },
  methods: {
    multipleTap1 (opt) {
      this.list4[opt].checked = !this.list4[opt].checked
      let data = JSON.parse(JSON.stringify(this.dataByTopic))
      if (!this.list4[opt].checked) {
        this.newLineData2 = JSON.parse(JSON.stringify(this.newLineData2))
        for (let j = 0; j < this.newLineData2.dataByTopic.length; j++) {
          if (this.newLineData2.dataByTopic[j].topic === opt) {
            if (this.count === 1) {
              this.list4[opt].checked = true
              return false
            } else if (this.count > 1) {
              this.count--
              this.newLineData2.dataByTopic.splice(j, 1)
              this.colorSchema.splice(j, 1)
              this.newLineData2 = JSON.parse(JSON.stringify(this.newLineData2))
              this.newLineData2 = this.newLineData2
              this.tempLine2 = this.newLineData2
              return false
            }
          }
        }
      } else if (this.list4[opt].checked) {
        this.count++
        if (this.count >= 1) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].topic === opt) {
              this.tempLine2.dataByTopic.push(data[i])
              this.colorSchema.push(data[i].color)
              this.tempLine2 = JSON.parse(JSON.stringify(this.tempLine2))
              this.newLineData2 = this.tempLine2
            }
          }
          return false
        }
      }
    },
    numberFormat (e) {
      let number = '0'
      return number
    },
    colorSchema1 () {
      let colorarr = ['#ef3d36', '#39f', '#2ec7ff', '#23d8dc', '#36cd6a', '#88dd2c', '#ffef00', '#ffd000']
      return colorarr
    },
    xAxisFormat (e) {
      return '上映前30日'
    },
    xTicks () {
    },
    xAxisCustomFormat () {
      return '上映前30日'
    },
    xAxisLabel () {
      return '上映前30日'
    },
    customclick () {
      // clearHighlight()
    },
    // 过滤line数据成brush数据
    brushDataAdapter (dataLine) {
      return dataLine.dataByDate.map(function (d) {
        d.value = d.topics.reduce(function (acc, topic) {
          return acc + topic.value
        }, 0)
        return d
      })
    },
    custombrushstart (e) {
    },
    custombrushend (e) {
      let start, end
      start = e[0]
      end = e[1]
      this.filterData(start, end)
    },
    // 数据过滤
    filterData (d0, d1) {
      let data = JSON.parse(JSON.stringify(this.lineData1.data))
      data.dataByDate = data.dataByDate.filter(this.isInRange.bind(null, d0, d1))
      data.dataByTopic = data.dataByTopic.map((topic) => {
        topic.dates = topic.dates.filter(this.isInRange.bind(null, d0, d1))
        return topic
      })
      this.newLineData = data
      return this.newLineData
    },
    isInRange (d0, d1, d) {
      return new Date(d.date) >= d0 && new Date(d.date) <= d1
    },
    getDate (_ref) {
      let data = _ref.data
      return data
    }
  },
  mounted () {
    this.lineData2.data.dataByTopic = this.dataByTopic
    this.colorSchema = [this.dataByTopic[0].color, this.dataByTopic[1].color, this.dataByTopic[2].color, this.dataByTopic[3].color, this.dataByTopic[4].color]
  },
  created () {
    this.newLineData = this.lineData1.data
    this.newLineData2 = this.lineData2.data
    // this.count = JSON.parse(JSON.stringify(this.list4)).length + 1
  }
}
