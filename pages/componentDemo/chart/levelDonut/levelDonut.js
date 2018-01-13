// level-donut.js
export default {
  data () {
    return {
      valueArray: [50, 15, 25, 10],
      colorArray: ['#E23724', '#FCCD1F', '#FBB936', '#F8882C'],
      lineWidthArray: [20, 15, 10, 5],
      list5: [{
        text: '购物',
        tagClass: 'tag-before-5',
        icon: 'circle',
        iconColor: '#F8882C'
      }, {
        text: '出行',
        tagClass: 'tag-before-5',
        icon: 'circle',
        iconColor: '#FBB936'
      }, {
        text: '交友',
        tagClass: 'tag-before-5',
        icon: 'circle',
        iconColor: '#FCCD1F'
      }, {
        text: '理财',
        tagClass: 'tag-before-5',
        icon: 'circle',
        iconColor: '#E23724'
      }]
    }
  },
  methods: {
    singleTap1 (opt) {
      this.list5.forEach((item, index) => {
        item.checked = (index === opt)
      })
    }
  }
}
