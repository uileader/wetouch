export default {
  data () {
    return {
      groups: [
        {
          title: '页面配置',
          items: [
            { title: '窗口背景色', link: '/pages/apiDemo/backgroundColor/backgroundColor' },
            { title: '不允许滚动', link: '/pages/apiDemo/noScroll/noScroll' },
            { title: '隐藏导航栏', link: '/pages/apiDemo/hideNavbar/hideNavbar' },
            // { title: '侧滑菜单', link: '/pages/apiDemo/sideBar/sideBar' },
            { title: 'IOS禁用侧滑手势', link: '/pages/apiDemo/slideGestures/slideGestures' },
            { title: '获取静态常量', link: '/pages/apiDemo/constant/constant' }
          ]
        },
        {
          title: '逻辑与事件',
          items: [
            { title: '数据绑定', link: '/pages/apiDemo/bindData/bindData' },
            { title: 'model', link: '/pages/apiDemo/model/model' },
            { title: 'if', link: '/pages/apiDemo/if/if' },
            { title: 'for', link: '/pages/apiDemo/for/for' },
            { title: '触摸事件', link: '/pages/apiDemo/touchEvent/touchEvent' }
          ]
        },
        {
          title: '样式',
          items: [
            { title: 'less函数库', link: '/pages/apiDemo/styleLib/styleLib' },
            { title: 'loading样式库', link: '/pages/apiDemo/loadingStyle/loadingStyle' },
            { title: 'animate动画库', link: '/pages/apiDemo/animation/animation' }
          ]
        },
        {
          title: '自定义组件',
          items: [
            { title: '基础示例', link: '/pages/apiDemo/customComp/customComp' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}