export default {
  data () {
    return {
      imageSrcArray: [],
      valueArray: [50, 15, 25, 10],
      colorArray: ['#F8882C', '#FBB936', '#FCCD1F', '#E23724'],
      text: '购物',
      money: '5000',
      textArray: ['购物', '出行', '交友', '理财'],
      moneyArray: ['5000', '1500', '2500', '1000']
    }
  },
  methods: {
    changeHandler (e) {
      this.text = this.textArray[e]
      this.money = this.moneyArray[e]
    }
  },
  created () {
    for (var i = 0; i < 4; i++) {
      this.imageSrcArray[i] = require(`#/images/slideDonut/${i + 1}.png`)
    }
  },
  mounted () {

  }
}
