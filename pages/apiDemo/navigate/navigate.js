// interfaceJump.js
export default {
  methods: {

    navigateTo () {
      ui.navigateTo({
        url: '/pages/apiDemo/navigate/navigateNew?name=jun&age=23'
      })
    },
    redirectTo () {
      ui.redirectTo({
        url: '/pages/home/networkList/networkList'
      })
    },
    switchTab () {
      ui.switchTab({
        url: '/pages/index'
      })
    }
  }
}
