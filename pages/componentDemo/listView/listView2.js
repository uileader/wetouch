export default {
  data () {
    return {
      imgWidth: parseInt(ui.WIN_WIDTH / 2 - 4),
      imgHeight: parseInt((ui.WIN_WIDTH / 2 - 4) / 360 * 360),
      tagsList: [{
        text: '男士外套',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: true
      }, {
        text: '男士上装',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '男士下装',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      config2: {
        url: '/touchui-backstage/listMallGoods.do',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 10
        },
        param: {
          type: 1,
          suffix: 1,
          sort: 'id',
          direction: 'asc'
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data.datalist',
        reload: false,
        refresh: false
      },
      menswearShow: [
        {
          show: true
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      show: false,
      barHeight: ui.STATUS_BAR_HEIGHT,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      searchValue: '',
      historyContent: [],
      pullDown: {
        distance: 50,
        onBegin: () => { },
        onActive: this.handleActive,
        onAfter: () => { }
      }
    }
  },
  methods: {
    handleActive () {
      this.config2.refresh = true
    },
    singleTap (opt) {
      this.tagsList.forEach((item, index) => {
        item.checked = (index === opt)
      })
      if (opt === 0) {
        this.config2.param.sort = 'id'
      } else if (opt === 1) {
        this.config2.param.sort = 'name'
      } else {
        this.config2.param.sort = 'price'
      }

      this.config2.param.suffix = opt
      this.config2.refresh = true
    },
    handleListViewChange2 (status) {
    },
    showFullScreenSearch () {
      this.show = true
    },
    hideFullScreenSearch () {
      this.show = false
    },
    deleteHistory () {
      this.historyContent = []
    },
    maskHide () {
      ui.setStatusBarStyle({ style: 'light' })
    },
    maskShow () {
      ui.setStatusBarStyle({ style: 'dark' })
    },
    handleTap () {
    },
    formSubmit (e) {
      let value = e.search
      if (value !== '') {
        this.historyContent.unshift(value)
        this.hideFullScreenSearch()
        ui.showToast({ title: value })
      }
      this.searchValue = ''
    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {

  }
}
