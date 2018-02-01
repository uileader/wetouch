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
          title: '导航',
          items: [
            { title: '界面跳转示例', link: '/pages/apiDemo/navigate/navigate' },
            { title: '参数传递', link: '/pages/apiDemo/parameter/parameter' }
          ]
        },
        {
          title: '数据',
          items: [
            { title: '数据缓存', link: '/pages/apiDemo/localStorage/localStorage' }
          ]
        },
        {
          title: '网络',
          items: [
            { title: '发起请求', link: '/pages/apiDemo/request/request' },
            { title: 'WebSocket', link: '/pages/apiDemo/webSocket/webSocket' }
          ]
        },
        {
          title: '位置',
          items: [
            { title: '获取位置', link: '/pages/apiDemo/getLocation/getLocation' },
            { title: '查看位置', link: '/pages/apiDemo/openLocation/openLocation' },
            { title: '选择位置', link: '/pages/apiDemo/chooseLocation/chooseLocation' }
          ]
        },
        {
          title: '其他',
          items: [
            { title: '导航栏控制 navBar', link: '/pages/apiDemo/changeNavbar/changeNavbar' },
            { title: '系统信息', link: '/pages/apiDemo/systemInformation/systemInformation' },
            { title: '拨打电话', link: '/pages/apiDemo/call/call' }
          ]
        }

      ]
    }
  },
  mounted () {

  }
}