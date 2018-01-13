// sparkline.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      data: [
        {
          value: 13,
          date: '2011-01-06T00:00:00Z'
        },
        {
          value: 22,
          date: '2011-01-07T00:00:00Z'
        }, {
          value: 34,
          date: '2011-01-08T00:00:00Z'
        }, {
          value: 69,
          date: '2011-01-09T00:00:00Z'
        }, {
          value: 52,
          date: '2011-01-10T00:00:00Z'
        }, {
          value: 49,
          date: '2011-01-11T00:00:00Z'
        }, {
          value: 73,
          date: '2011-01-12T00:00:00Z'
        }, {
          value: 82,
          date: '2011-01-13T00:00:00Z'
        }
      ],
      margin: {
        left: 60,
        right: 20,
        top: 20,
        bottom: 20
      },
      miniCircular: 75,
      gradient: ['#62d7bd', '#F6FEFC']
    }
  },
  methods: {}
}
