export default {
  data () {
    return {
      showBadge4: true
    }
  },
  methods: {
    handleChange (e) {
      if (e === 2) {
        this.showBadge4 = false
      }
    },
    hideBadge4(){
      this.showBadge4 = false
    }
  }
}
