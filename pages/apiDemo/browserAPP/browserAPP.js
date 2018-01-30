// browserAPP.js
export default {
  data () {
    return {
      url: 'http://www.uileader.com'
    }
  },
  methods: {},
  mounted(){
    ui.openBrowser({
      url: this.url,
      backgroundColor: '#3399ff',
      color: '#ffffff'
    })
  }
}
