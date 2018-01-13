export default {
  data () {
    return {
      windowWidth: ui.WIN_WIDTH,
      textclass: '',
      draggableFlag: false,
      el: 0,
      drael: null,
      list: [{
        name: '拜访张总',
        value: '0',
        state: '',
        height: 50,
        switcher: 'off',
        canSwipe: true
      }, {
        name: '2点会议室开会',
        value: '1',
        state: '',
        height: 50,
        switcher: 'off',
        canSwipe: true
      }, {
        name: '接待工厂客户',
        value: '2',
        state: '',
        height: 50,
        switcher: 'off',
        canSwipe: true
      }]
    }
  },
  methods: {
    checkchange (val) {
      for (var i = 0; i < this.list.length; i++) {
        if (val.current.checked) {
          if (this.list[i].value === val.current.value) {
            this.list[i].state = 'check-text'
          }
        } else {
          if (this.list[i].value === val.current.value) {
            this.list[i].state = ''
          }
        }
      }
    },
    del (index) {
      let that = this
      this.list[index].height = 0
      that.list.splice(index, 1)
      for (let i = 0; i < this.list.length; i++) {
        this.$refs.swipe[i].close()
      }

      this.el = index
    },
    changeHandler1 (index) {
      if (this.el !== index) {
        this.$refs.swipe[this.el].close()
        this.el = index
      }
    },
    play () {
      ui.showToast({ title: '播放' })
    },
    dragstart (e) {
      this.draggableFlag = true
      this.drael = e.item.value
      for (let i = 0; i < this.list.length; i++) {
        this.$refs.swipe[i].close()
      }

      if (this.draggableFlag) {
        this.list[e.index].canSwipe = false
        this.draggableFlag = false
      }
    },
    dragend (e) {
      if (!this.draggableFlag) {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].value === this.drael) {
            this.list[i].canSwipe = true
          }
        }
      }
    }
  }
}
