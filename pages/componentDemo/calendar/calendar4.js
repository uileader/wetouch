export default {
  data () {
    return {
      date: '',
      dateDay: '',
      dateObj: {},
      list: [{
        name: '拜访张总',
        value: '0',
        state: '',
        height: 50,
        switcher: 'off'
      }, {
        name: '2点会议室开会',
        value: '1',
        state: '',
        height: 50,
        switcher: 'off'
      }, {
        name: '接待工厂客户',
        value: '2',
        state: '',
        height: 50,
        switcher: 'off'
      }]
    }
  },
  methods: {
    selectedHandler (e) {
      this.dateObj = e.split('/')
      this.date = `${this.dateObj[0]}年${this.dateObj[1]}月`
      this.dateDay = `${this.dateObj[0]}年${this.dateObj[1]}月${this.dateObj[2]}日`
    },
    navigateBack () {
      ui.navigateBack()
    },
    del (index) {
      let that = this
      this.list[index].height = 0
      that.list.splice(index, 1)
    },
    changeHandler1 (index) {
      for (var i = 0; i < this.list.length; i++) {
        if (i !== index) {
          this.list[i].switcher = 'off'
        }
      }
    },
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
    }
  }
}
