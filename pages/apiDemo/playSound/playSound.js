export default {
  data () {
    return {
      voiceClass: '',
      downUrl: 'http://h6apptest.duapp.com/xjl.mp3',
      downUrl2: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      voicePath: '',
      voicePath2: '',
      isPlay: false,

      voiceClass2: '',
      isPlay2: false,
      voice: false,
      voice2: false
    }
  },
  //
  methods: {
    playVoice () {
      var that = this
      this.isPlay2 = false
      this.voiceClass2 = ''
      if (this.isPlay) {
        this.stopVoice()
        this.isPlay = false
      } else {
        this.voiceClass = 'icon_voice_action'
        ui.playVoice({
          filePath: that.voicePath,
          success: function (res) {
          },
          fail () {
          },
          complete: function () {
          }
        })
        this.isPlay = true
      }
    },
    playVoice2 () {
      var that = this
      this.isPlay = false
      this.voiceClass = ''
      if (this.isPlay2) {
        this.pauseVoice()
        this.isPlay2 = false
      } else {
        this.voiceClass2 = 'icon_voice_action'
        ui.playVoice({
          filePath: that.voicePath2,
          success: function (res) {
          },
          fail () {
          },
          complete: function () {
          }
        })
        this.isPlay2 = true
      }
    },
    pauseVoice () {
      ui.pauseVoice()
      this.voiceClass2 = ''
    },
    stopVoice () {
      ui.stopVoice()
      this.voiceClass = ''
    },
    downloadVoice () {
      var that = this
      ui.downloadFile({
        url: that.downUrl,
        success: function (res) {
          that.voicePath = res.tempFilePath
          that.voice = true
        },
        fail: function ({ errMsg }) {
        },
        complete: function () {
        }
      })
    },
    downloadVoice2 () {
      var that = this
      ui.downloadFile({
        url: that.downUrl2,
        success: function (res) {
          that.voicePath2 = res.tempFilePath
          that.voice2 = true
        },
        fail: function ({ errMsg }) {
        },
        complete: function () {
        }
      })
    }

  },
  mounted () {
    this.downloadVoice()
    this.downloadVoice2()
  }

}
