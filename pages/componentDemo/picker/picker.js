// picker.js
let getDoubleNumber = function (num) {
  return num < 10 ? '0' + num : '' + num
}
import cityList from '#/static/data/address'
export default {
  data () {
    return {
      list00: ['中国', '美国', '日本', '巴西'],
      value: 1,
      list01: [{
        name: '中国',
        value: 'CN'
      }, {
        name: '美国',
        value: 'US'
      }, {
        name: '日本',
        value: 'JP'
      }, {
        name: '巴西',
        value: 'BR'
      }],
      value01: 1,
      timeValue: '00:12',
      dataValue: '2017-09-05',
      phones: [['小米', 'iPhone', '华为', '三星'], ['小米1', 'iPhone2', '华为3', '三星4']],
      cityValue1: ['110000', '110107'],
      cityValue2: ['330000', '330100'],
      cityValue: cityList,
      value1: null,
      value2: null,
      value3: ['food', 'chafing dish', 'Beijing chafing dish'],
      departments: [{
        text: '采购部',
        value: 'DP_01',
        children: [
          { text: '采购一科', value: 'DP_0101' },
          { text: '采购二科', value: 'DP_0102' },
          { text: '采购三科', value: 'DP_0103' }
        ]
      }, {
        text: '制造部',
        value: 'DP_02',
        children: [
          { text: '制造一科', value: 'DP_0201' },
          { text: '制造二科', value: 'DP_0202' },
          { text: '制造三科', value: 'DP_0203' }
        ]
      }],
      relaxes: [{
        text: '美食',
        value: 'food',
        children: [
          {
            text: '火锅',
            value: 'chafing dish',
            children: [
              { text: '川味火锅', value: 'SiChuan chafing dish' },
              { text: '老北京火锅', value: 'Beijing chafing dish' },
              { text: '牛肉火锅', value: 'Beef chafing dish' }
            ]
          }, {
            text: '西餐',
            value: 'western food',
            children: [
              { text: '意大利菜', value: 'Italy food' },
              { text: '法国菜', value: 'France food' },
              { text: '汉堡', value: 'Hamburg' }
            ]
          }
        ]
      }, {
        text: '旅游',
        value: 'tour',
        children: [
          {
            text: '周边游',
            value: 'tour around',
            children: [
              { text: '景点', value: 'Scenic spot' },
              { text: '公园', value: 'Park' },
              { text: '名胜古迹', value: 'Historical sites' }
            ]
          }, {
            text: '海外游',
            value: 'tour aboard',
            children: [
              { text: '美国游', value: 'American tour' },
              { text: '欧洲游', value: 'Europe tour' },
              { text: '东南亚游', value: 'Southease Asia tour' }
            ]
          }
        ]
      }]
    }
  },
  methods: {
    resetPicker00 () {
      this.value00 = 0
    },
    resetPicker01 () {
      this.value01 = 0
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
    }
  }
}
