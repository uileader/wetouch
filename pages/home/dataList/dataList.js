// dataList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '导航组件',
          items: [
            { title: '跳转传参', link: '/pages/componentDemo/navigator/navigator' },
            { title: '回退传参', link: '/pages/componentDemo/navigator/navigator3' }
          ]
        },

        {
          title: '网络请求',
          items: [
            { title: '使用框架Loading', link: '/pages/componentDemo/requestApi/requestApi' },
            { title: '自定义Loading', link: '/pages/componentDemo/requestApi/requestApi3' }
          ]
        },

        {
          title: '表格 table',
          items: [
            { title: '基本示例', link: '/pages/componentDemo/table/table' },
            { title: '单元格渲染', link: '/pages/componentDemo/table/table2' },
            { title: '服务器数据的读取', link: '/pages/componentDemo/table/table3' },
            // { title: '服务器数据的读取(布局二)', link: '/pages/componentDemo/table/table6' },
            { title: '横向滑动', link: '/pages/componentDemo/table/table4' },
            { title: '点击标签切换table数据', link: '/pages/componentDemo/table/table5' }
          ]
        },
        {
          title: '数据列表 list-view',
          items: [
            { title: '图文列表布局', link: '/pages/componentDemo/listView/listView' },
            { title: '图片列表布局', link: '/pages/componentDemo/listView/listView2' },
            { title: '多样布局+自定义网络提示', link: '/pages/componentDemo/listView/listView3' },
            { title: '使用data获取数据', link: '/pages/componentDemo/listView/listView4' },
            { title: '结合scroll-view使用', link: '/pages/componentDemo/listView/listView5' }
          ]
        },
        {
          title: '瀑布流 waterfall',
          items: [
            { title: '使用默认网络提示', link: '/pages/componentDemo/waterfall/waterfall' },
            { title: '自定义网络提示', link: '/pages/componentDemo/waterfall/waterfall2' }
          ]
        },
        {
          title: '网络容器 network-view',
          items: [
            { title: '使用默认网络提示', link: '/pages/componentDemo/networkView/networkView' },
            { title: '自定义网络提示', link: '/pages/componentDemo/networkView/networkView3' }
          ]
        }
      ]
    }
  },
  methods: {}
}
