// if.js
export default {
  data () {
    return {
      condition: true,
      length: 3,
      flag: false,
      codeDemo1:'<ui-view ui:if="{{condition}}"> True </ui-view>',
      codeDemo2:'<ui-view ui:if="{{length > 5}}"> 1 </ui-view>',
      codeDemo3:'<ui-view ui:elif="{{length > 2}}"> 2 </ui-view>',
      codeDemo4:'<ui-view ui:else> 3 </ui-view>',
      codeDemo5:'<ui-block ui:if="{{true}}"><ui-view> view1 </ui-view><ui-view> view2 </ui-view></ui-block>',
      codeDemo6:'<ui-view ui:show="{{flag ? true : false}}"> 我叫内容 </ui-view>'
    }
  },
  methods: {
    show () {
      // this.flag = true
      if (this.flag) {
        this.flag = false
      } else {
        this.flag = true
      }
    }
  }
}
