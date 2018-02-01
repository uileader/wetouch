// note.js
const listSubjectUrl = '/zf_crm/interface/listSubject.do'
const findSubsidyUrl ='/zf_crm/interface/findSubsidy.do'
const projectUrl = '/zf_crm/interface/listProject.do'
const listAddressUrl = '/zf_crm/interface/listAddress.do'
const expendSubmitUrl='/zf_crm/interface/expendSubmit.do'


const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]

export default {
  data () {
    return {
      statusBarHeight: ui.STATUS_BAR_HEIGHT,
      headerHeight: ui.DEFAULT_HEADER_HEIGHT,
      radioCalendar: false,
      radioDate: '',
      radioYear: '',
      radioMonth: '',
      radioDay: '',
      // 时间对象，存储临时变化的时间
      dateobj: {},
      // 时间可选范围
      monthrange: [],

      
      projectList: ['请选择', '保险', '出国', '打车', '住宿'],
      projectValue: 0,
      currencyList: ['请选择', '人民币', '美元', '英镑', '日元'],
      currencyValue: 0,
      currency:'请选择',
      siteIndex: null,
      siteList: [
        {
          name: '请选择',
          value: '1',
          children: [
            { name: '', value: '000' }
          ]
        }
      ],
      //类别／明细
      sortIndex: null,
      sortList: [
        {
          name: '请选择',
          value: '请选择',
          children: [
            { name: '', value: '000' }
          ]
        }
      ],
      forIndex1: null,
      forIndex2:null,

      //补助
      subsidy:'',
      typeType:'',
      rate:null,//汇率

     
      rangeCalendar: false,
      height: ui.WIN_HEIGHT,
      rangeDate: '',
      // 时间差
      day: 0,
      dayShow: false,

      // 新建
      categoryList: ['请选择', '类别1', '类别2', '类别3', '类别4'],
      categoryValue: 0,
      detailList: ['请选择', '明细1', '明细2', '明细3', '明细4'],
      detailValue: 0,
      money: '',
      info: [],
      el: 0,
      expendform: [{
        currency:'请选择',
        currencyId: null,
        expendlist: [{
          subject1: '请选择',
          subject2: '请选择',
          subject3: '',
          money: null,
          imgs:''
        }]
      }],
      pickerIndex:0,
      fristAdd: true,
      //抄送人
      recipientsList: [],
      //审批人
      approverList:[],
      // 附件
      accessoryContent: [],
      imgs: [],

      //项目
      projectIdList:[],


      //提交需要的参数
      userName:'',
      userId:null,
      approvalUserId: null,
      ccuserIds: [],
      projectId:null,
      address1: null,
      address2: null,
      startTime2: '请选择',
      endTime2: '请选择',
      day: null,
      total: null,//总金额
      memo: null,  
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    radioinit (thisdate) {
      this.dateobj.radioDate = thisdate
      this.dateobj.radioDate = thisdate.split('/')
      console.log(this.dateobj)
      this.radioDate = this.dateobj.radioDate
      this.radioYear = this.dateobj.radioDate[0]
      this.radioMonth = this.dateobj.radioDate[1]
      this.radioDay = this.dateobj.radioDate[2]
    },
    selectedChange (e) {
      this.radioinit(e)
      setTimeout(() => {
        this.radioCalendar = false
      }, 300)
    },
    radioCalendaropen () {
      this.radioCalendar = true
      // ui.setStatusBarStyle({style: 'light'})
    },
    handleSelect (key) {
      console.log(key)
      this[key] = false
      if (key === 'rangeCalendar') {
        ui.setStatusBarStyle({ style: 'light' })
      } else if (key === 'rangeCalendarDefault') {
        ui.setStatusBarStyle({ style: 'light' })
      }
    },
    format (obj) {
      var date = new Date(obj)
      var y = 1900 + date.getYear()
      var m = '0' + (date.getMonth() + 1)
      var d = '0' + date.getDate()
      return y + '/' + m.substring(m.length - 2, m.length) + '/' + d.substring(d.length - 2, d.length)
    },
    handleChange (val) {
      console.log('val change', val)
      this.projectId = this.projectIdList[val]
      // this.value = val
    },
    handleChange2 () {
      this.isSite = true
    },
    handleChange3 () {
      // this.value = val
    },
    siteChange (val) {
      console.log('val change', val)
      this.address1 = val[0]
      this.address2=val[1]
    },
    // 出差时间-----------------------
    // 双选打开
    rangeCalendaropen (state) {
      this.rangeCalendar = true
      ui.setStatusBarStyle({ style: 'dark' })
    },
    selectedStartHandler (e) {
      this.rangeDate = e
      console.log(e)
    },
    selectedEndHandler (e) {
      this.dateobj.rangedate = e
      setTimeout(() => {
        this.rangeCalendar = false
        ui.setStatusBarStyle({ style: 'light' })
      }, 500)
      this.calculationDays()
      this.rangeinit(this.dateobj)
    },
    failedHandler (err) {
      if (err === 1) {
        ui.showToast({ title: '您选择的时间超过30天,请重新选择' })
      }
    },
    // 范围选择，根据选择日期，计算几晚
    calculationDays () {
      let start, end
      start = Date.parse(this.dateobj.rangedate[0])
      end = Date.parse(this.dateobj.rangedate[1])
      this.day = Math.floor((end - start) / (24 * 3600 * 1000))
      this.dayShow = true

    },
    // 单选将改变的时间，赋值给时间。
    rangeinit (thisdate) {
      let start, end
      this.dateobj.rangestart = thisdate.rangedate[0]
      this.dateobj.rangeend = thisdate.rangedate[1]
      start = this.dateobj.rangestart.split('/')
      end = this.dateobj.rangeend.split('/')
      console.log(start, end)
      this.startTime2 = `${start[0]}-${start[1]}-${start[2]}`
      this.endTime2 = `${end[0]}-${end[1]}-${end[2]}`
    },

    // 新增报销单
    addExpenseList (index) {
      let content = {
        currency: '请选择',
        currencyId: null,
        expendlist: [{
          subject1: '请选择',
          subject2: '请选择',
          subject3: '',
          money: null,
          imgs: ''
        }]
      }
      this.expendform.push(content)
    },
    // 新增报销单明细
    addExpense(index) {
      let listContent = {
        subject1: '请选择',
        subject2: '请选择',
        subject3: '',
        money: null,
        imgs: ''
      }
      this.expendform[index].expendlist.push(listContent)
    },
    // 删除报销单明细
    detailDelete(index1, index2) {
      console.log(index1, index2)
      this.expendform[index1].expendlist.splice(index2, 1)
    },
    // 导入报销单明细
    chooseExpense (index) {
      if (this.expendform[index].currency==='请选择'){
        ui.showToast({
          title:'请选择币种'
        })
      }else{
        import(`#/pages/dialogs/detailList.ui`).then((content) => {
          ui.showDialog({
            content: content,
            data: {
              currencyId: this.expendform[index].currencyId
            },
            // 接收ui.hideDialog回传的数据
            onHide: (data) => {
              if (data && data.list) {
                console.log('接收返回的参数', data)
                data.list.forEach((item, index2) => {
                  this.expendform[index].expendlist.push(item)
                })
                console.log(this.expendform)
              }
            }
          })
        })
      }
    },
    //添加审批人
    addApprovers() {
      if (this.approvalUserId.length > 1) {
        ui.showToast({ title: '审批人只能为一人,请删除后添加' })
      }else{
        import(`#/pages/dialogs/approver.ui`).then((content) => {
          ui.showDialog({
            content: content,
            statusBarColor: 'black',
            data: {},
            // 接收ui.hideDialog回传的数据
            onHide: (data) => {
              console.log('接收返回的参数', data)
              if (data && data.approvers) {
                data.approvers.forEach((item, index) => {
                  this.approverList.push(item)
                  this.approvalUserId.push(item.userId)
                })
              }
            }
          })
        })
      }
    },
    //添加抄送人
    addRecipients () {
      import(`#/pages/recipients/recipients.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          data: {},
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            console.log('接收返回的参数', data)
            if (data && data.recipients) {
              data.recipients.forEach((item, index) => {
                if (this.ccuserIds.length < 1) {
                  this.recipientsList.push(item)
                  this.ccuserIds.push(item.userId)
                } else {
                  this.ccuserIds.forEach((item2, index2) => {
                    if (item.userId === item2) {
                      ui.showToast({ title: '请勿选择同一个抄送人！' })
                    } else {
                      this.recipientsList.push(item)
                      this.ccuserIds.push(item.userId)
                    }
                  })
                }
              })
            }
          }
        })
      })
    },
    //删除审批人
    deleteApprovers (index) {
      console.log(index)
      this.recipientsList.splice(index, 1)
      this.ccuserIds.splice(index, 1)
    },
    //删除抄送人
    deleteRecipients(index) {
      console.log(index)
      this.recipientsList.splice(index, 1)
      this.ccuserIds.splice(index, 1)
    },
    sortChange(val) {
      console.log('val change', val)
       //this.$forceUpdate()
      //  if (val[0] !=='请选择'){
      //    this.expendform[this.forIndex1].expendlist[this.forIndex2].subject1 = val[0]
      //    this.expendform[this.forIndex1].expendlist[this.forIndex2].subject2=val[1]
      //  }
      console.log(this.expendform)
    },
    forIndex(forIndex1, forIndex2){
      this.forIndex1 = forIndex1
      this.forIndex2 = forIndex2
    },
    showIndexList(index) {
      import(`#/pages/dialogs/indexList.ui`).then((content) => {
        ui.showDialog({
          content: content,
          statusBarColor: 'black',
          data: {
            currency: this.expendform[index].currency
          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {
            if (data && data.currency) {
              console.log(data.currency)
              this.expendform[index].currency = data.currency.currencyName
              this.expendform[index].currencyId = data.currency.currencyId
              console.log(this.expendform)
            }
          }
        })
      })
    },
   

    //添加附件
    addAccessory(index1, index2) {
      this.chooseImage(index1, index2, 2)
    },
    chooseImage(index1, index2, typeNumebr) {
      ui.chooseImage({
        sourceType: sourceType[typeNumebr],
        sizeType: sizeType[1],
        success: (res) => {
          console.log(res)
          res.tempFilePaths.forEach((item, index) => {
            this.expendform[index1].expendlist[index2].imgs.push(item)
          });
        },
        fail: (res) => {

        }
      })
    },

    //提交
    expendSubmit(){
      let data={
        userId: this.userId,
        approvalUserId:'',
        projectId: this.projectId,
        address1: this.address1,
        address2: this.address2,
        startTime2: this.startTime2,
        endTime2: this.endTime2,
        day: this.day,
        total: this.total,
        memo: this.memo,  //还少一个抄送人id
        ccuserIds: this.ccuserIds.join(','),
        expendform: this.expendform.toString()
      }
      ui.request({
        url: expendSubmitUrl,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: data,
        success: (result) => {
          ui.hideLoading()
          console.log('1', result)
          if (result.data.error_code === 0) {
            ui.showToast({ title: '提交成功', icon: 'success' })
          } else {
            ui.showToast({ title: '提交失败' })
          }
        },
        fail: (errMsg) => {
          console.log('2', errMsg)
          ui.hideLoading()
        }
      })
    }

  },
  created () {
    // 计算时间范围
    let radiodate = new Date()
    let rangedate = new Date()
    this.radioDate = this.format(Date.parse(radiodate))
    let start, end
    start = this.format(rangedate.setMonth(new Date().getMonth()))
    end = this.format(rangedate.setMonth(new Date().getMonth() + 6))
    start = start.substring(0, 7)
    end = end.substring(0, 7)
    this.monthrange.push(start, end)
  },
  mounted () {
    let zfUserInfo = ui.getStorageSync('zfUserInfo')
    this.userName = zfUserInfo.userName
    this.userId = zfUserInfo.userId
    // 报销类别／明细
    ui.request({
      url: listSubjectUrl,
      data: {},
      success: (result) => {
        //  console.log(result)
        result.data.result.forEach((item, index) => {
          this.sortList.push(item)
        })
      },
      fail: (errMsg) => {
        console.log(errMsg)
      }
    })

    // 项目列表
    ui.request({
      url: projectUrl,
      data: {},
      success: (result) => {
         console.log(result)
        result.data.result.forEach((item, index) => {
          this.projectList.push(item.projectName)
          this.projectIdList.push(item.projectId)
        })
      },
      fail: (errMsg) => {
        console.log(errMsg)
      }
    })

    // 出差地址
    ui.request({
      url: listAddressUrl,
      data: {},
      success: (result) => {
        console.log('地址',result)
        result.data.result.forEach((item, index) => {
          this.siteList.push(item)
        })
      },
      fail: (errMsg) => {
        console.log(errMsg)
      }
    })

    //获取出差补助
    ui.request({
      url: findSubsidyUrl,
      data: {},
      success: (result) => {
        // console.log('补助',result.data)
        this.subsidy = result.data.result.money
        this.typeType = result.data.result.currencyName
        this.rate = result.data.result.rate
      },
      fail: (errMsg) => {
        console.log(errMsg)
      }
    })
  }
}
