export default {
  data () {
    return {
    }
  },
  methods: {
    navigateurl (staterefer) {
      let state
      switch (staterefer) {
        case 'normal':
          state = '1'
          break
        case 'backnull':
          state = '3'
          break
        case 'overtime':
          state = '4'
          break
        case 'failed':
          state = '5'
          break
        case 'isnull':
          state = '7'
          break
        case 'login':
          state = '6'
          break
      }

      ui.navigateTo({
        url: 'networkView4?state=' + state
      })
    },
    noRequest () {
      var msg = ''   // 已经接受到的消息
      if (msg === '') {
        ui.navigateTo({
          url: 'networkView2?state=' + 'false'
        })
      }
    }
  }
}
