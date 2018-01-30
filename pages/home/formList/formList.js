// formList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '手势类',
          items: [
            { title: '按钮 button', link: '/pages/componentDemo/button/button' },
            { title: '开关 switch', link: '/pages/componentDemo/switch/switch' },
            { title: '滑动条 slider', link: '/pages/componentDemo/slider/slider' },
            { title: '标尺 ruler', link: '/pages/componentDemo/ruler/ruler' }
          ]
        },
        {
          title: '输入类',
          items: [
            { title: '单行输入框 input', link: '/pages/componentDemo/input/input' },
            { title: '虚拟键盘输入框 virtual-input', link: '/pages/componentDemo/virtualInput/virtualInput' },
            { title: '短信验证码输入框 sms-code', link: '/pages/componentDemo/smsCode/smsCode' },
            { title: '多行输入框 textarea', link: '/pages/componentDemo/textarea/textarea' },
            { title: '全屏搜索框 srarch', link: '/pages/componentDemo/search/search' },
            { title: '单行搜索框 search', link: '/pages/componentDemo/search/search2' }
          ]
        },
        {
          title: '选择类',
          items: [
            { title: '单选框 radio', link: '/pages/componentDemo/radio/radio' },
            { title: '多选框 checkbox', link: '/pages/componentDemo/checkbox/checkbox' },
            { title: '选择列表 check-list', link: '/pages/componentDemo/checklist/checklist' },
            { title: '选择器 picker', link: '/pages/componentDemo/picker/picker' },
            { title: '显示选择器 picker-view', link: '/pages/componentDemo/pickerView/pickerView' },
            { title: '数字选择器 stepper', link: '/pages/componentDemo/stepper/stepper' },
            { title: '级联选择器 cascader', link: '/pages/componentDemo/cascader/cascader' },
            { title: '索引选择器 index-list', link: '/pages/componentDemo/indexList/indexList' }
          ]
        },
        {
          title: '其他',
          items: [
            { title: '表单容器 form', link: '/pages/componentDemo/form/form' },
            { title: '日历 calendar(横向)', link: '/pages/componentDemo/calendar/calendar' },
            { title: '日历 calendar(纵向)', link: '/pages/componentDemo/calendar/calendar2' },
            { title: '日历 calendar(周模式)', link: '/pages/componentDemo/calendar/calendar3' },
            { title: '日历 calendar(混合模式)', link: '/pages/componentDemo/calendar/calendar4' }
          ]
        }
      ]
    }
  },
  methods: {}
}
