// mediaList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '图标 icon',
          items: [
            { title: '图标库', link: '/pages/componentDemo/icon/icon' }
            // { title: '图标库索引', link: '/pages/componentDemo/icon/iconIndex' }
          ]
        },
        {
          title: '图片 image',
          items: [
            { title: '图片加载效果', link: '/pages/componentDemo/image/loadEffect' },
            { title: '缩放与裁剪', link: '/pages/componentDemo/image/scale' },
            { title: '高度自适应', link: '/pages/componentDemo/image/autoHeight' },
            { title: '图片懒加载', link: '/pages/componentDemo/image/lazyLoad' },
            { title: '图片懒加载-blur效果', link: '/pages/componentDemo/image/lazyLoad2' },
            { title: '图片懒加载-自定义背景色和文字', link: '/pages/componentDemo/image/lazyLoad3' },
            { title: '图片懒加载-自定义背景图片', link: '/pages/componentDemo/image/lazyLoad4' },
            { title: '图片预览', link: '/pages/componentDemo/image/previewer' }

          ]
        },
        {
          title: '朦胧图 blur',
          items: [
            { title: '基础', link: '/pages/componentDemo/blur/blur' },
            { title: '影片选择', link: '/pages/componentDemo/blur/blur2' },
            { title: '个人中心', link: '/pages/componentDemo/blur/blur3' }
          ]
        },
        {
          title: '音频 audio',
          items: [
            { title: '基础', link: '/pages/componentDemo/audio/audio' },
            { title: 'h5音乐播放器', link: '/pages/componentDemo/playaudio/playaudio' }
          ]
        },
        {
          title: '视频 video',
          items: [
            { title: '基础', link: '/pages/componentDemo/video/video' }
          ]
        }
      ]
    }
  },
  mounted () {

  }
}