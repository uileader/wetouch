// listView.js
export default {
  data () {
    return {
      WINWIDTH: ui.WIN_WIDTH,
      searchWidth: '',
      guesslikes: [{
        imgsrc: 'http://p0.meituan.net/200.0/deal/1e257a1f5b0d974b292ac7bc9a3c21ad71414.jpg@100_0_600_600a%7C267h_267w_2e_90Q',
        titlename: '旺顺阁鱼头泡饼',
        titleinfo: '[王府井/东单]1斤鱼头券3选1',
        titlem: '677m',
        currentprice: '29.9',
        originalprice: '109元',
        already: '已售341',
        starVal: 5,
        address: '马家堡/角门',
        type: '家常菜',
        takeOut: true,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        smartTags: [
          {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '回头客多'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '量足'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '鱼特别赞'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持外卖'
            }
          }, {
            text: {
              color: '#6cbab2',
              content: '买单'
            }
          }, {
            text: {
              color: '#6cbab2',
              content: '预定'
            }
          }
        ]

      }, {
        imgsrc: 'http://p0.meituan.net/200.0/deal/271ab37c767d8c4ba5f705da8eb00e9032980.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        titlename: '吉野家',
        titleinfo: '[149店通用]吉汁烧鱼+茶碗蒸+中可乐1份',
        titlem: '1237m',
        currentprice: '16',
        originalprice: '29元',
        already: '已售31241',
        starVal: 4.9,
        address: '马家堡/角门',
        type: '快餐',
        takeOut: true,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        smartTags: [
          {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '肥牛饭好吃'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '回头客多'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '羊肉赞'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持外卖'
            }
          }
        ]
      }, {
        imgsrc: 'http://p1.meituan.net/200.0/deal/17646e64326c376d200025ed3813b5de72568.jpg@174_0_534_534a%7C267h_267w_2e_90Q',
        titlename: '马兰拉面',
        titleinfo: '[21店通用]马兰拉面1份',
        titlem: '67m',
        currentprice: '11.8',
        originalprice: '109元',
        already: '已售233441',
        starVal: 4.8,
        address: '马家堡/角门',
        type: '中餐',
        takeOut: true,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        smartTags: [
          {
            text: {
              backgroundColor: '#FFF1EC',
              color: '#FF6633',
              content: '促销中'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '回头客多'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持预定'
            }
          }
        ]
      }, {
        imgsrc: 'http://p0.meituan.net/200.0/deal/fb2b8f65ea285d77848f2571642031f641701.jpg',
        titlename: '桥头排骨&呆萌主义',
        titleinfo: '[西单]桥头排骨1份，提供免费WiFi',
        titlem: '677m',
        currentprice: '15.8',
        originalprice: '17元',
        already: '已售31',
        starVal: 4.8,
        address: '马家堡/角门',
        type: '家常菜',
        takeOut: true,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        smartTags: [
          {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '排骨量大'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '回头客多'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持外卖'
            }
          }
        ]
      }, {
        imgsrc: 'http://p1.meituan.net/200.0/deal/6c6b26cb5943a61677a5c1cd891d8d6297996.jpg@249_0_786_786a%7C267h_267w_2e_90Q',
        titlename: '比格比萨',
        titleinfo: '[北京等]周一至周五自助餐',
        titlem: '677m',
        currentprice: '63',
        originalprice: '109元',
        already: '已售245394',
        starVal: 4.7,
        address: '马家堡/角门',
        type: '自助',
        takeOut: true,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        smartTags: [
          {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '自助排名第3'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '干净卫生'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '服务好'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持买单'
            }
          }, {
            text: {
              color: '#6cbab2',
              content: '预定'
            }
          }
        ]
      }, {
        imgsrc: 'http://p1.meituan.net/200.0/deal/fe812c4822e7ba140e064d911c435d4257752.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        titlename: '呷哺呷哺',
        titleinfo: '[北京等]100元代金券1张，可叠加',
        titlem: '677m',
        currentprice: '70',
        originalprice: '100元',
        already: '已售139591',
        starVal: 4.7,
        address: '马家堡/角门',
        type: '火锅',
        takeOut: false,
        content2: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        smartTags: [
          {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '马家堡火锅排名第1'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '回头客多'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '羊肉赞'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持外卖'
            }
          }, {
            text: {
              color: '#6cbab2',
              content: '买单'
            }
          }
        ]
      }, {
        imgsrc: 'http://p0.meituan.net/200.0/deal/25560fd646292a07e68345d645f5077e61085.jpg@10_0_420_420a%7C267h_267w_2e_100Q',
        titlename: '奶茶嫁给粉',
        titleinfo: '[8店通用]10元代金券1张，可叠加',
        titlem: '2347m',
        currentprice: '8.5',
        originalprice: '10元',
        already: '已售40281',
        starVal: 4.7,
        address: '马家堡/角门',
        type: '奶茶/果汁',
        takeOut: false,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        smartTags: [
          {
            text: {
              backgroundColor: '#fafafa',
              color: '#dddddd',
              content: '广告'
            }
          }, {
            text: {
              backgroundColor: '#FFF1EC',
              color: '#FF6633',
              content: '促销中'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '羊肉赞'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持排队'
            }
          }
        ]
      }, {
        imgsrc: 'http://p1.meituan.net/200.0/deal/7fa4d4497aab7b81ced0d3081616e77262464.jpg@117_0_468_468a%7C267h_267w_2e_90Q',
        titlename: '掉渣饼',
        titleinfo: '[西单]掉渣饼1份，提供免费WiFi',
        titlem: '1254m',
        currentprice: '6.9',
        originalprice: '8元',
        already: '已售896',
        starVal: 4.6,
        address: '马家堡/角门',
        type: '特色菜',
        takeOut: true,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        promotion: '限时5折',
        smartTags: [
          {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '回头客多'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持外卖'
            }
          }, {
            text: {
              color: '#6cbab2',
              content: '买单'
            }
          }
        ]
      }, {
        imgsrc: 'http://p0.meituan.net/200.0/deal/b0443be0d5718480e3aa4e175db82ea5103854.jpg@166_0_667_667a%7C267h_267w_2e_90Q',
        titlename: '南京大饭店自助餐厅',
        titleinfo: '[王府井/东单]工作日自助1位',
        titlem: '4523m',
        currentprice: '98',
        originalprice: '138元',
        already: '已售10536',
        starVal: 4.5,
        address: '马家堡/角门',
        type: '自助',
        takeOut: false,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        smartTags: [
          {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '性价比高'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '回头客多'
            }
          }
        ],
        extraServiceTags: []
      }, {
        imgsrc: 'http://p1.meituan.net/200.0/deal/792c88b1a75dc49578ec34a201ae672c579960.jpg@167_0_665_665a%7C267h_267w_2e_90Q',
        titlename: '老诚一锅',
        titleinfo: '[10店通用]100元代金券1张，可叠加',
        titlem: '6324m',
        currentprice: '90',
        originalprice: '100元',
        already: '已售70020',
        starVal: 4.4,
        address: '马家堡/角门',
        type: '火锅',
        takeOut: true,
        content1: '2-4人餐1元，单人餐38元，双人餐118元起，4人餐228元起，6人餐318元起，8人餐528元起',
        content2: '10代100元，68代100元',
        smartTags: [
          {
            text: {
              backgroundColor: '#fafafa',
              color: '#dddddd',
              content: '广告'
            }
          }, {
            text: {
              backgroundColor: '#FFF1EC',
              color: '#FF6633',
              content: '促销中'
            }
          }, {
            text: {
              backgroundColor: '#fbf4e4',
              color: '#be9e4d',
              content: '羊肉赞'
            }
          }
        ],
        extraServiceTags: [
          {
            text: {
              color: '#6cbab2',
              content: '支持外卖'
            }
          }
        ]
      }]
    }
  },
  methods: {
    handleNavLeft () {
      ui.navigateBack()
    },
    handleNavRight () {
      ui.showToast({
        title: 'NavBar右侧点击事件'
      })
    }
  },
  mounted () {
    this.searchWidth = window.innerWidth - 110
  }
}
