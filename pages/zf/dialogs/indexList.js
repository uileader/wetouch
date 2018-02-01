const currencyUrl = '/zf_crm/interface/listCurrency.do'
export default {
  data () {
    return {
      list:[
        {
          index: 'Top',
          items: []
        }
      ],
      common:[],
      select: '',
      currency: '',
      currencyId:''
    }
  },
  methods: {
    singleselect (e) {
      this.select = this.list[e.index].items[e.dataIndex].name
      this.currencyId = this.list[e.index].items[e.dataIndex].currencyId
      this.hideDialog()
    },
    tapTag (index) {
      this.select = this.common[index].text
      this.currencyId = this.common[index].currencyId
      this.hideDialog()
    },
    hideDialog(){
      ui.hideDialog({
        currency: {
          currencyName: this.select,
          currencyId: this.currencyId
        }
      })
    },
  },
  mounted(){
    this.$DialogOpen((data) => {
      if (data && data.currency) {
        console.log(data)
        this.select = data.currency
      }
    })
    // 币种列表
    ui.request({
      url: currencyUrl,
      data: {},
      success: (result) => {
        let obj = JSON.parse(result.data.result)
        let objIndex=[
          'A', 'B', 'C', 'D', 'E', 'F', 'G',
          'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
          'V', 'W', 'X', 'Y', 'Z'
        ]
        result.data.common.forEach((item, index) => {
          let content = {
            text: item.currencyName, 
            currencyId: item.currencyId,
            tagClass: 'tag2', 
            tagSelectedClass: 'select-class', 
            checked: false
          }
          this.common.push(content)
        })
        objIndex.forEach((item, index) => {
          if (obj[item].length>0){
            let content = {
              index: item,
              items: obj[item]
            }
            this.list.push(content)
          }
        });
        console.log(this.list)
      },
      fail: (errMsg) => {
        console.log(errMsg)
      }
    })
  }
}
