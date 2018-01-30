export default {
  data () {
    return {
      config1: {
        url: '/touchui-backstage/listNews.do?suffix=-推荐文章列表',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 5
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      },
      config2: {
        url: '/touchui-backstage/listNews.do?suffix=-热点文章列表',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 5
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      },
      config3: {
        url: '/touchui-backstage/listNews.do?suffix=-视频文章列表',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 5
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      },
      config4: {
        url: '/touchui-backstage/listNews.do?suffix=-深圳文章列表',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 5
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      },
      config5: {
        url: '/touchui-backstage/listNews.do?suffix=-社会文章列表',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 5
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      }
    }
  },
  methods: {}
}
