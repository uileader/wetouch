// interFace.js
export default {
  data () {
    return {
      groups: [
        {
          title: '交互反馈',
          items: [
            { title: '提示-Toast', link: '/pages/apiDemo/showToast/showToast' },
            { title: '警告框-Alert', link: '/pages/apiDemo/showAlert/showAlert' },
            { title: '确认框-Confirm', link: '/pages/apiDemo/showConfirm/showConfirm' },
            { title: '输入框-Prompt', link: '/pages/apiDemo/showPrompt/showPrompt' },
            { title: '动作面板-ActionSheet', link: '/pages/apiDemo/showActionSheet/showActionSheet' },
            { title: '窗体-Dialog', link: '/pages/apiDemo/showDialog/showDialog' },
            { title: '加载框-Loading', link: '/pages/apiDemo/showLoading/showLoading' }
          ]
        },
        {
          title: '头部控制',
          items: [
            { title: '系统状态栏样式 statusBar', link: '/pages/apiDemo/statusBar/statusBar' },
            { title: '导航栏控制 navBar', link: '/pages/apiDemo/changeNavbar/changeNavbar' }
          ]
        }

      ]
    }
  },
  mounted () {

  }
}