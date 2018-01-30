// modalList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '背景遮罩 mask',
          items: [
            { title: '基础示例', link: '/pages/componentDemo/mask/mask' },
            { title: '应用场景1：图标导航', link: '/pages/componentDemo/mask/iconNav' },
            { title: '应用场景2：弹出式提示', link: '/pages/componentDemo/mask/maskTip' },
            { title: '应用场景3：操作引导示例一', link: '/pages/componentDemo/mask/maskGuide' },
            { title: '应用场景4：操作引导示例二', link: '/pages/componentDemo/mask/maskGuide2' }

          ]
        },
        {
          title: '模态层 popup',
          items: [
            { title: '基础示例', link: '/pages/componentDemo/popup/popup' }
          ]
        },
        {
          title: '弹出式气泡 popover',
          items: [
            { title: '自定义方向', link: '/pages/componentDemo/popover/popover' },
            { title: '自定义动画', link: '/pages/componentDemo/popover/popover2' },
            { title: '自定义样式', link: '/pages/componentDemo/popover/popover3' },
            { title: '单例模式', link: '/pages/componentDemo/popover/popover4' }
          ]
        },
        {
          title: '弹出式图标导航 popicon',
          items: [
            { title: '横向排列', link: '/pages/componentDemo/popicon/popicon' },
            { title: '环形排列', link: '/pages/componentDemo/popicon/popicon2' },
            { title: '纵向排列', link: '/pages/componentDemo/popicon/popicon3' },
            { title: '扇形排列', link: '/pages/componentDemo/popicon/popicon4' }
          ]
        }
      ]
    }
  },
  mounted () {

  }
}
