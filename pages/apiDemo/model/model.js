// model.js
export default {
  data () {
    return {
      value1: '',
      value2: false
    }
  },
  methods: {
    hanldeChangeInput () {
      this.value1 = 'Hello, Touch UI!'
    },
    hanldeChangeSwitch () {
      this.value2 = false
    }
  }
}
