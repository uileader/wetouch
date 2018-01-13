// networkList.js
export default {
  data () {
    return {
      groups: [
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
          title: '文件',
          items: [
            { title: '文件的下载、保存与移除', link: '/pages/apiDemo/fileUpDownload/fileUpDownload' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}