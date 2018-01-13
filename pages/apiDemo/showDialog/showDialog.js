// showWindow.js
export default {
  data () {
    return {
      country: '日本'
    }
  },
  methods: {
    showDialog1 () {
      import(`#/pages/dialogs/dialog.ui`).then((content) => {
        ui.showDialog({
          // 窗体标题
          title: '窗体1-1',
          content: content,
          statusBarColor: 'black',
          // 向dialog1.ui传入数据
          data: {
            country: this.country
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country = data.country
            }
          }
        })
      })
    },
    showDialog2 () {
      import(`#/pages/dialogs/dialog1.ui`).then((content) => {
        ui.showDialog({
          // 窗体标题
          title: '窗体1-2',
          content: content,
          headerStyle: {
            backgroundColor: '#3399ff',
            color: '#fff'
          },
          statusBarColor: 'white',

          // 向dialog1.ui传入数据
          data: {
            country: this.country
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country = data.country
            }
          }
        })
      })
    },
    showDialog3 () {
      import(`#/pages/dialogs/dialog2.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          // 向dialog2.ui传入数据
          data: {
            country: this.country
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country = data.country
            }
          }
        })
      })
    },
    showDialog4 () {
      import(`#/pages/dialogs/dialog3.ui`).then((content) => {
        ui.showDialog({
          content: content,
          fullScreen: false,
          backgroundColor: '#808080',
          // 向dialog3.ui传入数据
          data: {
            country: this.country
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country = data.country
            }
          }
        })
      })
    }
  },
  mounted () {

  }
}
