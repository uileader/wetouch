export default {
  data: () => ({
    windowWidth: ui.WIN_WIDTH,
    animate: true,
    list: [{
      name: '前端',
      id: 'id1',
      switch: true
    }, {
      name: '人工智能',
      id: 'id2',
      switch: false
    }, {
      name: '后端',
      id: 'id3',
      switch: true
    }, {
      name: '产品',
      id: 'id4',
      switch: false
    }, {
      name: 'Android',
      id: 'id5',
      switch: true
    }, {
      name: '设计',
      id: 'id6',
      switch: false
    }]
  }),
  mounted () {
  },
  methods: {
    dragstart () {
      this.animate = false
    },
    dragend () {
      this.animate = true
    }
  }
}
