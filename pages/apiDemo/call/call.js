// call.js
export default {
  data () {
    return {
      inputValue: '10086',
      disabled: false
    }
  },
  methods: {
    bindInput (val) {
      this.inputValue = val
      if (this.inputValue.length > 0) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    makePhoneCall () {
      ui.makePhoneCall({
        phoneNumber: this.inputValue,
        success: function () {
        }
      })
    }
  }
}
