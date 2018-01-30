export default {
  data () {
    return {
      thisHeader1: [{
        name: 'moviename',
        display: '片名'
      }, {
        name: 'percent',
        display: '场次占比'
      }, {
        name: 'bout',
        display: '场次'
      }],
      thisData1: {
        rows: [{
          moviename: '猩球崛起',
          percent: '29.1%',
          bout: '10'
        }, {
          moviename: '王牌保镖',
          percent: '27.1%',
          bout: '5'
        }, {
          moviename: '看不见的客人',
          percent: '13.1%',
          bout: '12'
        }, {
          moviename: '蜘蛛侠：英雄归来',
          percent: '11.1%',
          bout: '8'
        }]
      },
      thisHeader2: [{
        name: 'moviename',
        display: '片名',
        sort: true
      }, {
        name: 'percent',
        display: '场次占比',
        sort: true
      }, {
        name: 'bout',
        display: '场次',
        sort: true
      }],
      thisData2: {
        rows: [{
          moviename: '猩球崛起',
          percent: '29.1%',
          bout: '10'
        }, {
          moviename: '王牌保镖',
          percent: '27.1%',
          bout: '5'
        }, {
          moviename: '看不见的客人',
          percent: '13.1%',
          bout: '12'
        }, {
          moviename: '蜘蛛侠：英雄归来',
          percent: '11.1%',
          bout: '8'
        }]
      },
      thisHeader3: [{
        name: 'moviename',
        display: '片名',
        width: '130'
      }, {
        name: 'percent',
        display: '场次占比'
      }, {
        name: 'bout',
        display: '场次'
      }],
      thisData3: {
        rows: [{
          moviename: '在西库利亚那城，两个男人为一个寡妇发生的流备事件引起了整治风波',
          percent: '29.1%',
          bout: '10'
        }, {
          moviename: '王牌保镖',
          percent: '27.1%',
          bout: '5'
        }, {
          moviename: '看不见的客人',
          percent: '13.1%',
          bout: '12'
        }, {
          moviename: '蜘蛛侠：英雄归来',
          percent: '11.1%',
          bout: '8'
        }]
      }
    }
  },
  methods: {
    showname (obj) {
      ui.showToast({ title: obj.rowData.moviename })
    }
  }
}
