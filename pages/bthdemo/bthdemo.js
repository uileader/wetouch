// bthdemo.js
export default {
  data () {
    return {
      connected: false,
      deviceId: null,
      thisValue: '',
      idValue: null
    }
  },
  watch: {
    thisValue (val) {
      console.log(this.thisValue)
    }
  },
  destroy () {
    ui.closeBLEConnection({
      deviceId: this.deviceId,
      success: () => {
        ui.showToast({
          title: '已断开连接'
        })
      }
    })
  },
  mounted () {
    
  },
  methods: {
    startConnection () {
      ui.openBluetoothAdapter({
        success: () => {
          ui.showToast({
            title: '已打开适配器'
          })
          ui.getBluetoothAdapterState({
            success: () => {
              ui.showToast({
                title: '已获取适配器状态'
              })
              ui.startBluetoothDevicesDiscovery({
                allowDuplicatesKey: false,
                success: (errMsg) => {
                  ui.showToast({
                    title: '开始搜索蓝牙设备'
                  })
                  setTimeout(() => {
                    ui.stopBluetoothDevicesDiscovery({
                      success: () => {
                        ui.getBluetoothDevices({
                          success: (deviceArr) => {
                            console.log(deviceArr)
                            for (let i = 0; i < deviceArr.devices.length; i++) {
                              console.log(deviceArr.devices[i].name)
                              if (deviceArr.devices[i].name === 'JDY-16') {
                                this.deviceId = deviceArr.devices[i].deviceId
                                break
                              }
                            }
                            ui.createBLEConnection({
                              deviceId: this.deviceId,
                              success: () => {
                                ui.showToast({
                                  title: '已打开适配器'
                                })
                                this.connected = true
                                console.log('hehehe')

                                ui.getBLEDeviceServices({
                                  deviceId: this.deviceId,
                                  success: (res) => {
                                    console.log('device services:', res.services)
                                    ui.getBLEDeviceCharacteristics({
                                      // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                                      deviceId: this.deviceId,
                                      // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
                                      serviceId: '0000FFE0-0000-1000-8000-00805F9B34FB',
                                      success:(res) => {
                                        console.log(this.deviceId)
                                        ui.notifyBLECharacteristicValueChange({
                                          deviceId: this.deviceId,
                                          serviceId: '0000FFE0-0000-1000-8000-00805F9B34FB',
                                          characteristicId: '0000FFE2-0000-1000-8000-00805F9B34FB',
                                          state: true,
                                          success: (res) => {
                                            console.log('已监听成功服务')
                                          },
                                          complete: (res) => {
                                            console.dir(res)
                                          }
                                        })
                                        ui.onBLECharacteristicValueChange((res) => {
                                          console.log('特征值数据更改')
                                          ui.showToast({
                                            title: '特征值数据更改'
                                          })
                                        })
                                        ui.showToast({
                                          title: '一切就绪，可以发送数据'  
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }, 5000)
                }
              })
            }
          })
        }
      })
    },
    sendMessage () {
      let buffer = new ArrayBuffer(1)
      let dataView = new DataView(buffer)
      dataView.setUint8(0, 0)
      ui.writeBLECharacteristicValue({
        deviceId: this.deviceId,
        serviceId: '0000FFE0-0000-1000-8000-00805F9B34FB',
        characteristicId: '0000FFE1-0000-1000-8000-00805F9B34FB',
        value: this.charToArrayBuffer(this.thisValue),  
        success: function (res) {
          console.dir(res)
        }
      })
    },
    charToArrayBuffer (str) {
      let out = new ArrayBuffer(str.length * 2)
      let u16a= new Uint16Array(out)
      let strs = str.split('')
      for(let i = 0; i < strs.length; i++){
        u16a[i] = strs[i].charCodeAt()
      }
      return out
    },
    arrayBufferToChar(buf){
      var out="";
      var u16a = new Uint16Array(buf);
      var single ;
      for(var i=0 ; i < u16a.length;i++){
          single = u16a[i].toString(16)
          while(single.length<4) single = "0".concat(single);
          out+="\\u"+single;
      }
      return eval("'"+out+ "'")
    },
    getUUID () {
        console.log('guuid')
        let ab = new ArrayBuffer(2)
        let dv = new DataView(ab)
        dv.setUint16(0, 0xe112)
        ui.writeBLECharacteristicValue({
        deviceId: this.deviceId,
        serviceId: '0000FFE0-0000-1000-8000-00805F9B34FB',
        characteristicId: '0000FFE2-0000-1000-8000-00805F9B34FB',
        value: ab,  
        success: function (res) {
          console.dir(res)
        }
      })
    },
    getMajorId () {
      let ab = new ArrayBuffer(2)
      let dv = new DataView(ab)
      dv.setUint16(0, 0xe222)
      ui.writeBLECharacteristicValue({
        deviceId: this.deviceId,
        serviceId: '0000FFE0-0000-1000-8000-00805F9B34FB',
        characteristicId: '0000FFE2-0000-1000-8000-00805F9B34FB',
        value: ab,  
        success: function (res) {
          console.dir(res)
        }
      })
    },
    getMinorId () {
      let ab = new ArrayBuffer(2)
      let dv = new DataView(ab)
      dv.setUint16(0, 0xe332)
      ui.writeBLECharacteristicValue({
        deviceId: this.deviceId,
        serviceId: '0000FFE0-0000-1000-8000-00805F9B34FB',
        characteristicId: '0000FFE2-0000-1000-8000-00805F9B34FB',
        value: ab,
        success: function (res) {
          console.dir(res)
        }
      })
    }
  }
}
