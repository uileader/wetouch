// scrollView6.js
export default {
  data () {
    return {
      state: 0,
      otherShop: [
        {
          src: 'https://bfs.biyao.com/group1/M00/1F/C7/rBACVFoBTzyAX7ZEAACY21C5fXI268.jpg',
          name: '经典纯色长袖T恤（2件装）',
          price: '￥219'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/21/7D/rBACYVoBS2eAGLERAACGBt2GJLE867.jpg',
          name: '经典纯色圆领T恤（2件装）',
          price: '￥199'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/22/A3/rBACVFomgq-ANmslAACcqsAhIvk817.jpg',
          name: '针织羊毛时尚连帽大衣',
          price: '￥699'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/16/rBACYVohJFWAag_cAACdB8zSZ4w703.jpg',
          name: '时尚卷边丝光羊毛针织衫',
          price: '￥359'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/06/rBACYVogAWaAUMDBAACW25z6rd4054.jpg',
          name: '时尚印花长袖圆领卫衣',
          price: '￥249'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/0E/rBACW1oguKKATWw1AACZ_zOy2rQ695.jpg',
          name: '羊毛天丝口袋翻领针织衫',
          price: '￥299'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/22/F1/rBACYVoOpLiAWl5dAACaEPjUntg416.jpg',
          name: '加厚条纹肌理羊毛针织衫',
          price: '￥359'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/1C/rBACW1oheIeAM6lVAACef7Zvcww291.jpg',
          name: '带扣小翻领丝光羊毛针织衫',
          price: '￥369'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/20/E6/rBACVFoLoZ6AR9rCAACeI1pnTTE939.jpg',
          name: '定位提花丝光羊毛针织衫',
          price: '￥359'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/22/9C/rBACW1oLny6AOUQrAACeZCJkVEE062.jpg',
          name: '小提花保暖长袖针织外套',
          price: '￥499'
        }
      ],
      pullLeft: {
        distance: 50,
        onBegin: this.handleBegin,
        onActive: this.handlePullLeft,
        onAfter: this.handlePullLeftAfter
      }
    }
  },
  methods: {
    handleBegin ({distance, direction}) {
      this.proportion = Math.abs(distance) / 50
      if (this.proportion >= 1) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    handlePullLeft () {
      ui.navigateTo({
        url: '/pages/componentDemo/listView/listView2'
      })
    },
    handlePullLeftAfter (flag) {
      if (flag) {
        return
      } else {
        this.state = 0
      }
    }
  }
}