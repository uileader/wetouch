// summary.js
export default {
  data () {
    return {
      state: 'summary',
      state1: 'details',
      list: [
        { height: 80,
          title: '旺顺阁鱼头泡饼',
          imgUrl: 'http://p0.meituan.net/200.0/deal/1e257a1f5b0d974b292ac7bc9a3c21ad71414.jpg',
          state: 'summary',
          class: ''
        },
        { height: 80,
          title: '吉野家',
          imgUrl: 'http://p0.meituan.net/200.0/deal/271ab37c767d8c4ba5f705da8eb00e9032980.jpg',
          state: 'summary',
          class: ''
        }
      ]
    }
  },
  methods: {
    tap (index) {
      if (this.list[index].state === 'summary') {
        this.list[index].state = 'details'
        this.list[index].class = 'rotate'
      } else {
        this.list[index].state = 'summary'
        this.list[index].class = ''
      }
    }
  }
}
