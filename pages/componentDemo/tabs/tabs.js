export default {
  data () {
    return {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0,
      current6: 0,
      current7: 0,
      current8: 0,
      current9: 0,
      current11: 0,
      current12: 0,
      showBadge3: true,
      show8_1:true,
      show8_2:false
    }
  },
  methods: {
    handleChange (index, key) {
      this[key] = index
    },
    handleChange8 (index) {
      // console.log(index, key)
      if(index){
        this.show8_1=false
        this.show8_2=true
      }else{
        this.show8_1=true
        this.show8_2 = false
      }
    },
    handleContentChange (index, key) {
      console.log(index, key)
      this[key] = index
      if(key==="current4"){
        this.showBadge3 = false
      }
    },
    hideBadge3 () {
      this.showBadge3 = false
    }
  }
}
