// form.js
export default {
  data () {
    return { left: 0,
      sliderValue: 20
    }
  },
  methods: {
    formSubmit (e) {
      ui.request({
        url: 'test.php', // 仅为示例，并非真实的接口地址
        data: e,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
        },
        error: function (res) {
        }
      })
    },
    formReset (e) {
    }
  }
}
