export default {
  data () {
    return {
      pageloadText: '',
      pageload2: {
        trigger: 'always',
        handle: () => {
          this.pageloadText += `pageload事件：每次页面加载时都触发\n`
        }
      }
    }
  },
  methods: {}
}
