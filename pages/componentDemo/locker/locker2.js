// locker2.js
export default {
  data () {
    return {
      mode: 'locker',
      title: '请输入手势密码',
      btnshow: false,
      lockerKey: null,
      password: null
    }
  },
  created () {
    this.password = ui.getStorageSync('lockerKey')
    if (this.password === null || this.password === '') {
      this.title = '还未设置手势密码'
      this.btnshow = true
    }
  },
  computed: {
  },
  methods: {
    navigateBack () {
      ui.navigateBack()
    },
    func3 (e) {
      ui.showToast({ title: '解锁成功', icon: 'success' })
      this.title = '解锁成功'
    },
    success () {
      this.func3()
    },
    mismatch () {
      ui.showToast({ title: '密码有误,解锁不成功' })
      this.title = '密码有误,解锁不成功'
    },
    shorterror () {
      ui.showToast({ title: '密码至少连接了4个点' })
      this.title = '密码至少连接了4个点'
    }
  }
}