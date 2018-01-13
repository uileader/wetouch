export default {
  data () {
    return {
      value1: [40, 80, 70],
      colorArray: ['#F40064', '#A9FF09', '#3EFDC5'],
      labels: ['站立', '锻炼', '活动'],
      index: '',

      value2: [60, 70, 80, 90],
      colorArray2: ['#FF9E6F', '#2284F0', '#1160E3', '#1345DF'],
      backgroundColor2: 'rgba(26,39,72,0.5)',

      value4: [70, 60, 50, 40, 30],
      colorArray4: ['#3EFEC4', '#33D9DF', '#30CEE5', '#28B3E9', '#2196E2'],
      backgroundColor4: 'rgba(255,255,255,0)',
      labels4: ['成本输出', '数量', '价格', '盈利', '盈利']
    }
  },
  methods: {
    getCircular (val) {
       // 得到点击的环的index
      this.index = this.value1[val]
    }
  },
  mounted () {

  }
}
