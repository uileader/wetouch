export default {
  data () {
    return {
      current1: 0,
      current2: 0,
      isnull: false,
      isflag: 0,
      ratate: 0,
      films: [
        {
          film: ''
        }, {
          film: [
            {
              startTime: '09:20',
              endTime: '11:23散场',
              filmMode: '英语2D',
              filmHall: '7号厅',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }, {
              startTime: '10:05',
              endTime: '12:08散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }
          ]
        }, {
          film: [
            {
              startTime: '10:20',
              endTime: '12:23散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }, {
              startTime: '12:35',
              endTime: '14:38散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }, {
              startTime: '14:50',
              endTime: '16:53散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }
          ]
        }, {
          film: [
            {
              startTime: '08:20',
              endTime: '10:23散场',
              filmMode: '英语3D',
              filmHall: '7号厅',
              filmSale: '￥50.9起',
              filmPrice: '66元',
              filmState: '购买'
            }, {
              startTime: '12:35',
              endTime: '14:38散场',
              filmMode: '英语2D',
              filmHall: '1号厅',
              filmSale: '￥48.9起',
              filmPrice: '60元',
              filmState: '购买'
            }, {
              startTime: '13:50',
              endTime: '15:53散场',
              filmMode: '英语3D',
              filmHall: '9号厅',
              filmSale: '￥40.9起',
              filmPrice: '50元',
              filmState: '购买'
            }, {
              startTime: '14:50',
              endTime: '16:53散场',
              filmMode: '英语2D',
              filmHall: '5号厅',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }
          ]
        }, {
          film: [
            {
              startTime: '10:20',
              endTime: '12:23散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }, {
              startTime: '14:50',
              endTime: '16:53散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }
          ]
        }, {
          film: [
            {
              startTime: '12:35',
              endTime: '14:38散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }, {
              startTime: '14:50',
              endTime: '16:53散场',
              filmMode: '英语2D',
              filmHall: 'POLY全景巨幕厅(大)',
              filmSale: '￥35.9起',
              filmPrice: '39元',
              filmState: '购买'
            }
          ]
        }, {
          film: [
            {
              startTime: '10:20',
              endTime: '12:23散场',
              filmMode: '英语2D',
              filmHall: '5号厅',
              filmSale: '￥55.9起',
              filmPrice: '69元',
              filmState: '购买'
            }, {
              startTime: '12:35',
              endTime: '14:38散场',
              filmMode: '英语2D',
              filmHall: '1号厅',
              filmSale: '￥55.9起',
              filmPrice: '59元',
              filmState: '购买'
            }, {
              startTime: '14:50',
              endTime: '16:53散场',
              filmMode: '英语2D',
              filmHall: '7号厅',
              filmSale: '￥50.9起',
              filmPrice: '59元',
              filmState: '购买'
            }
          ]
        }
      ],
      filmData: [],
      currentData: {
        startPlace: '上海',
        startTime: '3月8日',
        startWek: '周四',
        endPlace: '三亚',
        endTime: '3月9日',
        endWek: '周五',
        startHotel: '上海'
      }
    }
  },
  methods: {
    handleChange (index, key) {
      this[key] = index
      if (key === 'current1') {
        this.filmData = this.films[index]
        if (this.filmData.film !== '') {
          this.filmData = this.films[index]
          this.isnull = false
        } else {
          this.isnull = true
        }
      } else if (key === 'current2') {
        this.isflag = index
      }
    },
    changeAir () {
      let ratate = this.ratate
      let active
      if (ratate === 0) {
        active = this.currentData.startPlace
        this.currentData.startPlace = this.currentData.endPlace
        this.currentData.endPlace = active
        this.ratate = 180
      } else {
        active = this.currentData.startPlace
        this.currentData.startPlace = this.currentData.endPlace
        this.currentData.endPlace = active
        this.ratate = 0
      }
    }
  },
  mounted () {
    this.filmData = this.films[0]
    if (this.filmData.film === '') {
      this.isnull = true
    } else {
      this.filmData = this.films[0]
    }
  }
}
