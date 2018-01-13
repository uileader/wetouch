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
      }

      ui.navigateTo({
        url: 'networkView2?state=' + state
      })
    }
  }
}
