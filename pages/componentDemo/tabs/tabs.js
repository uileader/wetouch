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
      showBadge3: true
    }
  },
  methods: {
    handleChange (index, key) {
      this[key] = index
    },
    handleContentChange (index, key) {
      this[key] = index
    },
    hideBadge3 () {
      this.showBadge3 = false
    }
  }
}
