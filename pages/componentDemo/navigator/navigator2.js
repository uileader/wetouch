// navigator2.js
export default {
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    let getData = ui.getQuery()
    ui.showToast({ title: getData })
  }
}
