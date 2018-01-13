// picker.js
let getDoubleNumber = function (num) {
  return num < 10 ? '0' + num : '' + num
}
import cityList from '#/static/data/address'
export default {
  data () {
    return {
      list: ['中国', '美国', '巴西', '日本'],
      value: 1,
      timeValue: '00:12',
      dataValue: '2017-09-05',
      phones: [['小米', 'iPhone', '华为', '三星'], ['小米1', 'iPhone2', '华为3', '三星4']],
      cityValue1: ['110000', '110107'],
      cityValue2: ['330000', '330100'],
      cityValue: cityList,
      value1: null,
      value2: null,
      value3: ['food', 'chafing dish', 'SiChuan chafing dish'],
      departments: [{
        name: '采购部',
        value: 'DP_01',
        children: [
          { name: '采购一科', value: 'DP_0101' },
          { name: '采购二科', value: 'DP_0102' },
          { name: '采购三科', value: 'DP_0103' }
        ]
      }, {
        name: '制造部',
        value: 'DP_02',
        children: [
          { name: '制造一科', value: 'DP_0201' },
          { name: '制造二科', value: 'DP_0202' },
          { name: '制造三科', value: 'DP_0203' }
        ]
      }],
      relaxes: [{
        name: '美食',
        value: 'food',
        children: [
          {
            name: '火锅',
            value: 'chafing dish',
            children: [
              { name: '川味火锅', value: 'SiChuan chafing dish' },
              { name: '老北京火锅', value: 'Beijing chafing dish' },
              { name: '牛肉火锅', value: 'Beef chafing dish' }
            ]
          }, {
            name: '西餐',
            value: 'western food',
            children: [
              { name: '意大利菜', value: 'Italy food' },
              { name: '法国菜', value: 'France food' },
              { name: '汉堡', value: 'Hamburg' }
            ]
          }
        ]
      }, {
        name: '旅游',
        value: 'tour',
        children: [
          {
            name: '周边游',
            value: 'tour around',
            children: [
              { name: '景点', value: 'Scenic spot' },
              { name: '公园', value: 'Park' },
              { name: '名胜古迹', value: 'Historical sites' }
            ]
          }, {
            name: '海外游',
            value: 'tour aboard',
            children: [
              { name: '美国游', value: 'American tour' },
              { name: '欧洲游', value: 'Europe tour' },
              { name: '东南亚游', value: 'Southease Asia tour' }
            ]
          }
        ]
      }]
    }
  },
  methods: {
    resetPicker () {
      this.value = 0
    },
    resetPicker2 () {
      this.timeValue = '00:00'
    },
    resetPicker3 () {
      let today = new Date()
      let year = today.getFullYear() + ''
      let month = getDoubleNumber(today.getMonth() + 1)
      let day = getDoubleNumber(today.getDate())

      this.dataValue = year + '-' + month + '-' + day
    },
    resetPicker4 () {
      this.cityValue1 = ['110000', '110100', '110106']
    },
    resetPicker5 () {
      this.cityValue2 = ['440000', '440300']
    },
    handleChange (val) {
      this.value = val
    },
    handleChange1 (val) {
    },
    handleChange2 (val) {
    },
    handleChange3 (val) {
    },
    handleChange4 (val) {
      this.timeValue = val
    },
    handleChange5 (val) {
      this.dataValue = val
    },
    handleChange6 (val) {
      this.cityValue1 = val
    },
    handleChange7 (val) {
      this.cityValue2 = val
    },
    columnchange () {
    }
  }
}
