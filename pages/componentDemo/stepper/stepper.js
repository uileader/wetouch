// stepper.js
export default {
  data () {
    return {
      quantity1: [
        {
          minusIcon: require('#/images/jian1.png'),
          plusIcon: require('#/images/jia1.png')
        }
      ]
    }
  },
  methods: {
    subtraction (val) {
      ui.showToast({ title: val })
    },
    addition (val) {
      ui.showToast({ title: val })
    }
  }
}
