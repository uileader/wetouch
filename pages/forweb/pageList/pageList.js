export default {
  data () {
    return {
      groups: [
        {
          title: '页面组件 page',
          items: [
            { title: '滚动到底自动加载', link: '/pages/componentDemo/page/page' },
            { title: '底部上拉加载', link: '/pages/componentDemo/page/page2' },
            { title: '底部上拉加载(自定义样式)', link: '/pages/componentDemo/page/page3' },
            { title: '滚动事件', link: '/pages/componentDemo/page/page4' },
            { title: '外部控制滚动', link: '/pages/componentDemo/page/page5' },
            { title: '滚动后记住位置', link: '/pages/componentDemo/page/page6' },
            { title: '双滚动：内容到顶触发外滚动', link: '/pages/componentDemo/fullPage/doubleScroll' },
            { title: '双滚动：随时触发外滚动', link: '/pages/componentDemo/fullPage/doubleScroll2' },
            { title: '下拉刷新：基本使用', link: '/pages/componentDemo/page/page7' },
            { title: '下拉刷新：自定义样式', link: '/pages/componentDemo/page/page8' },
            { title: '下拉刷新：外部触发', link: '/pages/componentDemo/fullPage/triggerRefresh' },
            { title: '下拉刷新：内容固定模式', link: '/pages/componentDemo/page/page10' },
            { title: '下拉刷新：内容固定模式自定义样式', link: '/pages/componentDemo/page/page11' },
            { title: '顶部下拉彩蛋', link: '/pages/componentDemo/page/page12' }
          ]
        },
        {
          title: '自定义导航栏 nav-bar',
          items: [

            { title: '右侧自定义图标', link: '/pages/componentDemo/navBar/navBar' },
            { title: '右侧自定义图标：收藏和分享', link: '/pages/componentDemo/navBar/navBar2' },
            { title: '右侧自定义图标+badge', link: '/pages/componentDemo/navBar/navBar3' },
            { title: '左侧自定义图标+badge', link: '/pages/componentDemo/navBar/navBar4' },
            { title: '中间自定义搜索框+滚动变宽', link: '/pages/componentDemo/navBar/navBar5' },
            { title: '导航栏背景为渐变色', link: '/pages/componentDemo/navBar/navBar6' }

          ]
        },
        {
          title: '含banner的页面结构',
          items: [
            { title: 'banner为纯色+自定义下拉颜色', link: '/pages/componentDemo/banner/banner' },
            { title: 'banner为图片+透明导航', link: '/pages/componentDemo/banner/banner2' },
            { title: 'banner为swiper+状态栏颜色变化', link: '/pages/componentDemo/banner/banner3' },
            { title: '透明导航+swiper下拉放大', link: '/pages/componentDemo/fullPage/swiperBigger' },
            { title: '透明导航+背景图下拉放大', link: '/pages/componentDemo/fullPage/bgBigger' },
            { title: 'banner图片视差滚动', link: '/pages/componentDemo/banner/banner4' },
            { title: 'banner区域为视频', link: '/pages/componentDemo/fullPage/videoBanner' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}