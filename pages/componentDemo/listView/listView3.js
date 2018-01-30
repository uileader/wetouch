export default {
  data () {
    return {
      WINWIDTH: ui.WIN_WIDTH,
      searchWidth: '',
      status: null,
      isflag: true,
      config: {
        url: '/touchui-backstage/listNews.do',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 5
        },
        pageNo: {
          key: 'pageNo',
          value: 2
        },
        param: {
          suffix: ''
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      },
      pullDown: {
        distance: 84,
        onBegin: () => {},
        onActive: this.handleActive,
        onAfter: () => {}
      }
    }
  },
  methods: {
    handleNavLeft () {
      ui.navigateBack()
    },
    handleNavRight () {
      ui.showToast({
        title: 'NavBar右侧点击事件'
      })
    },
    handleListViewChange (status) {
      this.status = status
      if (this.status === 1) {
        this.isflag = false
      }
    },
    handleActive () {
      this.config.refresh = true
    },
    handleReload () {
      this.config.reload = true
    }
  },
  mounted () {
    this.searchWidth = window.innerWidth - 110
  }
}
