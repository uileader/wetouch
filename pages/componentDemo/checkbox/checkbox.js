export default {
  data () {
    return {
      value1: true,
      value2: false,
      items: [
        { name: 'USA', value: '美国' },
        { name: 'CHN', value: '中国', checked: true },
        { name: 'BRA', value: '巴西', checked: true }
      ],
      items2: [
        { name: 'USA', value: '美国', checked: false },
        { name: 'CHN', value: '中国', checked: false },
        { name: 'BRA', value: '巴西', checked: false }
      ],
      textdata: [
        {
          title: 'CEO如何避免决策错误',
          duration: '时长01:43',
          size: '600kb'
        }, {
          title: '认知多样性更能提高团队效率',
          duration: '时长02:17',
          size: '824kb'
        }, {
          title: '如何驾驭性格中的阴暗面',
          duration: '时长02:43',
          size: '748kb'
        }
      ]
    }
  },
  methods: {
    checkboxChange (obj) {
      ui.showToast({ title: obj.value.join(',') + '，当前点击的选中结果：' + obj.current.checked })
    },
    checkAll (obj) {
      if (obj.checked) {
        this.items2.forEach((item, index) => {
          item.checked = true
        })
      } else {
        this.items2.forEach((item, index) => {
          item.checked = false
        })
      }
    }
  }
}
