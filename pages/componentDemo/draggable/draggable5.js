// draggable5.js
export default {
  data () {
    return {
      windowWidth: ui.WIN_WIDTH,
      list: [{
        imgname: 'gongxiangdanche',
        name: '共享单车',
        id: 'id1',
        color: '#ec9a27'
      }, {
        imgname: 'didichuhang',
        name: '滴滴出行',
        id: 'id2',
        color: '#ec9a27'
      }, {
        imgname: 'shoujichongzhi',
        name: '手机充值',
        id: 'id3',
        color: '#318fdb'
      }, {
        imgname: 'huochepiaoicon01',
        name: '机票火车票',
        id: 'id4',
        color: '#318fdb'
      }, {
        imgname: 'jizhang',
        name: '记账本',
        id: 'id5',
        color: '#ec9a27'
      }, {
        imgname: 'shenghuojiaofei',
        name: '水电费缴费',
        id: 'id6',
        color: '#318fdb'
      }],
      pageLoad: {
        trigger: 'always',
        handle: () => {
          console.log('111')
          this.init()
        }
      }
    }
  },
  methods: {
    navigateTo () {
      ui.navigateTo({
        url: 'draggable2'
      })
    },
    init () {
      let value = ui.getStorageSync('draggabledata')
      if (value !== null) {
        this.list = JSON.parse(value)
      } else {
        return false
      }
      console.log(value)
    }
  },
  mounted () {
    console.log('222')
  }
}
