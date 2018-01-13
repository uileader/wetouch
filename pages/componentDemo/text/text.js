// text.js
export default {
  data () {
    return {
      texts: [
        '使用Touch UI开发移动应用的特点：',
        '移动开发难点封装',
        '通过配置快速实现功能',
        '积木拼装式界面搭建',
        '一体化的开发流程',
        '数据驱动和虚拟DOM',
        '极低的学习难度',
        '开发控制台运营APP',
        'APP一键转为微信小程序',
        '一套代码运行在所有平台',
        '丰富的移动端界面模板',
        '工匠精神',
        '......'
      ],
      text: '',
      extraLine: []
    }
  },
  computed: {
    canRemove () {
      return this.extraLine.length > 0
    }
  },
  methods: {
    add () {
      this.extraLine.push(this.texts[this.extraLine.length % 12])
      this.text = this.extraLine.join('\n')
    },
    remove () {
      if (this.canRemove) {
        this.extraLine.pop()
        this.text = this.extraLine.join('\n')
      }
    }
  }
}