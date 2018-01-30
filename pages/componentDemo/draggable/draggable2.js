export default {
  data () {
    return {
      windowWidth: ui.WIN_WIDTH,
      openflag: true,
      draggableheight: 0,
      draggableDisplay: false,
      draggablewarp2color: '#fff',
      btnboxflag: false,
      draggableaddflag: false,
      newlist: null,
      newlist2: null,
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
      },
      {
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
      list2: [{
        imgname: 'taopiaopiao',
        name: '淘票票',
        id: 'id7',
        color: '#f15a4a'
      }, {
        imgname: 'yinxingqiaguanli',
        name: '银行卡管理',
        id: 'id8',
        color: '#ec9a27'
      }, {
        imgname: 'yuebao',
        name: '余额宝',
        id: 'id9',
        color: '#ec9a27'
      }, {
        imgname: 'zhimaxinyong',
        name: '芝麻信用',
        id: 'id10',
        color: '#29ab91'
      }, {
        imgname: 'zhuanzhang',
        name: '转账',
        id: 'id11',
        color: '#ec9a27'
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
    init () {
      let value = ui.getStorageSync('draggabledata')
      let value2 = ui.getStorageSync('draggabledata2')

      if (value !== null) {
        this.list = JSON.parse(value)
      } else {
        return false
      }

      if (value2 !== null) {
        this.list2 = JSON.parse(value2)
      } else {
        return false
      }
    },
    that () {
      var a = this.list.splice(0, 1)
      this.list.push(a.join(''))
    },
    dragged (e) {
    },
    deleteit (index) {
      let item = this.list.splice(index, 1)
      this.list2.push(item[0])
    },
    addit (index) {
      let tempCount
      tempCount = this.list.length + 1
      if (tempCount > 8) {
        ui.showToast({ title: '最多只能选择8个应用' })
        return false
      } else {
        let item = this.list2.splice(index, 1)
        this.list.push(item[0])
      }
    },
    draggableopen () {
      this.newlist2 = this.list2
      this.newlist2 = JSON.stringify(this.newlist2)
      this.newlist = this.list
      this.newlist = JSON.stringify(this.newlist)
      this.draggablewarp2color = '#F0F0F0'
      this.btnboxflag = true
      this.draggableaddflag = true
      this.draggableDisplay = true
      if (this.openflag) {
        this.draggableheight = ((this.list.length / 4) > 1 ? parseInt(this.list.length / 4) + 1 : 1) * 85
        this.openflag = false
      }
    },
    draggabletoggle (state) {
      this.draggablewarp2color = '#fff'
      this.btnboxflag = false
      this.draggableaddflag = false
      if (state === 'cancel') {
        this.newlist2 = JSON.parse(this.newlist2)
        this.list2 = this.newlist2
        this.newlist = JSON.parse(this.newlist)
        this.list = this.newlist
        this.draggableheight = 0
        this.openflag = true
        this.draggableDisplay = false
      }
      if (!this.openflag) {
        this.draggableheight = 0
        this.draggableDisplay = false
        this.openflag = true

        ui.setStorageSync('draggabledata', JSON.stringify(this.list))
        ui.setStorageSync('draggabledata2', JSON.stringify(this.list2))
      }
    },
    navigateBack () {
      ui.navigateBack()
    }

  },
  mounted () {
    console.log('222')
  }
}
