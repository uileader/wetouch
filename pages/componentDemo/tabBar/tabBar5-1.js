// tabBar9.js
export default {
  data () {
    return {
      pageloadText: '',
      pageload1: {
        trigger: 'once',
        handle: () => {
          this.pageloadText += 'pageload事件：只在第一次加载时触发'
        }
      }
    }
  },
  methods: {}
}
