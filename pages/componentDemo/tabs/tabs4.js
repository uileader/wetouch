export default {
  data () {
    return {
      items: [],
      range: 0,
      imgHeight: 135,
      height: ui.WIN_HEIGHT,
      statusHeight: ui.STATUS_BAR_HEIGHT,
      rangetext1: 0,
      rangetext2: 0,
      toView: '',
      opacity: 1,
      opacityText: 0,
      current: 0,
      scaleval: 'scale(1)',
      imgwidth: '90',
      stopscroll: 'stopscroll',
      tabItems: [
        { name: '热销榜' },
        { name: '主食' },
        { name: '超值套餐' },
        { name: '小食' },
        { name: '饮品' },
        { name: '甜品' },
        { name: '促销产品和热卖产品' },
        { name: '开心乐园餐' }
      ],
      swiper: [
        {
          name: '热销榜',
          id: 'id0',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/daa30780-d727-45dc-9c62-f4378deb5c9d.png',
              title: '麦辣鸡翅两块',
              tips: '月售178份 好评率100%',
              price: '￥11'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡中套餐',
              tips: '月售166份 好评率95%',
              price: '￥29'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/29a346ea-3e58-4f38-8841-16f81c290b2f.png',
              title: '麦乐鸡5块',
              tips: '月售151份 好评率96%',
              price: '￥11'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '经典麦辣鸡腿汉堡',
              tips: '月售141份 好评率100%',
              price: '￥17'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '香骨鸡腿',
              tips: '月售91份 好评率100%',
              price: '￥12'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/11ef2ba9-a3cb-4be9-b41a-8f94b31becf7.png',
              title: '麦辣鸡翅4块',
              tips: '月售69份 好评率100%',
              price: '￥22'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/11ef2ba9-a3cb-4be9-b41a-8f94b31becf7.png',
              title: '麦乐鸡10块',
              tips: '月售67份 好评率100%',
              price: '￥22'
            }
          ]
        },
        {
          name: '主食',
          id: 'id1',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/daa30780-d727-45dc-9c62-f4378deb5c9d.png',
              title: '那么大鸡排满碗饭',
              tips: '月售178份 好评率100%',
              price: '￥23'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '汉堡包',
              tips: '月售166份 好评率95%',
              price: '￥7.5'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/29a346ea-3e58-4f38-8841-16f81c290b2f.png',
              title: '经典麦辣鸡腿汉堡',
              tips: '月售151份 好评率96%',
              price: '￥17'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '蜜汁鸡腿满碗饭',
              tips: '月售141份 好评率100%',
              price: '￥23'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/11ef2ba9-a3cb-4be9-b41a-8f94b31becf7.png',
              title: '巨无霸',
              tips: '月售91份 好评率100%',
              price: '￥20'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/11ef2ba9-a3cb-4be9-b41a-8f94b31becf7.png',
              title: '麦香鸡',
              tips: '月售69份 好评率100%',
              price: '￥11'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '麦香鱼',
              tips: '月售67份 好评率100%',
              price: '￥17'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/29a346ea-3e58-4f38-8841-16f81c290b2f.png',
              title: '吉士汉堡包',
              tips: '月售67份 好评率100%',
              price: '￥8.5'
            }
          ]
        },
        {
          name: '超值套餐',
          id: 'id2',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡中套餐',
              tips: '月售178份 好评率100%',
              price: '￥29'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡大套餐',
              tips: '月售166份 好评率95%',
              price: '￥33'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '那么大鸡排满碗饭',
              tips: '月售151份 好评率96%',
              price: '￥30'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '巨无霸大套餐',
              tips: '月售141份 好评率100%',
              price: '￥23'
            }
          ]
        },
        {
          name: '小食',
          id: 'id3',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡中套餐',
              tips: '月售178份 好评率100%',
              price: '￥29'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡大套餐',
              tips: '月售166份 好评率95%',
              price: '￥33'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '那么大鸡排满碗饭',
              tips: '月售151份 好评率96%',
              price: '￥30'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '巨无霸大套餐',
              tips: '月售141份 好评率100%',
              price: '￥23'
            }
          ]
        },
        {
          name: '饮品',
          id: 'id4',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡中套餐',
              tips: '月售178份 好评率100%',
              price: '￥29'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡大套餐',
              tips: '月售166份 好评率95%',
              price: '￥33'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '那么大鸡排满碗饭',
              tips: '月售151份 好评率96%',
              price: '￥30'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '巨无霸大套餐',
              tips: '月售141份 好评率100%',
              price: '￥23'
            }
          ]
        },
        {
          name: '甜品',
          id: 'id5',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡中套餐',
              tips: '月售178份 好评率100%',
              price: '￥29'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡大套餐',
              tips: '月售166份 好评率95%',
              price: '￥33'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '那么大鸡排满碗饭',
              tips: '月售151份 好评率96%',
              price: '￥30'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '巨无霸大套餐',
              tips: '月售141份 好评率100%',
              price: '￥23'
            }
          ]
        },
        {
          name: '促销产品和热卖产品',
          id: 'id6',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡中套餐',
              tips: '月售178份 好评率100%',
              price: '￥29'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡大套餐',
              tips: '月售166份 好评率95%',
              price: '￥33'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '那么大鸡排满碗饭',
              tips: '月售151份 好评率96%',
              price: '￥30'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '巨无霸大套餐',
              tips: '月售141份 好评率100%',
              price: '￥23'
            }
          ]
        },
        {
          name: '开心乐园餐',
          id: 'id7',
          items: [
            {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡中套餐',
              tips: '月售178份 好评率100%',
              price: '￥29'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '麦辣鸡腿汉堡大套餐',
              tips: '月售166份 好评率95%',
              price: '￥33'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/ff3ede16-b96b-4dac-96a3-f3b1ced11dbc.png',
              title: '那么大鸡排满碗饭',
              tips: '月售151份 好评率96%',
              price: '￥30'
            }, {
              imgSrc: 'http://images.uileader.com/20171210/76e376bb-ebbf-497d-a61f-52232dd8c316.png',
              title: '巨无霸大套餐',
              tips: '月售141份 好评率100%',
              price: '￥23'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleScroll (scrollTop) {
      if (scrollTop === 110) {
        this.stopscroll = ''
        this.range = scrollTop / 2 + 10 + 'px'
      } else if (scrollTop === 0) {
        this.stopscroll = 'stopscroll'
      }

      if (scrollTop > 50) {
        this.opacityText = 1
        this.opacity = 1 - this.opacityText
      } else {
        var val = scrollTop / 50
        this.opacityText = val
        this.opacity = 1 - this.opacityText
      }
      this.rangetext1 = -scrollTop / 4 + 2.5 + 'px'
      if (this.rangetext1 < -25) {
        this.rangetext1 = -25
      }

      this.scaleval = `scale(${this.scaleval - 0.1})`
      if (this.scaleval <= 0.7) {
        this.scaleval = `scale(0.7)`
      }
      this.rangetext2 = scrollTop / 9 + 'px'
      if (this.rangetext2 > 12) {
        this.rangetext2 = 12
      }

      this.opacityText = 1 - this.opacity
 
    },
    scroll (y, key) {
      if (y > 0) {
        // //滚动容器没有滚动到最上方
        this.scrollTop = '1'
      } else {
        // 滚动容器滚动到最上方
        this.scrollTop = '0'
      }
      let top = Math.abs(y)
      var length = this.swiper.length
      for (var i = 0; i <= length - 1; i++) {
        if (top >= this.swiper[i].top - 10) {
          this.current = i
        }
      }
    },
    handleChange (index, key) {
      this.toView = 'id' + index
      this[key] = index
    },
    touchstart (e) {

    },
    navigateBack () {
      ui.navigateBack()
    }
  },
  mounted () {
    let arr = []
    let sum = 0
    let length = this.swiper.length
    for (var i = 0; i < length; i++) {
      arr.push(this.swiper[i].items.length)
      if (i === 0) {
        this.swiper[i].top = 0
      } else {
        sum += arr[i - 1]
        this.swiper[i].top = 84 * sum + 32 * i
      }
    }
  }
}
