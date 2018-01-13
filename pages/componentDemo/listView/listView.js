export default {
  data () {
    return {
      WINWIDTH: ui.WIN_WIDTH,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      searchWidth: '',
      status: null,
      isflag: true,
      config: {
        url: '/touchui-backstage/listStore.do',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 10
        },
        pageNo: {
          key: 'pageNo',
          value: 1
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
    handleReload () {
      this.config.reload = true
    },
    handleChange (index) {
      this.index = index
    },
    handleActive () {
      this.config.refresh = true
    },
    handleTap (item) {
      ui.showToast({ title: item.titlename })
    }
  },
  mounted () {
    this.searchWidth = window.innerWidth - 110
  }
}
