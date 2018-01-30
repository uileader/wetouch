export default {
  data () {
    return {
      groups: [
        {
          title: '位置',
          items: [
            { title: '获取位置', link: '/pages/apiDemo/getLocation/getLocation' },
            { title: '查看位置', link: '/pages/apiDemo/openLocation/openLocation' },
            { title: '选择位置', link: '/pages/apiDemo/chooseLocation/chooseLocation' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}