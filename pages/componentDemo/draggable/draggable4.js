export default {
  data: () => ({
    winHeight: ui.WIN_HEIGHT,
    conHeight: ui.DEFAULT_CONTENT_HEIGHT,
    windowWidth: ui.WIN_WIDTH,
    bottomcolnum: null,
    childrenHeight: 80,
    statusHeight: ui.STATUS_BAR_HEIGHT,
    bgcolor: '',
    bgcolor2: '',
    draggableDom: '',
    draggableFailFalg: false,
    list: [{
      imgname: 'weixin',
      name: '微信',
      backgroundColor: '#fff',
      id: 'id1'
    }, {
      imgname: 'tengxunsp',
      name: '腾讯视频',
      backgroundColor: '#fff',
      id: 'id2'
    }, {
      imgname: 'qqmusic',
      name: 'QQ音乐',
      backgroundColor: '#fff',
      id: 'id3'
    }, {
      imgname: 'qq',
      name: 'QQ',
      backgroundColor: '#fff',
      id: 'id4'
    }, {
      imgname: 'baidumap',
      name: '百度地图',
      backgroundColor: '#fff',
      id: 'id5'
    }, {
      imgname: 'appstore',
      name: 'App Store',
      backgroundColor: '#39f',
      id: 'id6'
    }, {
      imgname: 'tianqi',
      name: '天气',
      backgroundColor: '#39f',
      id: 'id7'
    }],
    list2: [{
      imgname: 'zhifubao',
      name: '支付宝',
      backgroundColor: '#fff',
      id: 'id8'
    }],
    willShare: false,
    willDelete: false,
    show: 'hidden',
    isshow: 'hidden'
  }),
  mounted () {
  },
  methods: {
    dragstart (e, draid) {
      if (draid === '1') {

      }
      this.show = 'visible'
      this.draggableDom = e.index
      this.draggableId = e.item.id
      this.draggableName = e.item.name
    },
    dragmove (e, draid) {
      this.show = 'visible'
      this.x = e.changedTouches[0].clientX
      this.y = e.changedTouches[0].clientY
      if (this.y < 38 && this.x > 160) {
        this.bgcolor = ''
        this.bgcolor2 = 'red'
        this.draggableFailFalg = true
      } else if (this.y < 38 && this.x < 160) {
        this.bgcolor2 = ''
        this.bgcolor = '#39f'
        this.draggableFailFalg = true
      } else {
        this.bgcolor = ''
        this.bgcolor2 = ''
      }
    },
    dragend (e, draid) {
      console.log('12313123222222222')
      let arr
      if (draid === '1') {
        arr = this.list
      } else if (draid === '2') {
        arr = this.list2
      }
      this.show = 'hidden'
      this.bgcolor = ''
      this.bgcolor2 = ''
      this.x = e.changedTouches[0].clientX
      this.y = e.changedTouches[0].clientY
      if (this.y < 38 && this.x > 160) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === this.draggableId) {
            arr.splice(i, 1)
            return false
          }
        }
      } else if (this.y < 38 && this.x < 160) {
        ui.showToast({ title: `分享:${this.draggableName}` })
      } else {
        return false
      }
    },
    failed (e) {
      if (e === -1) {
        if (this.draggableFailFalg) {
          this.draggableFailFalg = false
          return false
        }
      } else if (e === -2) {
        ui.showToast({ title: '最多可拖动4个' })
      }
    },
    navigateBack () {
      ui.navigateBack()
    }
  }
}
