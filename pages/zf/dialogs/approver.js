// listccUser
let approvalUserUrl = '/zf_crm/interface/findExpendApprovalUser.do'
export default {
  data () {
    return {
      contentHeight: ui.DEFAULT_CONTENT_HEIGHT,
      memberList: [],
      approvers: []
    }
  },
  methods: {
    hideWindow (e) {
      ui.hideDialog()
    },
    choose (index) {
      this.approvers = []
      let info = {
        head: this.memberList[index].head,
        userName: this.memberList[index].userName,
        userId: this.memberList[index].userId
      }
      this.approvers.push(info)
      ui.hideDialog({
        approvers: this.approvers
      })
    }
  },
  // 抄送人列表
  mounted () {
    ui.request({
      url: approvalUserUrl,
      data: {},
      success: (result) => {
        console.log(result)
        result.data.result.forEach((item, index) => {
          let list
          if (item.head === null) {
            list = {
              head: require('#/images/portrait_bg.png'),
              userName: item.userName,
              userId: item.userId
            }
          } else {
            list = {
              head: item.head,
              userName: item.userName,
              userId: item.userId
            }
          }
          this.memberList.push(list)
        })
      },
      fail: (errMsg) => {

      }
    })
  }
}
