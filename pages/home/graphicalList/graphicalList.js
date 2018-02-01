// graphicalList.js
export default {
  data () {
    return {
      groups: [
        {
          title: '图形与交互',
          items: [
            { title: '角标 badge', link: '/pages/componentDemo/badge/badge' },
            { title: '分隔符 divider', link: '/pages/componentDemo/divider/divider' },
            { title: '星级评价 star', link: '/pages/componentDemo/star/star' },
            { title: '星级展示 mini-star', link: '/pages/componentDemo/miniStar/miniStar' },
            { title: '波浪 wave', link: '/pages/componentDemo/wave/wave' },
            { title: '手势解锁 locker（设置）', link: '/pages/componentDemo/locker/locker' },
            { title: '手势解锁 locker（解锁）', link: '/pages/componentDemo/locker/locker2' },
            { title: '绘图 canvas', link: '/pages/componentDemo/canvas/canvas' }
          ]
        },
        {
          title: '时间轴 timeline',
          items: [
            { title: '竖向时间轴', link: '/pages/componentDemo/timeline/timeline' },
            { title: '横向时间轴', link: '/pages/componentDemo/timeline/timeline2' },
            { title: '时间轴综合', link: '/pages/componentDemo/timeline/timeline3' }
          ]
        },
        {
          title: '进度',
          items: [
            { title: '进度环 circular', link: '/pages/componentDemo/circular/circular' },
            { title: '多层进度环 multi-circular', link: '/pages/componentDemo/multiCircular/multiCircular' },
            { title: '迷你进度环 mini-circular', link: '/pages/componentDemo/miniCircular/miniCircular' },
            { title: '进度条 progress', link: '/pages/componentDemo/progress/progress' },
            { title: '进度条应用案例', link: '/pages/componentDemo/progress/progress2' }

          ]
        },
        {
          title: '图表',
          items: [
            { title: '柱状图 条形图 bar', link: '/pages/componentDemo/chart/bar/bar' },
            { title: '分组柱状图 grouped-bar', link: '/pages/componentDemo/chart/groupedBar/groupedBar' },
            { title: '堆积柱状图 stacked-bar', link: '/pages/componentDemo/chart/stackedBar/stackedBar' },
            { title: '折线图 曲线图 line', link: '/pages/componentDemo/chart/line/line' },
            { title: '面积图 stacked-area', link: '/pages/componentDemo/chart/stackedArea/stackedArea' },
            { title: '环形图 donut', link: '/pages/componentDemo/chart/donut/donut' },
            { title: '轮播环形图 slide-donut', link: '/pages/componentDemo/chart/slideDonut/slideDonut' },
            { title: '层级环形图 level-donut', link: '/pages/componentDemo/chart/levelDonut/levelDonut' },
            { title: '漏斗图 funnel', link: '/pages/componentDemo/chart/funnel/funnel' },
            { title: '直方图 step', link: '/pages/componentDemo/chart/step/step' },
            { title: '趋势图 sparkline', link: '/pages/componentDemo/chart/sparkline/sparkline' },
            { title: '对比图 contrast', link: '/pages/componentDemo/chart/contrast/contrast' },
            { title: '仪表盘 dashboard', link: '/pages/componentDemo/chart/dashboard/dashboard' }
          ]
        }
      ]
    }
  },
  mounted () {
  }
}