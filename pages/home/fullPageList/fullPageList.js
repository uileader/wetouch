export default {
  data () {
    return {
      groups: [
        {
          title: '整页滚动',
          items: [
            { title: '外部触发下拉刷新', link: '/pages/componentDemo/fullPage/triggerRefresh' },
            { title: '透明导航+swiper下拉放大', link: '/pages/componentDemo/fullPage/swiperBigger' },
            { title: '透明导航+背景图下拉放大', link: '/pages/componentDemo/fullPage/bgBigger' },
            { title: 'banner区域为视频', link: '/pages/componentDemo/fullPage/videoBanner' },
            { title: '双滚动：内容到顶触发外滚动', link: '/pages/componentDemo/fullPage/doubleScroll' },
            { title: '双滚动：随时触发外滚动', link: '/pages/componentDemo/fullPage/doubleScroll2' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}