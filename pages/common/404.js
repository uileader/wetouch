export default {
  data () {
    return {
      img: require('../../images/404.png')
    }
  },
  methods: {
    handleBack () {
      ui.navigateBack()
    }
  }
}