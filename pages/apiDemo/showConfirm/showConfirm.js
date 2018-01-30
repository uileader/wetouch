// showConfirm.js
export default {
  data () {
    return {
    }
  },
  methods: {
    showConfirm1 () {
      ui.showConfirm({
        content: '您尚未绑定银行卡，绑定银行卡后即可向商家付款',
        confirmButtonText: '去绑卡',
        cancelButtonText: '返回',
        success (result) {
          if(result.confirm){
            ui.showToast({
              title: '触发去绑卡按钮'
            })
          }
        }
      })
    },
    showConfirm2 () {
      ui.showConfirm({
        content: `
            <ul style="list-style:none">
              <li>您尚未绑定银行卡，绑定银行卡后即可向商家付款</li>
              <li class="view_bankcard">在用户中心可查看支持的银行</li>
            </ul>
        `,
        cancelButtonStyle: { color: '#D3DCE6' },
        confirmButtonStyle: { color: '#57B9A8' }
      })
    },
    showConfirm3 () {
      ui.showConfirm({
        title: '提示',
        content: '您尚未绑定银行卡，绑定银行卡后即可向商家付款',
        confirmButtonText: '去绑卡',
        cancelButtonText: '返回'
      })
    }
  }
}
