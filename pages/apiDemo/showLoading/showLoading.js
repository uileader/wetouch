// loading.js
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  },
  methods: {
    handleChange1 (val) {
      if (val) {
        ui.showLoading()
        window.setTimeout(() => {
          this.show1 = false
          ui.hideLoading()
        }, 2000)
      }
    },
    handleChange2 (val) {
      if (val) {
        ui.showLoading({
          text: '正在查询机构'
        })
        window.setTimeout(() => {
          this.show2 = false
          ui.hideLoading()
        }, 2000)
      }
    },
    handleChange3 (val) {
      if (val) {
        ui.showLoading({
          text: '正在加载...',
          maskStyle: {
            'background-color': 'rgba(231,231,231,0)'
          }
        })
        window.setTimeout(() => {
          this.show3 = false
          ui.hideLoading()
        }, 2000)
      }
    },
    handleChange4 (val) {
      if (val) {
        ui.showLoading({
          content: '<div class="mt-mascot"></div>',
          maskStyle: {
            backgroundColor: '#fff'
          }
        })
        window.setTimeout(() => {
          this.show4 = false
          ui.hideLoading()
        }, 2000)
      }
    },
    handleChange5 (val) {
      if (val) {
        ui.showLoading({
          content: `<div class="alipay-loading">
          <div class="img-loading-circle"></div>
          <div class="text">
            加载中...
          </div>
        </div>`,
          maskStyle: {
            'background-color': 'rgba(231,231,231,0)'
          }
        })
        window.setTimeout(() => {
          this.show5 = false
          ui.hideLoading()
        }, 2000)
      }
    },
    handleChange6 (val) {
      if (val) {
        ui.showLoading({
          content: `<div class="img-loading">
                      <div class="img-loading-circle"></div>
                      <div class="text">
                        加载中...
                      </div>
                    </div>`,
          maskStyle: {
            'background-color': 'rgba(231,231,231,0)'
          }
        })
        window.setTimeout(() => {
          this.show6 = false
          ui.hideLoading()
        }, 2000)
      }
    }
  }
}
