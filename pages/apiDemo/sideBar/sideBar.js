// sideBar.js
export default {
  data () {
    return {
      ui: {
        windowWidth: 0,
        menuWidth: 0,
        offsetLeft: 0,
        tStart: true,
        shade: false,
        scale: 1,
        shadeOpacity: 0
      },
      list2: [ 1, 2, 3, 4 ]
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack({})
    }
  }
}
