export default {
  data () {
    return {
      funnelValue: [{
        value: 2102,
        text: '浏览',
        color: '#45DBFF'
      }, {
        value: 4351,
        text: '注册',
        color: '#3CC4D2'
      }, {
        value: 2310,
        text: '咨询',
        color: '#FF5883'
      }, {
        value: 4200,
        text: '试用',
        color: '#FFAF4D'
      }, {
        value: 2000,
        text: '购买',
        color: '#53E335'
      }]
    }
  },
  methods: {
    callback (e) {
      
      console.log(e)
    }
  }
}
