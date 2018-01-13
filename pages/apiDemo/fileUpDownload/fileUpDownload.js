// fileUpDownload.js
var downloadTask
var backgroundAudioManager
export default {
  data () {
    return {
      curIndex: 0,
      current: 0,
      disabled: false,
      musicList: [
        {
          id: '123',
          src: 'http://h6apptest.duapp.com/xjl.mp3',
          startTime: 0,
          coverImgUrl: 'http://images.uileader.com/20170927/ca859f0e-68ab-416a-a4d7-7324a98c7479.jpg',
          epname: '小精灵',
          singer: 'TFBOYS',
          duration: 112.770,
          webUrl: 'http://uileader.com',
          disabled: false
        }
      ],
      musicList2: [],
      filePath: '',
      fristDown: true,
      key: 'song',
      isPlay: false,
      firstStart: true,
      progress: 0,
      current1: 0
    }
  },
  methods: {
    changeSwiper (index) {
      // this.current = index
    },
    handlechange (index) {

    },
    handleChange (index, key) {
      this[key] = index
    },
    handleContentChange (index, key) {
      this[key] = index
    },

    downFile (index) {
      var self = this
      // 下载文件
      downloadTask = ui.downloadFile({
        url: self.musicList[index].src,
        success: function (res) {
          // 下载成功后得到临时路径，
          // 保存为本地存储区（app应用沙箱）
          ui.saveFile({
            tempFilePath: res.tempFilePath,
            success: function (res) {
              // 保存成功后返回本地文件路径
              var obj = {}
              obj.id = self.musicList[index].id
              obj.src = res.savedFilePath
              obj.epname = self.musicList[index].epname
              obj.singer = self.musicList[index].singer
              self.musicList2.push(obj)
              self.musicList[index].disabled = true
              ui.showToast({
                title: '下载成功', icon: 'success'
              })
              // 保存到本地缓存
              self.storage(self.key, obj)
              // 获取本地文件列表
              self.getSavedFileList()
            }
          })
        },
        fail: function ({ errMsg }) {
          ui.showToast({
            title: '文件下载失败'
          })
        },
        complete: function () {

        }
      })
      downloadTask.onProgressUpdate((res) => {
        self.progress = res.progress
      })
    },
    // 获取本地已保存的文件列表
    getSavedFileList () {
      ui.getSavedFileList({
        success: function (res) {
        }
      })
    },
    // 存入缓存
    storage (song, content) {
      ui.setStorageSync(song, content)
    },
    // 获取缓存
    getStorage (index) {
      var that = this
      var songContent = ui.getStorageSync(index)
      if (songContent !== null) {
        if (songContent.id === this.musicList[0].id) {
          this.musicList[0].disabled = true
        } else {
          this.musicList[0].disabled = false
        }
        this.musicList2.push(songContent)
      }
      backgroundAudioManager = ui.getBackgroundAudioManager()
      // 监听音乐播放。
      ui.onBackgroundAudioPlay(function () {
        that.isPlay = true
      })
      // 监听音乐暂停。
      ui.onBackgroundAudioPause(function () {
        that.isPlay = false
      })
      // 监听音乐停止。
      ui.onBackgroundAudioStop(function () {
        that.isPlay = false
        that.firstStart = true
      })
    },
    // 播放/暂停
    playMusic (index) {
      if (this.isPlay) {
        backgroundAudioManager.pause()
      } else {
        if (this.firstStart) {
          this.setInfo(this.curIndex)
        } else {
          backgroundAudioManager.play()
        }
      }
    },
    deleteSong () {
      var that = this
      // 删除本地缓存
      ui.removeStorageSync(this.key)
      // 根据当前路径删除本地文件
      ui.removeSavedFile({
        filePath: that.musicList2[0].src,
        success: function (res) {
          // 获取本地文件列表
          that.getSavedFileList()
          that.progress = 0
          that.musicList[0].disabled = false
          that.musicList2.splice(0, that.musicList2.length)
          ui.showToast({
            title: '已删除'
          })
        },
        fail: function () {
        },
        complete: function (res) {
        }
      })
    },
    getBackgroundAudioManager: function () {
      var propertys = ['duration', 'currentTime', 'paused', 'src', 'startTime', 'buffered', 'title', 'epname', 'singer', 'coverImgUrl', 'webUrl']
      propertys.forEach(property => {
        this.info = property + ':' + backgroundAudioManager[property]
      })
    },
    setInfo: function (songindex) {
      this.firstStart = false
      this.songName = this.musicList2[songindex].epname
      this.singerName = this.musicList2[songindex].singer
      this.imgSrc = this.musicList2[songindex].coverImgUrl
      this.curIndex = songindex

      backgroundAudioManager.src = this.musicList2[songindex].src
      backgroundAudioManager.startTime = this.musicList2[songindex].startTime
      backgroundAudioManager.coverImgUrl = this.musicList2[songindex].coverImgUrl
      backgroundAudioManager.epname = this.musicList2[songindex].epname
      backgroundAudioManager.singer = this.musicList2[songindex].singer
    }
  },
  mounted () {
    this.getStorage(this.key)
  }
}
