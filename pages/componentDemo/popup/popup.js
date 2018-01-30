// popup.js
export default {
  data () {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      tagsWidth: ui.WIN_WIDTH - 20,
      poptpTop: ui.DEFAULT_HEADER_HEIGHT,
      list00: [{
        text: '全部活动',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: true
      }, {
        text: '电脑办公',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '精选活动',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '个护美妆',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '家用电器',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '酒水饮料',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '日用百货',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '流行服饰',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '鞋靴箱包',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '手机数码',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '钟表珠宝',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }]
    }
  },
  methods: {
    log (str) {
      if (str === 'hide') {
        this.show1 = false
      }
    },
    handleShow (key) {
      this[key] = false
    },
    singleTap (opt) {
      ui.showToast({
        title: this.list00[opt].text
      })
      this.show7 = false
      this.list00.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },

    openPopup1 () {
      this.show1 = true
    },
    openPopup2 () {
      this.show2 = true
    },
    openPopup3 () {
      this.show3 = true
    },
    openPopup4 () {
      this.show4 = true
    },
    openPopup5 () {
      this.show5 = true
    },
    openPopup6 () {
      this.show6 = true
    },
    openPopup7 () {
      this.show7 = true
    },
    openPopup8 () {
      this.show8 = true
    }
  },
  watch: {
    show8 (val) {
      if (val) {
        setTimeout(() => {
          this.show8 = false
        }, 2000)
      }
    }
  }
}
