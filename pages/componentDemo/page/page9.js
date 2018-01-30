// page9.js
export default {
  data () {
    return {
      headerTop: ui.DEFAULT_HEADER_HEIGHT + 'px',
      items: [],
      bottom: 30,
      tempName: '新媒体运营',
      tagName: '新媒体运营',
      list00: [{
        text: '新媒体运营',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: true
      }, {
        text: '文案写作',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '营销策划',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '品牌公关',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '市场推广',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '用户运营',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '团队管理',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '全程课程',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      pullDown: {
        distance: 60,
        onBegin: this.handleBegin,
        onActive: this.handleActive,
        onAfter: this.handleAfter
      }
    }
  },
  methods: {
    singleTap (opt) {
      this.tempName = this.list00[opt].text
      this.list00.forEach((item, index) => {
        item.checked = (index === opt)
      })
      ui.triggerPagePullDown()
    },
    handleAfter (flag) {
      if (flag) {
        this.tagName = this.tempName
      }
      this.tagName = this.tempName
    },

    handleLoadMore () {
      window.setTimeout(() => {
        for (let i = this.bottom + 1; i <= this.bottom + 10; i++) {
          this.items.push(`列表项目${i}`)
        }
        this.bottom += 10
      }, 1500)
    },
    handleActive () {
      // 将返回的请求接管，实现让请求结果来控制下拉刷新的状态
      return ui.request({
        // promise设置为true，让请求返回promise，这样就可以接管请求
        // 请求结束后页面自动回弹
        promise: true,
        url: '/touchui-backstage/listInfo.do?state=1',
        success: (response) => {
        },
        fail: (err) => {
        }
      })
    }
    // 下拉结束后，执行的函数。因为只要下拉即时没有到达刷新的高度也会触发这个方法
    // flag 为1表示执行了handleActive。为undefined代表handleActive没有执行。

  },
  mounted () {
    for (let i = 1; i <= this.bottom; i++) {
      this.items.push(`列表项目${i}`)
    }
  }
}
