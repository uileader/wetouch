// waterfall2.js
export default {
  data () {
    return {
      align: 'center',
      winWidth: ui.WIN_WIDTH,
      sizeObj: [],
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
    handleReload () {
      this.config.reload = true
    }
  },
  mounted () {
  }
}
