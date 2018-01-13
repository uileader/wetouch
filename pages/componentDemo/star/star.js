// star.js

export default {
  data () {
    return {
      stars: {
        normalSrc: require('#/images/star/starnone.png'),
        selectedSrc: require('#/images/star/starfull2.png'),
        halfSrc: require('#/images/star/starhalf.png')
      },
      stars1: {
        normalSrc: require('#/images/star/sad.png'),
        selectedSrc: require('#/images/star/smile.png')
      },
      stars3: {
        normalSrc: require('#/images/star/starnone.png'),
        selectedSrc: require('#/images/star/starfull2.png')
      },
      starResult: '感觉怎么样，打个分吧',
      starResult1: '感觉怎么样，打个分吧'
    }
  },
  methods: {
    handleStar (index) {
      if (index === 1) {
        this.starResult = '非常差，不会再来'
      } else if (index === 2) {
        this.starResult = '感觉很一般'
      } else if (index === 3) {
        this.starResult = '满意，感觉不错'
      } else if (index === 4) {
        this.starResult = '很满意，下次还要来'
      } else if (index === 5) {
        this.starResult = '非常棒，值得推荐给朋友'
      }
    },
    handleStar1 (index) {
      if (index === 1) {
        this.starResult1 = '非常差，不会再来'
      } else if (index === 2) {
        this.starResult1 = '感觉很一般'
      } else if (index === 3) {
        this.starResult1 = '满意，感觉不错'
      } else if (index === 4) {
        this.starResult1 = '很满意，下次还要来'
      } else if (index === 5) {
        this.starResult1 = '非常棒，值得推荐给朋友'
      }
    },
    bindcolor (index) {
      if (index <= 2) {
        this.stars3.selectedSrc = require('#/images/star/starfull1.png')
      } else if (index <= 4) {
        this.stars3.selectedSrc = require('#/images/star/starfull2.png')
      } else if (index = 5) {
        this.stars3.selectedSrc = require('#/images/star/starfull3.png')
      }
    }
  },
  mounted () {

  }
}
