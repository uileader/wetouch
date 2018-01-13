// accordion.js
export default {
  data () {
    return {
      accordion: [
        {
          title: '排除重大事故',
          number: 20,
          state: 'abnormal',
          stateNum: 5,
          content: [
            {
              title: '防火墙无火烧或熏黑痕迹'
            },
            {
              title: '发动机线束无火烧或熏黑痕迹'
            },
            {
              title: '车辆覆盖件无火烧或熏黑痕迹'
            },
            {
              title: '舱内保险丝盒无火烧或熏黑痕迹'
            }
          ]
        }, {
          title: '排除水泡车',
          number: 8,
          state: 'normal',
          stateNum: 5,
          content: [
            {
              title: '防火墙无火烧或熏黑痕迹'
            },
            {
              title: '发动机线束无火烧或熏黑痕迹'
            },
            {
              title: '车辆覆盖件无火烧或熏黑痕迹'
            },
            {
              title: '舱内保险丝盒无火烧或熏黑痕迹'
            }
          ]
        }, {
          title: '排除水泡车',
          number: 8,
          state: 'normal',
          stateNum: 5,
          content: [
            {
              title: '防火墙无火烧或熏黑痕迹'
            },
            {
              title: '发动机线束无火烧或熏黑痕迹'
            },
            {
              title: '车辆覆盖件无火烧或熏黑痕迹'
            },
            {
              title: '舱内保险丝盒无火烧或熏黑痕迹'
            }
          ]
        }
      ]
    }
  },
  methods: {
    slide (e) {
      console.log(e)
    }
  }
}
