// homeApi.js
export default {
  data () {
    return {
      alpha: 0,
      statusHeight: ui.STATUS_BAR_HEIGHT
    }
  },
  methods: {
    handleScroll (scrollTop) {
      // var val=(scrollTop)/100
      // if(val<0.3){
      //   this.alpha = val
      // }

      if (scrollTop > 0) {
        this.alpha = 0.3
      } else {
        this.alpha = 0
      }
    }
  }
}
