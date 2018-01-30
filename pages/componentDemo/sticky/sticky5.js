export default {
  data () {
    return {
      show: false,
      maskStyle: {backgroundColor: 'transparent'},
      index: 0,
      country: '北京',
      config: {
        url: 'http://www.uileader.com/touchui-backstage/listStore.do',
        type: 'get',
        pageSize: {
          key: 'pageSize',
          value: 10
        },
        pageNo: {
          key: 'pageNo',
          value: 1
        },
        param: {
          type: 1,
          suffix: 1,
          sort: 'id',
          direction: 'asc'
        },
        dataKey: 'data',
        reload: false,
        refresh: false
      },
      bigNav: [
        {
          iconName: 'canju',
          navName: '美食',
          backgroundColor: '#fd9d21'
        }, {
          iconName: 'Artboard',
          navName: '电影/演出',
          backgroundColor: '#f3372d'
        }, {
          iconName: 'jiudian',
          navName: '酒店住宿',
          backgroundColor: '#9161f3'
        }, {
          iconName: 'jiubei_shi',
          navName: '休闲娱乐',
          backgroundColor: '#01c7a6'
        }, {
          iconName: 'waimai',
          navName: '外卖',
          backgroundColor: '#ffb103'
        }
      ],
      subNav: [
        {
          iconName: 'dache',
          navName: '打车',
          color: '#2486e7'
        }, {
          iconName: 'ktvtianchong',
          navName: 'KTV',
          color: '#13c9ac'
        }, {
          iconName: 'liren',
          navName: '丽人/美发',
          color: '#f27bbd'
        }, {
          iconName: 'huochepiao',
          navName: '机票/火车票',
          color: '#e82d7c'
        }, {
          iconName: 'paotu',
          navName: '跑腿代购',
          color: '#fca91b'
        }, {
          iconName: 'zuanshi',
          navName: '结婚/摄影',
          color: '#fd6479'
        }, {
          iconName: 'chujingyoutubiao',
          navName: '出境游',
          color: '#4bb1fb'
        }, {
          iconName: 'sheying',
          navName: '儿童摄影',
          color: '#e82d7c'
        }, {
          iconName: 'xianhua',
          navName: '鲜花',
          color: '#a071fb'
        }, {
          iconName: 'ziyuan',
          navName: '全部分类',
          color: '#4bb1fb'
        }
      ],
      guidedata: [{
        text: '星厨殿堂',
        smalltitle: '不止5折',
        imgsrc: 'http://p1.meituan.net/200.0/deal/6c6b26cb5943a61677a5c1cd891d8d6297996.jpg@249_0_786_786a%7C267h_267w_2e_90Q'
      }, {
        text: '限时福利',
        smalltitle: '抽100免单券',
        imgsrc: 'http://p0.meituan.net/200.0/deal/fb2b8f65ea285d77848f2571642031f641701.jpg'
      }, {
        text: '3折出游',
        smalltitle: '双十一抢先打',
        imgsrc: 'http://p0.meituan.net/200.0/deal/25560fd646292a07e68345d645f5077e61085.jpg@10_0_420_420a%7C267h_267w_2e_100Q'
      }],
      guidedata1: [
        {
          text: '特惠观影',
          smalltitle: '王牌特工3',
          imgsrc: 'http://p1.meituan.net/200.0/deal/fe812c4822e7ba140e064d911c435d4257752.jpg@126_0_388_388a%7C267h_267w_2e_100Q'
        }, {
          text: '低至5折',
          smalltitle: '家政特惠周',
          imgsrc: 'http://p0.meituan.net/200.0/deal/fb2b8f65ea285d77848f2571642031f641701.jpg'
        }, {
          text: '秒杀酒店',
          smalltitle: '大牌酒店5折',
          imgsrc: 'http://p1.meituan.net/200.0/deal/17646e64326c376d200025ed3813b5de72568.jpg@174_0_534_534a%7C267h_267w_2e_90Q'
        }, {
          text: '贴秋膘',
          smalltitle: '暖心暖胃暖你',
          imgsrc: 'http://p1.meituan.net/200.0/deal/7fa4d4497aab7b81ced0d3081616e77262464.jpg@117_0_468_468a%7C267h_267w_2e_90Q'

        }]
    }
  },
  methods: {
    handleshow () {
      this.show = true
    },
    handleHide (text) {
      this.show = false
      ui.showToast({
        title: text
      })
    },
    handleChange (e) {
      this.index = e
      console.log(e)
      if (e === 0) {
        this.config.param.sort = 'id'
        this.config.param.direction = 'asc'
      } else if (e === 1) {
        this.config.param.sort = 'id'
        this.config.param.direction = 'desc'
      } else {
        this.config.param.sort = 'originalprice'
        this.config.param.direction = 'desc'
      }
      this.config.refresh = true
    },
    showIndeList () {

    }
  },
  mounted () {
  }
}
