import util from '#/static/utils/util'
var playTimeInterval
var recordTimeInterval
export default {
  data () {
    return {
      recording: false,
      playing: false,
      hasRecord: false,
      recordTime: 0,
      playTime: 0,
      formatedRecordTime: '00:00:00',
      formatedPlayTime: '00:00:00',
      tempFilePath: ''
    }
  },
  methods: {
    onHide () {
      if (this.$data.playing) {
        this.stopVoice()
      } else if (this.$data.recording) {
        this.stopRecordUnexpectedly()
      }
    },
    startRecord () {
      this.setData({ recording: true })

      var that = this
      recordTimeInterval = setInterval(function () {
        var recordTime = that.$data.recordTime += 1
        that.setData({
          formatedRecordTime: util.formatTime(that.$data.recordTime),
          recordTime: recordTime
        })
      }, 1000)
      ui.startRecord({
        success: function (res) {
          that.setData({
            hasRecord: true,
            tempFilePath: res.tempFilePath,
            formatedPlayTime: util.formatTime(that.$data.playTime)
          })
        },
        complete: function () {
          that.setData({ recording: false })
          clearInterval(recordTimeInterval)
        }
      })
    },
    stopRecord () {
      ui.stopRecord()
    },
    stopRecordUnexpectedly () {
      var that = this
      ui.stopRecord({
        success: function () {
          clearInterval(recordTimeInterval)
          that.setData({
            recording: false,
            hasRecord: false,
            recordTime: 0,
            formatedRecordTime: util.formatTime(0)
          })
        }
      })
    },
    playVoice () {
      var that = this
      playTimeInterval = setInterval(function () {
        var playTime = that.$data.playTime + 1
        that.setData({
          playing: true,
          formatedPlayTime: util.formatTime(playTime),
          playTime: playTime
        })
      }, 1000)
      ui.playVoice({
        filePath: this.$data.tempFilePath,
        success: function () {
          clearInterval(playTimeInterval)
          var playTime = 0
          that.setData({
            playing: false,
            formatedPlayTime: util.formatTime(playTime),
            playTime: playTime
          })
        }
      })
    },
    pauseVoice () {
      clearInterval(playTimeInterval)
      ui.pauseVoice()
      this.setData({
        playing: false
      })
    },
    stopVoice () {
      clearInterval(playTimeInterval)
      this.setData({
        playing: false,
        formatedPlayTime: util.formatTime(0),
        playTime: 0
      })
      ui.stopVoice()
    },
    clear () {
      clearInterval(playTimeInterval)
      ui.stopVoice()
      this.setData({
        playing: false,
        hasRecord: false,
        tempFilePath: '',
        formatedRecordTime: util.formatTime(0),
        recordTime: 0,
        playTime: 0
      })
    }
  }
}
