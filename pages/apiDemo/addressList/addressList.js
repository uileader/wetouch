// addressList.js
export default {
  data () {
    return {
      info: {
        firstName: 'UI Leader',
        phone: '10086',
        email: 'uileader@uileader.com'
      }
    }
  },
  methods: {
    add () {
      ui.addPhoneContact({
        firstName: this.info.firstName,
        mobilePhoneNumber: this.info.phone,
        email: this.info.email
      })
    }
  }
}