// navigator3.js
export default {
  data () {
    return {
      value: '',
      pageLoad: {
        trigger: 'always',
        handle: () => {
          // this.value = localStorage.backParameter
          this.value = ui.getStorageSync('backParameter')
        }
      }
    }
  },
  methods: {}
}
