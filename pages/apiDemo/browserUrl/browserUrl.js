// browserUrl.js
export default {
  data () {
    return {
      url: 'http://www.uileader.com'
    }
  },
  methods: {
    open () {
      ui.openBrowser({
        url: this.url,
        backgroundColor: '#3399ff',
        color: '#ffffff'
      })
    }
  }
}
