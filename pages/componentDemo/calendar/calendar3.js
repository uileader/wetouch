export default {
  data () {
    return {
      date: '',
      dateDay: '',
      dateObj: {}
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
    }
  }
}
