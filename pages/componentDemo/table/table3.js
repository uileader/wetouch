// table3.js
export default {
  data () {
    return {
      offsetTop: ui.DEFAULT_HEADER_HEIGHT,
      startRefresh: false,
      thisHeader: [{
        name: 'id',
        display: '编号',
        sort: true,
        width: '64',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'name',
        display: '名字',
        sort: true,
        width: '70',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'age',
        display: '年龄',
        sort: true,
        width: '64',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'place',
        display: '地区',
        sort: true,
        width: '100%',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'sex',
        display: '性别',
        sort: true,
        width: '65',
        align: 'center',
        headerAlign: 'center'
      }],
      thisData: {},
      pullDown: {
        distance: 60,
        onBegin: () => {},
        onActive: this.handleActive,
        onAfter: () => {}
      }
    }
  },
  methods: {
    showname (obj) {
      ui.showToast({ title: obj.rowData.name })
    },
    handleActive () {
      this.startRefresh = true
    }

  }
}
