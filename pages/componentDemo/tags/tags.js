
export default {
  data () {
    return {
      list0: [{
        text: '速度与激情8',
        tagClass: 'tag-before-0'
      }, {
        text: '铁道飞虎',
        tagClass: 'tag-before-0'
      }, {
        text: '罗曼蒂克消亡史',
        tagClass: 'tag-before-0'
      }, {
        text: '绑架者',
        tagClass: 'tag-before-0'
      }, {
        text: '地心引力',
        tagClass: 'tag-before-0'
      }, {
        text: '一条狗的使命',
        tagClass: 'tag-before-0'
      }],
      list00: [{
        text: '速度与激情8',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: true
      }, {
        text: '铁道飞虎',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '罗曼蒂克消亡史',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '绑架者',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '地心引力',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '一条狗的使命',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      list1: [{
        text: '热门',
        tagClass: 'tag-before-1'
      }, {
        text: '小吃快餐',
        tagClass: 'tag-before-1'
      }, {
        text: '面包甜点',
        tagClass: 'tag-before-1'
      }, {
        text: '北京菜',
        tagClass: 'tag-before-1'
      }, {
        text: '川菜',
        tagClass: 'tag-before-1'
      }, {
        text: '韩国料理',
        tagClass: 'tag-before-1'
      }, {
        text: '江浙菜',
        tagClass: 'tag-before-1'
      }, {
        text: '江浙菜',
        tagClass: 'tag-before-1'
      }],

      list2: [{
        text: '微型车',
        tagClass: 'tag-before-2',
        tagSelectedClass: 'select-class3',
        icon: 'plus2',
        iconSelected: 'duigou',
        checked: true
      }, {
        text: '小型车',
        tagClass: 'tag-before-2',
        tagSelectedClass: 'select-class3',
        icon: 'plus2',
        iconSelected: 'duigou',
        checked: true
      }, {
        text: '紧凑型',
        tagClass: 'tag-before-2',
        tagSelectedClass: 'select-class3',
        icon: 'plus2',
        iconSelected: 'duigou',
        checked: false
      }, {
        text: '中型车',
        tagClass: 'tag-before-2',
        tagSelectedClass: 'select-class3',
        icon: 'plus2',
        iconSelected: 'duigou',
        checked: false
      }, {
        text: '大中型',
        tagClass: 'tag-before-2',
        tagSelectedClass: 'select-class3',
        icon: 'plus2',
        iconSelected: 'duigou',
        checked: false
      }, {
        text: '豪华车',
        tagClass: 'tag-before-2',
        tagSelectedClass: 'select-class3',
        icon: 'plus2',
        iconSelected: 'duigou',
        checked: false
      }],

      list3: [{
        text: '大众',
        tagClass: 'tag-before-3',
        icon: 'close'
      }, {
        text: '朗逸',
        tagClass: 'tag-before-3',
        icon: 'close'
      }, {
        text: '10-15万',
        tagClass: 'tag-before-3',
        icon: 'close'
      }],
      list4: [{
        text: '品牌商家',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#fc4f4f',
        checked: true
      }, {
        text: '外卖保',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#FFAC2A',
        checked: false
      }, {
        text: '新店',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#3399ff',
        checked: false
      }, {
        text: '开发票',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#fed009',
        checked: false
      }, {
        text: '在线支付',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#41c4c9',
        checked: false
      }],
      list5: [{
        text: '品牌商家',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#fc4f4f',
        checked: true
      }, {
        text: '外卖保',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#FFAC2A',
        checked: false
      }, {
        text: '新店',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#3399ff',
        checked: false
      }, {
        text: '开发票',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#3399ff',
        checked: false
      }, {
        text: '在线支付',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-5',
        icon: 'circle',
        iconSelected: 'circle',
        iconColor: '#41c4c9',
        checked: false
      }],
      list6: [{
        text: '新用户优惠',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: true,
        badge: [{
          'badge-text': '新',
          'badge-class': 'badge-class-0'
        }]
      }, {
        text: '特价商品',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '特',
          'badge-class': 'badge-class-1'
        }]
      }, {
        text: '下单立减',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '减',
          'badge-class': 'badge-class-2'

        }]
      }, {
        text: '赠品优惠',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '赠',
          'badge-class': 'badge-class-3'

        }]
      }, {
        text: '下单返券',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '返',
          'badge-class': 'badge-class-4'

        }]
      }, {
        text: '进店领券',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '领',
          'badge-class': 'badge-class-5'

        }]
      }],
      list7: [{
        text: '新用户优惠',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: true,
        badge: [{
          'badge-text': '新',
          'badge-class': 'badge-class-6'
        }]
      }, {
        text: '特价商品',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '特',
          'badge-class': 'badge-class-7'
        }]
      }, {
        text: '下单立减',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '减',
          'badge-class': 'badge-class-8'

        }]
      }, {
        text: '赠品优惠',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '赠',
          'badge-class': 'badge-class-9'

        }]
      }, {
        text: '下单返券',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '返',
          'badge-class': 'badge-class-10'

        }]
      }, {
        text: '进店领券',
        tagClass: 'tag-before-5',
        tagSelectedClass: 'tag-after-6',
        checked: false,
        badge: [{
          'badge-text': '领',
          'badge-class': 'badge-class-11'
        }]
      }],
      list8: [
        {
          text: '早餐', tagClass: 'tag-6', tagSelectedClass: 'select-class2', checked: false
        },
        {
          text: '午餐', tagClass: 'tag-6', tagSelectedClass: 'select-class2', checked: false
        },
        {
          text: '下午茶', tagClass: 'tag-6', tagSelectedClass: 'select-class2', checked: false
        },
        {
          text: '晚餐', tagClass: 'tag-6', tagSelectedClass: 'select-class2', checked: false
        },
        {
          text: '夜宵', tagClass: 'tag-6', tagSelectedClass: 'select-class2', checked: false
        }
      ],
      fullWidth: false,
      showPop: true,
      selectValue: []
    }
  },
  methods: {
    singleTap (opt) {
      ui.showToast({
        title: this.list00[opt].text
      })
      this.list00.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    multipleTap (opt) {
      this.list2[opt].checked = !this.list2[opt].checked
    },
    sure () {
      var a = this.list2.filter((item, index) => {
        return item.checked
      })
      this.selectValue = a
      var str = a.map((item, index) => {
        return item.text
      }).join(',')
      ui.showToast({
        title: str || '未选择任何标签'
      })
    },
    cancel () {
      this.list2.forEach((item, index) => {
        item.checked = false
      })
    },
    delate (opt) {
      this.list3 = this.list3.filter((item, index) => {
        return index != opt
      })
      var str = this.list3.map((item, index) => {
        return item.text
      }).join(',')
      ui.showToast({
        title: str ? `还剩：` + str : '该组已经没有标签'
      })
    },
    multipleTap1 (opt) {
      this.list4[opt].checked = !this.list4[opt].checked
    },
    multipleTap2 (index) {
      this.list8[index].checked = !this.list8[index].checked
    },
    multipleTap3 (opt) {
      this.list9[opt].checked = !this.list9[opt].checked
    },
    singleTap1 (opt) {
      this.list5.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    singleTap2 (opt) {
      this.list6.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    singleTap3 (opt) {
      this.list7.forEach((item, index) => {
        item.checked = (index === opt)
      })
    }
  }
}
