// changeNavbar.js

export default {
  data () {
    return {
      title: this.$route && this.$route.meta.pageConfig.navigationBarTitleText
    }
  },

  methods: {
    handleSetNavigationBarTitle () {
      ui.setNavigationBarTitle({
        title: 'Hello!'
      })
    },
    handleSetNavigationBarColor () {
      ui.setNavigationBarColor({
        frontColor: '#666',
        backgroundColor: '#eee'
      })
    },
    handleShowNavigationBarLoading () {
      ui.showNavigationBarLoading()
    },
    handleHideNavigationBarLoading () {
      ui.hideNavigationBarLoading()
    },
    handleSetDarkLoading () {
      ui.showNavigationBarLoading({
        color: 'dark'
      })
    },
    handleSetLightLoading () {
      ui.showNavigationBarLoading({
        color: 'light'
      })
    },
    handleSetGradientNavigationBar () {
      ui.setNavigationBarColor({
        gradient: 'linear-gradient(45deg, #FF8E00, #FF4F00)'
      })
      ui.setNavigationBarColor({
        frontColor: '#fff'
      })
    },
    handleResetNavigationBar () {
      ui.setNavigationBarTitle({
        title: this.title
      })

      ui.setNavigationBarColor({
        frontColor: null,
        backgroundColor: null
      })

      ui.setNavigationBarColor({
        Gradient: this.$route.meta.pageConfig.navigationBarBackgroundGradient
      })
    }
  },
  mounted () {
  }
}