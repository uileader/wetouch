// tabList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '底部标签栏 tab-bar',
          items: [
            { title: '基本使用', link: '/pages/componentDemo/tabBar/tabBar1-1' },
            { title: '选中图标为新icon', link: '/pages/componentDemo/tabBar/tabBar6-1' },
            { title: '图片作为图标', link: '/pages/componentDemo/tabBar/tabBar2-1' },
            { title: 'tab点击动画', link: '/pages/componentDemo/tabBar/tabBar3-1' },
            { title: '使用badge', link: '/pages/componentDemo/tabBar/tabBar4-1' },
            { title: '个性按钮与切换事件', link: '/pages/componentDemo/tabBar/tabBar5-1' }
            // { title: '改变标签栏方向', link: '/pages/componentDemo/tabBar/tabBar7-1' }
          ]
        },
        {
          title: '轮播 swiper',
          items: [
            { title: '基本使用', link: '/pages/componentDemo/swiper/swiper' },
            { title: '异步加载', link: '/pages/componentDemo/swiper/swiper2' },
            { title: '自定义分页', link: '/pages/componentDemo/swiper/swiper3' },
            { title: '一行多个item', link: '/pages/componentDemo/swiper/swiper4' },
            { title: '边界露出其他item', link: '/pages/componentDemo/swiper/swiper5' },
            { title: '纵深变化', link: '/pages/componentDemo/swiper/swiper6' },
            { title: '纵向切换', link: '/pages/componentDemo/swiper/swiper7' }
            // { title: '纵向拉动切换', link: '/pages/componentDemo/swiper/swiper8'}
          ]
        },
        {
          title: '轻量轮播 mini-swiper',
          items: [
            { title: '基本使用', link: '/pages/componentDemo/miniSwiper/miniSwiper' },
            { title: '全屏swiper', link: '/pages/componentDemo/miniSwiper/miniSwiper2' }
          ]
        },
        {
          title: '集成选项卡 tab-view',
          items: [
            { title: '典型示例', link: '/pages/componentDemo/tabView/tabView' },
            { title: '自定义下拉刷新动画', link: '/pages/componentDemo/tabView/tabView2' },
            { title: '自定义样式', link: '/pages/componentDemo/tabView/tabView3' }
          ]
        },
        {
          title: '分离式选项卡 tabs',
          items: [
            { title: '自定义样式', link: '/pages/componentDemo/tabs/tabs' },
            { title: '全局tabs', link: '/pages/componentDemo/tabs/tabs2' },
            { title: '内容共用一个容器', link: '/pages/componentDemo/tabs/tabs3' },
            { title: '纵向锚点跳转：订餐列表', link: '/pages/componentDemo/tabs/tabs4' },
            { title: '纵向内容切换：商品分类', link: '/pages/componentDemo/tabs/tabs5' },
            { title: '纵向数据切换：商品分类', link: '/pages/componentDemo/tabs/tabs6' },
            { title: '纵向+横向：商品详情', link: '/pages/componentDemo/tabs/tabs7' },
            { title: '商品详情测试1', link: '/pages/componentDemo/tabs/tabs8' }
          ]
        },
        {
          title: '分段式选项卡 segment',
          items: [
            { title: '基本使用', link: '/pages/componentDemo/segment/segment' },
            { title: '全局segment', link: '/pages/componentDemo/segment/segment2' }
          ]
        }, {
          title: '折叠面板 accordion',
          items: [{
            title: '基本使用',
            link: '/pages/componentDemo/accordion/accordion'
          }
          ]
        }, {
          title: '概要 summary',
          items: [
            { title: '基本使用',
              link: '/pages/componentDemo/summary/summary'
            }
          ]
        }

      ]
    }
  },
  methods: {}
}
