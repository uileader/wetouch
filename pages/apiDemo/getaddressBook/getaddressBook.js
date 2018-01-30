
export default {
  data () {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    pick () {
      ui.pickPhoneNumber({
        success: ({ phoneNumber }) => {
          this.phoneNumber = phoneNumber
        }
      })
    }
  }
}