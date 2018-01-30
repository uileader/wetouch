// transferNew.js
export default {
  data () {
    return {

    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    let getData = ui.getQuery()
    ui.showAlert({
      title: '接收到参数',
      content: getData
    })
  }
}
