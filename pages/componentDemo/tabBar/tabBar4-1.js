export default {
  methods: {
    handleSetBadge1 () {
      this.$setTabBadge({
        id: 'tab-bar-4',
        index: 0,
        type: 'number',
        count: 97
      })
    },
    handleRemoveBadge1 () {
      this.$removeTabBadge({
        id: 'tab-bar-4',
        index: 0
      })
    },
    handlePlusBadge1 () {
      this.$plusTabBadgeCount({
        id: 'tab-bar-4',
        index: 0,
        count: 1
      })
    },
    handleMinusBadge1 () {
      this.$minusTabBadgeCount({
        id: 'tab-bar-4',
        index: 0,
        count: 1
      })
    },
    handleRemoveBadge2 () {
      this.$removeTabBadge({
        id: 'tab-bar-4',
        index: 1
      })
    },
    handleSetBadge2 () {
      this.$setTabBadge({
        id: 'tab-bar-4',
        index: 1,
        type: 'dot'
      })
    }
  },
  mounted () {
    this.$setTabBadge({
      id: 'tab-bar-4',
      index: 0,
      type: 'number',
      count: 97
    })

    this.$setTabBadge({
      id: 'tab-bar-4',
      index: 1,
      type: 'dot'
    })
  }
}
