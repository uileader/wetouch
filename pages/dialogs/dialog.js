export default {
  data () {
    return {
      country: '',
      countryList: ['中国', '日本', '美国', '英国'],
      checklist: []
    }
  },
  mounted () {
    this.$DialogOpen((data) => {
      if (data && data.country) {
        this.country = data.country
        this.checklist = [this.country]
      }
    })
  },

  methods: {
    changeCountry (val) {
      this.country = val.join('-')
    },
    confirmSelect () {
      // 调用ui.hideDialog关闭窗体，并回传数据
      ui.hideDialog({ country: this.country })
    }
  }
}
