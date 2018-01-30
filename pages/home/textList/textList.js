// textList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '文本',
          items: [
            { title: '文本 text', link: '/pages/componentDemo/text/text' },
            { title: '富文本 rich-text', link: '/pages/componentDemo/richText/richText' },
            { title: '富文本可选 rich-text', link: '/pages/componentDemo/richText/richText2' },
            { title: '标签组 tags', link: '/pages/componentDemo/tags/tags' },
            { title: '数字动画 count-up', link: '/pages/componentDemo/countUp/countUp' },
            { title: '倒计时 count-down', link: '/pages/componentDemo/countDown/countDown' },
            { title: '滚动公告 roller', link: '/pages/componentDemo/roller/roller' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}