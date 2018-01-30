// image1.js
export default {
  data () {
    return {
      array: [{
        mode: 'top',
        text: 'top：不缩放图片，只显示图片的顶部区域'
      }, {
        mode: 'bottom',
        text: 'bottom：不缩放图片，只显示图片的底部区域'
      }, {
        mode: 'center',
        text: 'center：不缩放图片，只显示图片的中间区域'
      }, {
        mode: 'left',
        text: 'left：不缩放图片，只显示图片的左边区域'
      }, {
        mode: 'right',
        text: 'right：不缩放图片，只显示图片的右边边区域'
      }, {
        mode: 'top left',
        text: 'top left：不缩放图片，只显示图片的左上边区域'
      }, {
        mode: 'top right',
        text: 'top right：不缩放图片，只显示图片的右上边区域'
      }, {
        mode: 'bottom left',
        text: 'bottom left：不缩放图片，只显示图片的左下边区域'
      }, {
        mode: 'bottom right',
        text: 'bottom right：不缩放图片，只显示图片的右下边区域'
      }],
      img1: require('#/images/cat.jpg'),
      img2: 'http://images.uileader.com/20171025/ec314eef-fe0d-4426-8194-6896615e7703.jpg',
      winWidth: ui.WIN_WIDTH
    }
  },
  methods: {}
}
