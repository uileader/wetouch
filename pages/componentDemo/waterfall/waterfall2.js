// waterfall2.js
export default {
  data () {
    return {
      align: 'center',
      winWidth: ui.WIN_WIDTH,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      sizeObj: [],
      status: null,
      isflag: true,
      config: {
        url: '/touchui-backstage/listGoods.do',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 20
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data.listGoods',
        reload: false,
        refresh: false
      }
    }
  },
  methods: {
    getWidth (e) {
      this.sizeObj.width = e
      return e
    },
    getHeight (e) {
      this.sizeObj.height = e
      let colWidth = this.winWidth / 2
      let height
      height = colWidth * (this.sizeObj.height / this.sizeObj.width) + 50
      return height
    },
    handleListViewChange (status) {
      this.status = status
      if (this.status === 1) {
        this.isflag = false
      }
    },
    handleReload () {
      this.config.reload = true
    }
  },
  mounted () {
  }
}
