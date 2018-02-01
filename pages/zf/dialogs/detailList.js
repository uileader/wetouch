// note.js
const myExpendList = '/zf_crm/interface/myExpendList.do'
export default {
  data () {
    return {
      infoList: [],
      checkList: [],
      pageLoad: {
        trigger: 'always',
        handle: () => {
        }
      },
      el: 0,
      userId:null,
      currencyId:null,
      checkboxGroup:null,
      checkboxContent:[]
    }
  },
  methods: {
    cancel () {
      this.cancelChecked()
      ui.hideDialog()
    },
    confirm () {
      this.cancelChecked()
      ui.hideDialog({
        list: this.checkboxContent
      })
    },
    cancelChecked(){
      this.checkboxGroup.forEach((item, index) => {
        this.infoList[item].checked=false
      })
    },
    
    // 解析后台返回的时间格式
    getLocalTime(tm) {
      var tt = new Date(tm).toLocaleString().replace(/\//g, '-')
      return tt
    },
    myExpendList() {
      // 获取明细列表
      this.infoList = []
      ui.request({
        url: myExpendList,
        data: {
          userId: this.userId,
          currencyId: this.currencyId
        },
        success: (result) => {
          console.log(result)
          console.log(this.infoList)
          // ui.setStorageSync('myExpendList', result.data.result)
          result.data.result.forEach((item, index) => {
            let newInfo = {
              height: 80,
              id: item.id,
              currencyId: item.currencyId,
              currencyName: item.currencyName,
              subject1: item.subject1,
              subject2: item.subject2,
              subject3: item.subject3,
              money: item.money,
              time: item.createTime,
              checked:false
            }
            this.infoList.push(newInfo)
          })
        },
        fail: (errMsg) => {
          console.log(errMsg)
        }
      })
    },
    checkbox(obj){
      console.log(obj)
      this.infoList[obj.current.value].checked = obj.current.checked
      this.checkboxContent=[]
      this.checkboxGroup=obj.value
      this.checkboxGroup.forEach((item,index)=>{
        this.checkboxContent.push(this.infoList[item])
      })
    }
  },
  mounted() {
    let zfUserInfo = ui.getStorageSync('zfUserInfo')
    this.userId = zfUserInfo.userId
    //获取传过来的币种id
    this.$DialogOpen((data) => {
      if (data && data.currencyId) {
        this.currencyId = data.currencyId
        this.myExpendList()
      }
    })
    
    
  }
}
