export default {
  data () {
    return {
      height: ui.DEFAULT_CONTENT_HEIGHT + 'px',
      imgSrc: null,
      songName: '',
      singerName: null,
      songDuration: null,
      sliderValue: 0,
      play: 'playaudio',
      praise: 'praiseago',
      isPaly: false,
      likeSwitch: false,
      sliderMax: 0,
      sliderMin: 0,
      startTime: '',
      endTime: '',
      index: 0,
      firstStart: true,
      songSrc: '',
      nowPlaytime: 0,
      musicList: [
        {
          src: 'http://h6apptest.duapp.com/xjl.mp3',
          startTime: 0,
          coverImgUrl: 'http://images.uileader.com/20170927/ca859f0e-68ab-416a-a4d7-7324a98c7479.jpg',
          epname: '小精灵',
          singer: 'TFBOYS',
          duration: 112.770,
          webUrl: 'http://uileader.com'
        },
        {
          src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
          startTime: 0,
          coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
          epname: '此时此刻',
          singer: '许巍',
          duration: 284.368,
          webUrl: 'http://uileader.com'
        }
      ],
      show: false,
      likeColor: '#fff',
      likeClass: 'animated',
      likeNum: 175,
      isPlaying: false,
      interval: null,
      curIndex: 0,
      maxFormat: function (num) {
        return parseInt(num / 60) + ':' + parseInt((num % 60 >= 10 ? '' : '00') + (num % 60))
      },
      valueFormat: function (num) {
        return parseInt(num / 60) + ':' + parseInt((num % 60 >= 10 ? '' : '00') + (num % 60))
      },
      tooltipFormat: function (num) {
        return parseInt(num / 60) + ':' + (num % 60 >= 10 ? '' : '0') + (num % 60)
      }
    }
  },
  methods: {
    log (str) {
    },
    handleShow (key) {
      this[key] = false
    },
    listShow () {
      if (this.show) {
        this.show = false
      } else {
        this.show = true
      }
    },
    sliderChange (e) {
      if (this.sliderValue >= parseInt(this.musicList[this.curIndex].duration)) {
        this.sliderValue = parseInt(this.musicList[this.curIndex].duration) - 1
      }
      if (this.firstStart) {
        this.playMusic()
        this.audioCtx.seek(this.sliderValue)
      } else {
        this.audioCtx.seek(this.sliderValue)
      }
    },
    showToast (text) {
      ui.showToast({
        title: text
      })
    },
    // 喜欢
    likeMusic () {
      if (this.likeSwitch) {
        this.praise = 'praiseago'
        this.likeSwitch = false
        this.likeColor = '#fff'
        this.likeClass = 'animated'
        this.likeNum--
      } else {
        this.praise = 'praiseafter'
        this.likeSwitch = true
        this.likeColor = '#F2290D'
        this.likeClass = 'animated bounceIn'
        this.likeNum++
      }
    },
    resetSlider () {
      this.sliderValue = 0
    },
    onLoad () {
      // 获取全局唯一的背景音频管理器
      this.startTime = 0
      this.endTime = 0

      this.songName = this.musicList[this.curIndex].epname
      this.singerName = this.musicList[this.curIndex].singer
      this.imgSrc = this.musicList[this.curIndex].coverImgUrl
      this.sliderMax = this.musicList[this.curIndex].duration

      this.audioCtx = ui.createAudioContext('myAudio')
    },
    playUpdate (e) {
      this.nowPlaytime = e.detail.currentTime
      var val = parseInt(this.nowPlaytime)
      this.sliderValue = val
      // 播放到结尾
      if (parseInt(this.nowPlaytime) === parseInt(this.musicList[this.curIndex].duration)) {
        // 播放下一首或者停止（如果是最后一首）
        this.nextAndStop()
      }
    },
    playStart () {
      this.play = 'pauseaudio'
      this.isPaly = true
    },
    playPause () {
      this.play = 'playaudio'
      this.isPaly = false
    },
    playEnded () {
      this.play = 'playaudio'
      this.isPaly = false
      this.resetSlider()
      this.firstStart = true
    },
    nextAndStop () {
       // 如果不是最后一首
      if (this.curIndex < this.musicList.length - 1) {
        // 切换到下一首
        this.sliderValue = 0
        this.curIndex ++
        this.setInfo(this.curIndex)
      } else { // 如果是最后一首并且没有播放
        // 停止播放
        this.curIndex = this.musicList.length - 1
        ui.showToast({
          title: '最后一首了'
        })
      }
    },

    // 播放/暂停
    playMusic () {
      if (this.isPaly) {
        this.audioCtx.pause()
      } else {
        if (this.firstStart) {
          this.setInfo(this.curIndex)
          this.firstStart = false
        } else {
          this.audioCtx.play()
        }
      }
    },
    // 点击下一首按钮
    onNext () {
      // 不是最后一首时
      if (this.curIndex < this.musicList.length - 1) {
        this.sliderValue = 0
        this.curIndex ++
        this.setInfo(this.curIndex)
      } else { // 如果是最后一首并且正在播放则不做处理
        this.curIndex = this.musicList.length - 1
        ui.showToast({
          title: '最后一首了'
        })
      }
    },
    // 上一首
    onPrev () {
      if (this.curIndex > 0) {
        this.sliderValue = 0
        this.curIndex --
        this.setInfo(this.curIndex)
      } else {
        this.curIndex = 0
        ui.showToast({
          title: '这是第一首'
        })
      }
    },
    // 列表播放
    listPlay (songIndex) {
      this.setInfo(songIndex)
      this.show = false
    },
    // 控制音乐播放进度
    seekBackgroundAudio: function () {
      if (!this.isPaly) {
        this.audioCtx.play()
      }
      this.audioCtx.seek(this.sliderValue)
    },
    setInfo: function (songindex) {
      this.firstStart = false
      this.songName = this.musicList[songindex].epname
      this.singerName = this.musicList[songindex].singer
      this.imgSrc = this.musicList[songindex].coverImgUrl
      this.sliderMax = this.musicList[songindex].duration
      this.curIndex = songindex
      this.play = 'pauseaudio'
      this.isPaly = true
      this.audioCtx = ui.createAudioContext('myAudio')
      this.audioCtx.setSrc(this.musicList[this.curIndex].src)
      this.audioCtx.play()
    }
  },
  mounted () {
    this.onLoad()
  }
}
