// notice.js
export default {
  data () {
    return {
      sexClass: 'active',
      sexClass2: '',
      tag1: [{
        text: '先生',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: true
      }, {
        text: '女士',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      tag2: [{
        text: '家',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: true
      }, {
        text: '公司',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '学校',
        tagClass: 'tag-before',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      phoneNumber: '13716365888',
      hasLocation: false,
      locationAddress: '丰台区马家堡搜宝商务中心',
      addressNumber: '3号楼1205'
    }
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
      ui.showToast({ title: '示例只是用于演示啦～' })
    },
    singleTap1 (opt) {
      this.tag1.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    singleTap2 (opt) {
      this.tag2.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    pick () {
      ui.pickPhoneNumber({
        success: ({ phoneNumber }) => {
          this.phoneNumber = phoneNumber
        }
      })
    },
    chooseLocation: function () {
      var that = this
      ui.chooseLocation({
        backgroundColor: '#3399ff',
        success: function (res) {
          that.hasLocation = true
          that.locationAddress = res.address
        },
        fail: function (res) {
        }
      })
    }

  }
}
