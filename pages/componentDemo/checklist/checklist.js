export default {
  data () {
    return {
      labelPosition: '',
      countryList: ['中国', '香港', '澳大利亚'],
      checklist1: ['中国'],
      checklist2: [],
      checklist3: [],
      checklist4: [],
      checklist5: [],
      checklist6: [],
      checklist7: [],
      checklist8: ['中国'],
      checklist9: [],
      objectList: [{
        key: 'SZ',
        value: '深圳'
      }, {
        key: 'GZ',
        value: '广州'
      }, {
        key: 'ZH',
        value: '珠海'
      }, {
        key: 'ST',
        value: '汕头'
      }],
      objectListValue: ['SZ'],
      inlineDescList: [
        {key: '1', value: '广东', subTitle: '深圳，广州，东莞'},
        {key: '2', value: '浙江', subTitle: '杭州，宁波，嘉兴'},
        {key: '3', value: '江苏', subTitle: '南京，苏州，无锡'}
      ],
      inlineDescListValue: ['1'],
      inlineDescListValue2: ['1']
    }
  },
  methods: {
    change (val) {
      ui.showToast({ title: val.join(',') })
    }
  }
}
