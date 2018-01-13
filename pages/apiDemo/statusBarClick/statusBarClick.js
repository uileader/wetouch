// statusBarClick.js
export default {
  data () {
    return {}
  },
  methods: {
    onload(){
      ui.onStatusbarTap(function(){
        ui.showToast({
          title: '点击了状态栏',
          icon: 'success',
          duration: 2000
        })
      })
    }
  },
  mounted(){
    this.onload()
  }
}
