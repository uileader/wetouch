// layoutList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '基础容器 view',
          items: [
            { title: '基本示例', link: '/pages/componentDemo/view/view' },
            { title: '纵向全屏方案(px)', link: '/pages/componentDemo/view/verticalPx' },
            { title: '纵向全屏方案(rpx)', link: '/pages/componentDemo/view/verticalRpx' }
          ]
        },
        {
          title: '布局',
          items: [
            { title: '栅格布局：row && col', link: '/pages/componentDemo/row/row' },
            { title: '栅格布局综合示例', link: '/pages/componentDemo/row/rowImg' },
            { title: '栅格列表：row-list', link: '/pages/componentDemo/rowList/rowList' }
          ]
        },
        {
          title: '滚动容器 scroll-view',
          items: [
            { title: '纵向滚动：基本示例', link: '/pages/componentDemo/scrollView/scrollView' },
            { title: '下拉刷新和到底加载', link: '/pages/componentDemo/scrollView/scrollView2' },
            { title: '下拉刷新自定义动画和上拉加载', link: '/pages/componentDemo/scrollView/scrollView3' },
            { title: '横向滚动：基本示例', link: '/pages/componentDemo/scrollView/scrollView4' },
            { title: '横向滚动：弹性拉动事件', link: '/pages/componentDemo/scrollView/scrollView5' }

          ]
        },
        {
          title: '滑动菜单容器 swipe-out',
          items: [
            { title: '基本示例', link: '/pages/componentDemo/swipeOut/swipeOut' }
          ]
        },
        {
          title: '位置固定容器 fixed-view',
          items: [
              { title: '基本示例', link: '/pages/componentDemo/fixedView/fixedView' },
              { title: '应用案例', link: '/pages/componentDemo/fixedView/fixedView2' }
          ]
        },
        {
          title: '吸顶容器 sticky',
          items: [
              { title: '基本示例', link: '/pages/componentDemo/sticky/sticky' },
              { title: '多个吸顶容器共用', link: '/pages/componentDemo/sticky/sticky2' },
              { title: '应用案例', link: '/pages/componentDemo/sticky/sticky3' },
              { title: '在scroll-view中使用', link: '/pages/componentDemo/sticky/sticky4' }
          ]
        },
        {
          title: '可拖拽容器 draggable-area',
          items: [
            { title: '列表纵向拖拽排序', link: '/pages/componentDemo/draggable/draggable' },
            { title: '滑动菜单容器纵向拖拽排序', link: '/pages/componentDemo/draggable/draggable3' },
            { title: '仿支付宝：动态添加可拖拽元素', link: '/pages/componentDemo/draggable/draggable5' },
            { title: '仿桌面：两区域间拖拽+拖放事件', link: '/pages/componentDemo/draggable/draggable4' }
          ]
        }

      ]
    }
  },
  mounted () {
  }
}