export default {
  data () {
    return {
      current: 0,
      current2: 0,
      number: 1,
      height: ui.DEFAULT_CONTENT_HEIGHT - 46,
      shopName: '加厚提花丝光羊毛针织衫 4205',
      minImg: 'https://bfs.biyao.com/group1/M00/21/CD/rBACYVoDsu2AJ0x4AAFzfz0X8Zc330_400x400.jpg',
      paginationFraction: {
        type: 'fraction'
      },
      products: [
        { src: 'https://bfs.biyao.com/group1/M00/21/CF/rBACYVoDtoGAS2G4AAF64K74WkI826.jpg' },
        { src: 'https://bfs.biyao.com/group1/M00/20/1A/rBACVFoDtoWAX3PhAAFzfz0X8Zc868.jpg' },
        { src: 'https://bfs.biyao.com/group1/M00/21/D0/rBACW1oDtoiAM7rnAAF83QBoI8Q558.jpg' },
        { src: 'https://bfs.biyao.com/group1/M00/21/CF/rBACYVoDtouAYQy4AAGOH-YII6A902.jpg' },
        { src: 'https://bfs.biyao.com/group1/M00/21/D0/rBACW1oDtpKAdmyoAAGKvdqcEK8306.jpg' }
      ],
      otherShop: [
        {
          src: 'https://bfs.biyao.com/group1/M00/1F/C7/rBACVFoBTzyAX7ZEAACY21C5fXI268.jpg',
          name: '经典纯色长袖T恤（2件装）',
          price: '￥219'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/21/7D/rBACYVoBS2eAGLERAACGBt2GJLE867.jpg',
          name: '经典纯色圆领T恤（2件装）',
          price: '￥199'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/22/A3/rBACVFomgq-ANmslAACcqsAhIvk817.jpg',
          name: '针织羊毛时尚连帽大衣',
          price: '￥699'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/16/rBACYVohJFWAag_cAACdB8zSZ4w703.jpg',
          name: '时尚卷边丝光羊毛针织衫',
          price: '￥359'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/06/rBACYVogAWaAUMDBAACW25z6rd4054.jpg',
          name: '时尚印花长袖圆领卫衣',
          price: '￥249'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/0E/rBACW1oguKKATWw1AACZ_zOy2rQ695.jpg',
          name: '羊毛天丝口袋翻领针织衫',
          price: '￥299'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/22/F1/rBACYVoOpLiAWl5dAACaEPjUntg416.jpg',
          name: '加厚条纹肌理羊毛针织衫',
          price: '￥359'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/24/1C/rBACW1oheIeAM6lVAACef7Zvcww291.jpg',
          name: '带扣小翻领丝光羊毛针织衫',
          price: '￥369'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/20/E6/rBACVFoLoZ6AR9rCAACeI1pnTTE939.jpg',
          name: '定位提花丝光羊毛针织衫',
          price: '￥359'
        }, {
          src: 'https://bfs.biyao.com/group1/M00/22/9C/rBACW1oLny6AOUQrAACeZCJkVEE062.jpg',
          name: '小提花保暖长袖针织外套',
          price: '￥499'
        }
      ],
      details: [
        {
          name: '商品名称',
          content: '加厚提花丝光羊毛针织衫 4205'
        }, {
          name: '品牌名称',
          content: '亓口'
        }, {
          name: '面料成分',
          content: '48.1%羊毛30.9%锦纶21%腈纶'
        }, {
          name: '主要卖点1',
          content: '选用光泽度极佳的丝光羊毛混纺纱线，细腻柔软，毛绒饱满，前片以特殊肌理提花，营造出定位条纹效果'
        }, {
          name: '主要卖点2',
          content: '领口与袖口打破常规织法，加以提花点缀，更精致时尚，整体款式简约大方，内搭外穿皆宜，尽显大牌档次感'
        }, {
          name: '主要卖点3',
          content: '精选澳大利亚美利奴丝光羊毛，既保留了羊毛的手感温暖、丰厚的特性，又减少了羊毛对皮肤的刺激感'
        }, {
          name: '主要卖点4',
          content: '手感更柔滑细腻，蓬松保暖，与锦纶、腈纶混纺，既改善了面料的耐磨性，减少起毛起球，又提高了保暖性'
        }, {
          name: '洗涤说明',
          content: '1、羊毛/羊绒织物，建议送至专业干洗护理店清洗。'
        }, {
          name: '————',
          content: '2、如需手洗，请用羊毛专用洗涤剂洗涤，需轻揉，不可用力搓，浸泡时间不要超过5分钟，请用清水漂清。'
        }, {
          name: '————',
          content: '3、需轻轻挤干，不可用力。按针织本来形状整理平铺阴干，不可阳光下暴晒，必要时可以用蒸汽熨斗整烫。'
        }, {
          name: '————',
          content: '4、严禁高温水洗（水温不能超过30℃），请勿洗衣机搅洗、甩干，否则容易缩水变形，切记'
        }, {
          name: '特别提示',
          content: '含羊毛/羊绒的衣服，轻微起球属于正常现象，请避开与硬物的摩擦'
        }, {
          name: '温馨提示',
          content: '由于灯光和显示器偏差等现象，可能导致实物与照片产生色差，请以最终收到实物商品颜色为准'
        }, {
          name: '产地',
          content: '厦门'
        }, {
          name: '发票须知',
          content: '国家税务总局规定，自2017年7月1日起，开票抬头为公司者需提供“购买方纳税人识别号”否则无法做报销凭证。'
        }, {
          name: '---------',
          content: '本公司开具电子发票，请您在购买后选择开具电子发票并按要求填写（注：如没填写完整将无法开具发票）'
        }
      ],
      detailsImg: [
        {
          title: '整体款式简约大方，内搭外穿皆宜',
          src: 'https://bfs.biyao.com/group1/M00/20/1A/rBACVFoDtv2AZE8fAAMTN7A-DCs819.jpg'
        }, {
          title: '前片以特殊肌理提花，定位条纹效果',
          src: 'https://bfs.biyao.com/group1/M00/21/CF/rBACYVoDtwGAUJpiAAL1XIUAU_c732.jpg'
        }, {
          title: '立体有型、别致耐看',
          src: 'https://bfs.biyao.com/group1/M00/20/1A/rBACVFoDtwiAV6LYAAMCf4Jf0xA293.jpg'
        }, {
          title: '选用光泽度极佳的丝光羊毛混纺纱线',
          src: 'https://bfs.biyao.com/group1/M00/21/CF/rBACYVoDtwuASfsGAAMMG4_2cRM913.jpg'
        }, {
          title: '细腻柔软，毛绒饱满',
          src: 'https://bfs.biyao.com/group1/M00/20/1A/rBACVFoDtvCAW8iiAALfbZ0rDQ4714.jpg'
        }, {
          title: '抗起毛起球，又提高了保暖性',
          src: 'https://bfs.biyao.com/group1/M00/21/D0/rBACW1oDtuqADT8oAAMGdSGxq_o719.jpg'
        }, {
          title: '手感更柔滑细腻，蓬松保暖',
          src: 'https://bfs.biyao.com/group1/M00/21/D0/rBACW1oDtuiAWoanAAMWjt7gBQA646.jpg'
        }, {
          title: '精选澳大利亚美利奴丝光羊毛',
          src: 'https://bfs.biyao.com/group1/M00/21/D0/rBACYVoDt-mAZ35VAAMDs9i84tQ686.jpg'
        }, {
          title: '做工考究，线迹细腻',
          src: 'https://bfs.biyao.com/group1/M00/20/34/rBACVFoEBf2AWC3bAALbOsZ2LGw075.jpg'
        }, {
          title: '合体剪裁，美观大方',
          src: 'https://bfs.biyao.com/group1/M00/20/33/rBACVFoEBHuAPvFMAAL9wf0kgjY039.jpg'
        }, {
          title: '测量方法',
          src: 'https://bfs.biyao.com/group1/M00/20/1A/rBACVFoDtyWAW_-hAAJ60ragI00520.jpg'
        }, {
          title: '尺码建议表',
          src: 'https://bfs.biyao.com/group1/M00/22/19/rBACW1oFSlWAbl6nAAMAew8Y4vo679.jpg'
        }
      ],
      detailsProblem: [
        {
          title: '常见问题',
          problem: [
            '关于色差：亓口男装所有产品均为专业摄影团队实物拍摄，并精心调整色差的结果，尽量与实物商品一致，但由于灯光和显示器偏差等现象，可能导致实物与照片产生色差，请以最终收到实物商品颜色为准。',
            '关于免烫：成衣经过特殊的免烫处理，与普通衣衫对比，较不易褶皱，但非完全不褶皱。“免烫”是指在洗涤过后只需轻微熨烫或无需熨烫即可恢复到平整的状态。',
            '关于抗皱：面料经过液氨后整理，与普通整理面料相比，正确洗涤后无明显大的褶皱，晾晒时可将起皱部位稍加抻拽即可。',
            '亓口男装衬衫均为合体版，由于每个人穿着风格不同，喜欢宽松的建议购买时选择偏大一个码。'
          ]
        }, {
          title: '购买须知',
          problem: [
            '1.商品选择搭配时，3D模拟系统会将商品效果进行展示，不同显示设备会存在一定色差，最终请以实物为准。',
            '2.商品均为标准尺码并配有相对应的尺码对照表供您参考；产品均为手工测量，存在细微的误差，请以收到实物为准。',
            '3.商品均非现货，需要一定生产周期，具体请您查阅购买页面的“生产周期”提示。',
            '4.商家开始确认生产，将根据您订单需求进行制作生产；故无法做任何修改及取消订单。'
          ]
        }, {
          title: '发货快递',
          problem: [
            '寄出商品可享受顺丰快递包邮服务'
          ]
        }, {
          title: '发票说明',
          problem: [
            '1：如需要发票，下单时请勾选电子发票，并填写准确的发票抬头（公司名称）、纳税人识别号或统一社会信用代码，以及电子邮箱。',
            '2：根据“国家税务总局2017年第16号的公告”从2017年7月1日起开具“公司名称”为抬头的发票，必须提供“纳税人识别号或统一社会信用代码”，如未提供或提供信息不完整，则无法为其开具发票。',
            '3：发票抬头为“个人”的仅需要提供电子邮箱即可。',
            '4：订单交易成功后15个工作日内，我们将为您开具电子发票，并以PDF文件的形式发送至您的邮箱。',
            '5：电子发票与传统纸质发票具备同等效力，下载打印即可报销。',
            '6：已开具电子发票的客户无法再为其开具发票。',
            '注：如需要发票下单时请务必备注电子邮箱，我们将在收到申请后15天内开具电子发票发送至您的电子邮箱。如不备注电子邮箱，我们将无法开具发票，谢谢！'
          ]
        }, {
          title: '售后说明',
          problem: [
            '1.自签收之日起7日内，您可在“我的订单”中申请退货退款；款项将原支付路径退还。',
            '2.个性化定制商品（如签名、特殊材质、个性颜色搭配等）：非质量问题无法办理退换货。',
            '3.办理退货时，请您务必确保商品原质原貌，包装吊牌完整、未经使用。',
            '4.由于本公司开具电子发票，如需发票请您在购买后备注留言您的电子邮箱、开票抬头、纳税人识别号。',
            '5.如已开具发票，需将发票与商品一同寄回；如发票丢失或未寄回则无法为您办理退货退款。',
            '6.商家原因（如发错货，商品质量问题等），您可以直接申请退货退款，选择顺丰上门取件，进行免费退货；不支持顺丰取件区域，可由顾客先行垫付，退货完毕后，必要平台将根据退货运单及费用凭证为您报销。',
            '7.亓口品牌商品，严格执行“国家服装类三包规定”。'
          ]
        }
      ],
      evaluate: [
        {
          text: '产品不错，很合身',
          size: '颜色：黑色；尺寸：M',
          time: '2017-12-5'
        },
        {
          text: '很好',
          size: '颜色：藏青；尺寸：XL',
          time: '2017-12-5'
        }, {
          text: '产品不错，很合身',
          size: '颜色：黑色；尺寸：M',
          time: '2017-12-5'
        },
        {
          text: '很好',
          size: '颜色：藏青；尺寸：XL',
          time: '2017-12-5'
        }, {
          text: '产品不错，很合身',
          size: '颜色：黑色；尺寸：M',
          time: '2017-12-5'
        },
        {
          text: '很好',
          size: '颜色：藏青；尺寸：XL',
          time: '2017-12-5'
        }, {
          text: '产品不错，很合身',
          size: '颜色：黑色；尺寸：M',
          time: '2017-12-5'
        },
        {
          text: '很好',
          size: '颜色：藏青；尺寸：XL',
          time: '2017-12-5'
        }, {
          text: '产品不错，很合身',
          size: '颜色：黑色；尺寸：M',
          time: '2017-12-5'
        },
        {
          text: '很好',
          size: '颜色：藏青；尺寸：XL',
          time: '2017-12-5'
        }, {
          text: '产品不错，很合身',
          size: '颜色：黑色；尺寸：M',
          time: '2017-12-5'
        },
        {
          text: '很好',
          size: '颜色：藏青；尺寸：XL',
          time: '2017-12-5'
        }
      ]

    }
  },
  methods: {
    handleContentChange (index, key) {
      this[key] = index
    }
  },
  mounted () {

  }
}
