// notice.js
export default {
  data () {
    return {
      list: [
        { height: 70, addressName: '丰台区马家堡搜宝商务中心3号楼1205', tel: 'TOUCH UI(先生)13716365888', switcher: 'off' }
      ]
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    del (index) {
      this.list[index].height = 0
      // 实际使用时将该项id传给后台即可，不需要在前台真正删除数据。
      // 前台直接删除数据会导致一些问题。
      // setTimeout(() => {
      //   this.list.splice(index, 1, {})
      // }, 500)
    },
    changeHandler (index) {
      for (var i = 0; i < this.list.length; i++) {
        if (i !== index) {
          this.list[i].switcher = 'off'
        }
      }
    },
    addAddress () {
      ui.navigateTo({
        url: '/pages/templeteDemo/userCenter/addAddress'
      })
    },
    editAddress () {
      ui.navigateTo({
        url: '/pages/templeteDemo/userCenter/updateAddress'
      })
    }
  }
}
