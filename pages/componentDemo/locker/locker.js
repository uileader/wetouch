// locker.js
export default {
  data () {
    return {
      mode: 'recorder',
      title: '请设置手势密码'
    }
  },
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      this.$forceUpdate()
    })
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    firstinputed (e) {
      this.title = '请再次确认手势密码'
    },
    changed (res) {
      ui.setStorageSync('lockerKey', res)
      this.mode = 'locker'
      ui.showToast({ title: '手势设置成功', icon: 'success' })
      this.title = '手势密码设置成功'
    },
    notsame () {
      ui.showToast({ title: '两次设置的密码不匹配，请重新设置' })
      this.title = '两次设置的密码不匹配，请重新设置'
    },
    notenough () {
      ui.showToast({ title: '请至少连接4个点' })
      this.title = '请至少连接4个点'
    }
  }
}