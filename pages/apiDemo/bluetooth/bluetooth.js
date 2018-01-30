// bluetooth.js
// bluetooth.js
var api = require('touchui-api')
var deviceId = ''
var mainServices = []
var NAME = 'MI'
// var NAME = 'MI Band 2'

// 心率控制 2a39
// var HEART_RATE_CONTROL_POINT
// 心率通知 2a37
// var HEART_RATE_MEASUREMENT
// 警报控制 2a44
// var ALERT_NOTIFICATION_CONTROL_POINT
// 新警报 2a46
// var NEW_ALERT
// 当前时间 2a2b
var CURRENT_TIME = '00002a2b'
var currentTime = {}
// 剩余电量ID
var ELECTRICITY = '0000ff0c'
var electricity = {
  serviceId: '',
  characteristicId: ''
}
// 震动ID
var SHOCK = '00002a06'
var shock = {
  serviceId: '',
  characteristicId: ''
}
// 步数
var STEPS = '0000ff06'
var steps = {
  serviceId: '',
  characteristicId: ''
}
var services = []
export default {
  data () {
    return {
      // 开启状态
      open: false,
      // 可用状态
      available: false,
      // 搜索状态
      discovering: false,
      // 状态变化监听
      stateChange: false,
      // 新设备监听
      deviceFound: false,
      // 正在连接
      connecting: false,
      // 设备ID
      deviceId: '',
      // 连接状态
      connected: false,
      // 服务列表
      services: [],
      // 主服务列表
      mainServices: [],
      // 电量信息
      electricity: false,
      // 振动信息
      shock: false,
      // 步数信息
      steps: false,
      // 时间信息
      currentTime: false,
      // 步数监听
      stepsNotify: false,
      // 连接错误状态监听
      connectionStateChange: false,
      // 特征值变化监听
      valueChange: false
    }
  },
  methods: {
    // 弹窗显示结果
    showAlert (title,content) {
      ui.showAlert({
        title: title,
        content: content,
        butonText: '确定'
      })
    },
    // 初始化蓝牙适配器
    openBluetoothAdapter (title) {
      var self = this
      api.openBluetoothAdapter({
        success (res) {
          console.log('openBluetoothAdapter success', res)
          self.showAlert(title,res)
          self.setData({
            open: true
          })
        },
        fail (e) {
          console.log('openBluetoothAdapter fail', e)
        }
      })
    },
    // 关闭蓝牙模块。
    closeBluetoothAdapter (title) {
      var self = this
      api.closeBluetoothAdapter({
        success (res) {
          console.log('closeBluetoothAdapter success', res)
          self.showAlert(title,res)
          self.setData({
            open: false,
            available: false,
            discovering: false,
            connecting: false,
            deviceId: '',
            connected: false,
            services: [],
            mainServices: [],
            electricity: false,
            shock: false,
            steps: false,
            currentTime: false,
            stepsNotify: false
          })
        },
        fail (e) {
          console.log('closeBluetoothAdapter fail', e)
        }
      })
    },
    // 获取本机蓝牙适配器状态
    getBluetoothAdapterState (title) {
      var self = this
      api.getBluetoothAdapterState({
        success (res) {
          console.log('getBluetoothAdapterState success', res)
          self.showAlert(title,res)
          self.setData({
            available: res.available,
            discovering: res.discovering
          })
        },
        fail (e) {
          console.log('getBluetoothAdapterState fail', e)
        }
      })
    },
    // 监听蓝牙适配器状态变化事件
    onBluetoothAdapterStateChange (title) {
      var self = this
      api.onBluetoothAdapterStateChange(function (res) {
        console.log('onBluetoothAdapterStateChange res', res)
        self.showAlert(title,res)
        self.setData({
          available: res.available,
          discovering: res.discovering
        })
      })
      this.setData({
        stateChange: true
      })
    },
    // 开始搜寻附近的蓝牙外围设备
    startBluetoothDevicesDiscovery (title) {
      var self = this
      api.startBluetoothDevicesDiscovery({
        success (res) {
          console.log('startBluetoothDevicesDiscovery success', res)
          self.showAlert(title,res)
          self.setData({
            discovering: true
          })
        },
        fail (e) {
          console.log('startBluetoothDevicesDiscovery fail', e)
        }
      })
    },
    // 停止搜寻附近的蓝牙外围设备
    stopBluetoothDevicesDiscovery (title) {
      var self = this
      api.stopBluetoothDevicesDiscovery({
        success (res) {
          console.log('stopBluetoothDevicesDiscovery success', res)
          self.showAlert(title,res)
          self.setData({
            discovering: false
          })
        },
        fail (e) {
          console.log('stopBluetoothDevicesDiscovery fail', e)
        }
      })
    },
    // 根据 uuid 获取处于已连接状态的设备
    getConnectedBluetoothDevices (title) {
      var self = this
      api.getConnectedBluetoothDevices({
        services: mainServices,
        success (res) {
          console.log('getConnectedBluetoothDevices success', res)
          self.showAlert(title,res)
          var devices = res.devices
          if (devices && devices.length) {
            deviceId = devices[0].deviceId
            self.setData({
              deviceId
            })
          }
        },
        fail (e) {
          console.log('getConnectedBluetoothDevices fail', e)
        }
      })
    },
    // 获取所有已发现的蓝牙设备
    getBluetoothDevices (title) {
      var self = this
      api.getBluetoothDevices({
        success (res) {
          console.log('getBluetoothDevices success', res)
          self.showAlert(title,res)
          var devices = res.devices
          function pick () {
            var items = []
            var end = 0
            for (var i = 0; i < 6 && i + start < itemList.length; i++) {
              items.push(itemList[i + start])
              end = i + start
            }
            function fail () {
              if (end < itemList.length) {
                start += 6
                pick()
              }
            }
            if (items.length) {
              api.showActionSheet({
                itemList: items,
                success: function (res) {
                  var index = res.tapIndex
                  // 此处微信web开发工具有bug，取消会触发成功的回调
                  if (typeof index !== 'number') {
                    return
                  }
                  deviceId = devices[index + start].deviceId
                  self.setData({
                    deviceId
                  })
                },
                fail: function (res) {
                  console.log(res.errMsg)
                  self.showAlert(title,res)
                  fail()
                }
              })
            }
          }
          if (devices.length) {
            var itemList = []
            var start = 0

            devices.forEach(device => {
              var name = device.name || device.deviceId
              itemList.push(name)
              console.log('device.name', name)
              self.showAlert(title,name)
              if (!api.showActionSheet) {
                if (device.name === NAME || device.localName === NAME) {
                  deviceId = device.deviceId
                  self.setData({
                    deviceId
                  })
                }
              }
            })
            if (api.showActionSheet) {
              pick()
            }
          }
        },
        fail (e) {
          console.log('getBluetoothDevices fail', e)
        }
      })
    },
    // 监听寻找到新设备的事件
    onBluetoothDeviceFound (title) {
      var self = this
      api.onBluetoothDeviceFound(res => {
        console.log('onBluetoothDeviceFound res', res)
        self.showAlert(title,res)
        var devices = res.devices
        devices.forEach(device => {
          // 此处开发者工具和真机表现不一致，需判断
          if (Array.isArray(device)) {
            device = device[0]
          }
          var name = device.name || device.deviceId
          console.log('device.name', name)
          if (api.showToast) {
            api.showToast({
              title: name
            })
          } else if (name === NAME || device.localName === NAME) {
            deviceId = device.deviceId
            self.setData({
              deviceId
            })
          }
        })
      })
      this.setData({
        deviceFound: true
      })
    },
    // 连接低功耗蓝牙设备
    createBLEConnection (title) {
      var self = this
      api.createBLEConnection({
        deviceId,
        success (res) {
          console.log('createBLEConnection success', res)
          self.showAlert(title,res)
          self.setData({
            connected: true,
            connecting: false
          })
        },
        fail (e) {
          console.log('createBLEConnection fail', e)
          self.setData({
            connecting: false
          })
        }
      })
      this.setData({
        connecting: true
      })
    },
    // 断开与低功耗蓝牙设备的连接
    closeBLEConnection (title) {
      var self = this
      api.closeBLEConnection({
        deviceId,
        success (res) {
          console.log('closeBLEConnection success', res)
          self.showAlert(title,res)
          self.setData({
            connected: false,
            stepsNotify: false
          })
        },
        fail (e) {
          console.log('closeBLEConnection fail', e)
        }
      })
    },
    // 获取蓝牙设备所有 service
    getBLEDeviceServices (title) {
      var self = this
      api.getBLEDeviceServices({
        deviceId,
        success (res) {
          console.log('getBLEDeviceServices success', res)
          self.showAlert(title,res)
          services = res.services
          services.forEach(service => {
            if (service.isPrimary) {
              mainServices.push(service.uuid)
            }
          })
          api.setStorageSync('mainServices', mainServices)
          self.setData({
            services,
            mainServices
          })
        },
        fail (e) {
          console.log('getBLEDeviceServices fail', e)
        }
      })
    },
    onLoad () {
      mainServices = api.getStorageSync('mainServices') || []
      this.setData({
        mainServices: mainServices
      })
    },
    // 获取蓝牙设备所有 characteristic（特征值）
    getBLEDeviceCharacteristics (title) {
      var self = this
      services.forEach(service => {
        api.getBLEDeviceCharacteristics({
          deviceId,
          serviceId: service.uuid,
          success (res) {
            console.log('getBLEDeviceCharacteristics success', res)
            self.showAlert(title,res)
            var characteristics = res.characteristics
            characteristics.forEach(characteristic => {
              var uuid = characteristic.uuid
              var type = 'other'
              function setType (type_, type__) {
                type_.characteristicId = uuid
                type_.serviceId = service.uuid
                type = type__
                var data = {}
                data[type__] = true
                self.setData(data)
              }
              switch (uuid.toLowerCase().substr(0, 8)) {
                case ELECTRICITY: {
                  setType(electricity, 'electricity')
                  break
                }
                case SHOCK: {
                  setType(shock, 'shock')
                  break
                }
                case STEPS: {
                  setType(steps, 'steps')
                  break
                }
                case CURRENT_TIME: {
                  setType(currentTime, 'currentTime')
                  break
                }
              }

              console.log(type + ' ' + 'characteristicId:', uuid)
            })
          },
          fail (e) {
            console.log('getBLEDeviceCharacteristics fail', e)
          }
        })
      })
    },
    // 读取低功耗蓝牙设备的特征值的二进制数据值。
    readBLECharacteristicValue (title,type) {
      var self = this
      api.readBLECharacteristicValue({
        deviceId,
        serviceId: type.serviceId,
        characteristicId: type.characteristicId,
        success (res) {
          console.log('readBLECharacteristicValue success', res)
          self.showAlert(title,res)
        },
        fail (e) {
          console.log('readBLECharacteristicValue fail', e)
        }
      })
    },
    // 读取电量
    readElectricity (title) {
      this.readBLECharacteristicValue(title,electricity)
    },
    // 读取步数
    readSteps (title) {
      this.readBLECharacteristicValue(title,steps)
    },
    // 读取时间
    readCurrentTime (title) {
      this.readBLECharacteristicValue(title,currentTime)
    },
    // 向低功耗蓝牙设备特征值中写入二进制数据。
    writeBLECharacteristicValue (title, type, value) {
      var self = this
      api.writeBLECharacteristicValue({
        deviceId,
        serviceId: type.serviceId,
        characteristicId: type.characteristicId,
        value,
        success (res) {
          console.log('writeBLECharacteristicValue success', res)
          self.showAlert(title,res)
        },
        fail (e) {
          console.log('writeBLECharacteristicValue fail', e)
        }
      })
    },
    // 发送振动指令
    writeShock (title) {
      var buffer = new ArrayBuffer(1)
      var dataView = new DataView(buffer)
      dataView.setUint8(0, 1)
      this.writeBLECharacteristicValue(title,shock, buffer)
    },
    // 启用低功耗蓝牙设备特征值变化时的 notify 功能
    notifyBLECharacteristicValueChange (title,type, state, success, fail) {
      var self = this
      api.notifyBLECharacteristicValueChange({
        deviceId,
        serviceId: type.serviceId,
        characteristicId: type.characteristicId,
        state: typeof state === 'boolean' ? state : true,
        success (res) {
          console.log('notifyBLECharacteristicValueChange success', res)
          self.showAlert(title,res)
          if (typeof success === 'function') {
            success(res)
          }
        },
        fail (e) {
          console.log('notifyBLECharacteristicValueChange fail', e)
          if (typeof fail === 'function') {
            fail(e)
          }
        }
      })
    },
    // 监听步数
    notifySteps (title) {
      this.notifyBLECharacteristicValueChange(title,steps, true, res => {
        this.setData({
          stepsNotify: true
        })
      })
    },
    // 监听低功耗蓝牙连接的错误事件
    onBLEConnectionStateChange (title) {
      var self = this
      api.onBLEConnectionStateChange(res => {
        console.log('onBLEConnectionStateChange res', res)
        self.showAlert(title,res)
        if (!res.connected) {
          self.setData({
            connected: false,
            stepsNotify: false
          })
        }
      })
      this.setData({
        connectionStateChange: true
      })
    },
    // 监听低功耗蓝牙设备的特征值变化
    onBLECharacteristicValueChange (title) {
      api.onBLECharacteristicValueChange(res => {
        console.log('onBLECharacteristicValueChange res', res)
        this.showAlert(title,res)
        if (res.value) {
          var dataView = new DataView(res.value)
          var value = []
          for (var i = 0; i < dataView.byteLength; i++) {
            value.push(dataView.getUint8(i))
          }
          if (res.characteristicId.toLowerCase().substr(0, 8) === CURRENT_TIME) {
            value = `${value[2]}-${value[3]} ${value[4]}:${value[5]}:${value[6]}`
          } else {
            value = value.splice(',')
          }
          console.log(value)
          if (api.showToast) {
            api.showToast({
              title: String(value)
            })
          }
        }
      })
      this.setData({
        valueChange: true
      })
    }
  },
  mounted () {
    this.onLoad()
  }
}
