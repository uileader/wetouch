// indexList.js
export default {
  data () {
    return {
      country1: '北京',
      country2: '宝马',
      country3: '阿强',
      country4: '阿强'
    }
  },
  mounted () {

  },
  methods: {
    showIndexList1 () {
      import(`#/pages/dialogs/index-list1.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          data: {
            country: this.country1
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country1 = data.country
            }
          }
        })
      })
    },
    showIndexList2 () {
      import(`#/pages/dialogs/index-list2.ui`).then((content) => {
        ui.showDialog({
          title: '请输入汽车品牌',
          content: content,
          statusBarColor: 'black',
          data: {
            country: this.country2
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country2 = data.country
            }
          }
        })
      })
    },
    showIndexList3 () {
      import(`#/pages/dialogs/index-list3.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          data: {
            country: this.country3
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country3 = data.country
            }
          }
        })
      })
    },
    showIndexList4 () {
      import(`#/pages/dialogs/index-list4.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          data: {
            country: this.country4
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.country) {
              this.country4 = data.country
            }
          }
        })
      })
    }
  }
}
