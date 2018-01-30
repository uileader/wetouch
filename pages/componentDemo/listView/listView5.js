export default {
  data () {
    return {
      items: [],
      bottom: 30,
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 628),
      scrollDirection: null,
      startX: '',
      startY: '',
      scrollTop: null,
      height: ui.WIN_HEIGHT,
      STATUS_BAR_HEIGHT: ui.STATUS_BAR_HEIGHT,
      navList: [
        {
          name: '全部',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup1'
        }, {
          name: '附近',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup2'
        }, {
          name: '智能排序',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup3'
        }, {
          name: '筛选',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup4'
        }
      ],
      config: {
        url: '/touchui-backstage/listNews.do?suffix=',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 5
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      }
    }
  },
  methods: {
    handleLoadMore () {
      window.setTimeout(() => {
        for (let i = this.bottom + 1; i <= this.bottom + 10; i++) {
          this.items.push(`列表项目${i}`)
        }
        this.bottom += 10
      }, 1500)
    },
    navigateBack () {
      ui.navigateBack()
    },
    touchstart (e) {
      this.startX = e.changedTouches[0].clientX
      this.startY = e.changedTouches[0].clientY
    },
    touchmove (e) {
      var moveX = e.changedTouches[0].clientX
      var moveY = e.changedTouches[0].clientY
      var disX = moveX - this.startX
      var disY = moveY - this.startY
      // 判断scrollview内容向下滚动
      if (Math.abs(disX) < Math.abs(disY) && disY < 0) {
        this.scrollDirection = '0'
      } else if (Math.abs(disX) < Math.abs(disY) && disY > 0) {    // 判断scrollview内容向上滚动
        this.scrollDirection = '1'
      }
    },

    touchend (e) {
      // scrollview内容向下滚动时，把图片隐藏
      if (this.scrollDirection === '0') {
        ui.pageScrollTo(46, 200)
      } else if (this.scrollDirection === '1') {
        ui.pageScrollTo(0, 200)
      }
    }
  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
