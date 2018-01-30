// virtualInput.js
export default {
  data () {
    return {
      value0: '',
      value1: '123',
      value2: '456',
      value3: '789',
      value4: '557',
      value5: '4203',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      borderstyle1: '1px solid #3f9fed',
      borderstyle2: '1px solid #3f9fed',
      bgcolor1: '#3f9fed',
      bgcolor2: '#3f9fed'
    }
  },
  methods: {
    handleInput (e) {
      ui.showToast({ title: e })
    },
    handleFocus () {
      ui.showToast({ title: '获取焦点' })
    },
    handleBlur () {
      ui.showToast({ title: '失去焦点' })
    },
    handlePasswordInput () {
      console.log(this.value9)
    },
    focus (e) {
      if (e === 'phone') {
        this.borderstyle1 = '1px solid #92c7fc'
        this.bgcolor1 = '#58a1ed'
      } else if (e === 'pwd') {
        this.borderstyle2 = '1px solid #92c7fc'
        this.bgcolor2 = '#58a1ed'
      }
    },
    blur (e) {
      if (e === 'phone') {
        this.borderstyle1 = '1px solid #3f9fed'
        this.bgcolor1 = '#3f9fed'
      } else if (e === 'pwd') {
        this.borderstyle2 = '1px solid #3f9fed'
        this.bgcolor2 = '#3f9fed'
      }
    }
  }
}
