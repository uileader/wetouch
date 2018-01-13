// showPrompt.js
export default {
  data () {
    return {
      value1: '',
      value2: '开发组',
      value3: ''
    }
  },
  methods: {
    showPrompt1 () {
      ui.showPrompt({
        title: '新建分组',
        placeholder: '请输入分组名',
        value: this.value1,
        success: (result) => {
          let title = result.confirm ? `点击了确认按钮，文本框值为：${result.value}` : `点击了取消按钮，文本框值为：${result.value}`
          this.value1 = result.value
          ui.showToast({
            title: title
          })
        }
      })
    },
    showPrompt2 () {
      ui.showPrompt({
        title: '修改分组',
        placeholder: '请输入分组名',
        confirmButtonText: '确认修改',
        cancelButtonText: '放弃修改',
        value: this.value2,
        success: (result) => {
          let title = result.confirm ? `点击了确认修改按钮，文本框值为：${result.value}` : `点击了放弃修改按钮，文本框值为：${result.value}`
          this.value2 = result.value
          ui.showToast({
            title: title
          })
        }
      })
    },
    showPrompt3 () {
      ui.showPrompt({
        title: '删除分组',
        placeholder: '请输入分组名',
        content: `
                  <div class="prompt3">
                    <div class="danger">这是一个危险的操作</div>
                  </div>
                  `,
        value: this.value3,
        cancelButtonStyle: { color: '#D3DCE6' },
        confirmButtonStyle: { color: '#ff2a00' }
      })
    }
  }
}
