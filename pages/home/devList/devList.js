// equipment.js
export default {
  data () {
    return {
      groups: [
        {
          title: '设备',
          items: [
            { title: '系统信息', link: '/pages/apiDemo/systemInformation/systemInformation' },
            { title: '网络状态', link: '/pages/apiDemo/networkState/networkState' },
            { title: '加速度计', link: '/pages/apiDemo/accelerometer/accelerometer' },
            { title: '罗盘', link: '/pages/apiDemo/compass/compass' },
            { title: '拨打电话', link: '/pages/apiDemo/call/call' },
            { title: '扫码', link: '/pages/apiDemo/scanCode/scanCode' },
            { title: '剪贴板', link: '/pages/apiDemo/clipboard/clipboard' },
            { title: '指纹识别', link: '/pages/apiDemo/touchId/touchId' },
            { title: '屏幕亮度', link: '/pages/apiDemo/screenBrightness/screenBrightness' },
            { title: '用户截屏事件', link: '/pages/apiDemo/screenShot/screenShot' },
            { title: '振动', link: '/pages/apiDemo/shock/shock' },
            { title: '添加到通讯录', link: '/pages/apiDemo/addressList/addressList' },
            { title: '获取联系人信息', link: '/pages/apiDemo/getaddressBook/getaddressBook' },
            { title: '监听状态栏点击事件', link: '/pages/apiDemo/statusBarClick/statusBarClick' },
            { title: '监听返回按钮点击事件', link: '/pages/apiDemo/back/back' },
            { title: '控制侧滑页面手势', link: '/pages/apiDemo/popGesture/popGesture' },
            { title: '授权管理', link: '/pages/apiDemo/setting/setting' },
            { title: '自定义授权通知', link: '/pages/apiDemo/setting/setting2' },
            { title: '蓝牙', link: '/pages/apiDemo/bluetooth/bluetooth' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}