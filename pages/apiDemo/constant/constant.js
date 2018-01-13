// constant.js
export default {
  data () {
    return {
      isAPP:'',
      isAndroid:'',
      isIOS:'',
      winHeight:'',
      statusBarHright:'',
      defaultHeaderHeight:'',
      defaultContentHright:'',
      winWidth:''
    }
  },
  methods: {
   
  },
  mounted () {
    this.isAPP=ui.IS_APP
    this.isAndroid=ui.IS_ANDROID
    this.isIOS=ui.IS_IOS
    this.winHeight=ui.WIN_HEIGHT
    this.statusBarHright=ui.STATUS_BAR_HEIGHT
    this.defaultHeaderHeight=ui.DEFAULT_HEADER_HEIGHT
    this.defaultContentHright=ui.DEFAULT_CONTENT_HEIGHT
    this.winWidth=ui.WIN_WIDTH
  }
}
