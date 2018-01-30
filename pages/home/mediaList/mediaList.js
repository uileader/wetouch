export default {
  data () {
    return {
      groups: [
        {
          title: '照片',
          items: [
            { title: '拍摄或选择照片', link: '/pages/apiDemo/takePictures/takePictures' },
            { title: '照片的上传与下载', link: '/pages/apiDemo/uploadDownload/uploadDownload' },
            { title: '网络图片保存到相册', link: '/pages/apiDemo/networkPictures/networkPictures' }
          ]
        },
        {
          title: '语音',
          items: [
            { title: '录音与播放', link: '/pages/apiDemo/playRecord/playRecord' },
            { title: '语音消息播放', link: '/pages/apiDemo/playSound/playSound' }
          ]
        },
        {
          title: '背景音频',
          items: [
            { title: '基本使用', link: '/pages/apiDemo/bgAudio/bgAudio' }
          ]
        },
        {
          title: '视频',
          items: [
            { title: '拍摄或选择视频上传', link: '/pages/apiDemo/shootVideo/shootVideo' },
            { title: '网络视频保存到相册', link: '/pages/apiDemo/networkVideo/networkVideo' }
          ]
        }
      ]
    }
  },
  mounted () {

  }
}