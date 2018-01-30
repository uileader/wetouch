// fundRank.js
let current=0
export default {
  data() {
    return {
      thisHeader: [
        {
          name: 'date',
          sort: false,
          headerAlign: 'left',
          fixed: 'left',
          width: '120',
          render: (h, params) => {
            return h('div', {
              style: {
              }
            }, [h('span', {
              style: {
                display: 'block',
                fontSize: '12px',
                color: '#313131',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                width:'104px'
              }
              }, this.thisDatas[current].rows[params].name),
            h('span', {
              style: {
                display: 'inline-block',
                fontSize: '10px',
                color: '#9E9E9E'
              }
            }, this.thisDatas[current].rows[params].number)
              ])
          },
          headerRender: (h) => {
            return h('div', {
              style: {
                lineHeight: '50px'
              }
            }, '基金名称')
          }
        }, {
          name: 'net_value',
          sort: false,
          headerAlign: 'center',
          align: 'center',
          width: '120',

          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '单位净值')
              ])
          },
          render: (h, params) => {

            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].net_value)
          }
        }, {
          name: 'week_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          width: '120',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '周涨跌幅')
              ])
          }
        }, {
          name: 'month_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          width: '120',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '月涨跌幅')
              ])
          },
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].month_rise)
          }
        }, {
          name: 'quarter_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          width: '120',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '季涨跌幅')
              ])
          }
        }, {
          name: 'half_year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          width: '120',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '半年涨跌幅')
              ])
          },
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].half_year_rise)
          }
        }, {
          name: 'this_year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          width: '120',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '今年涨跌幅')
              ])
          }
        }, {
          name: 'year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          width: '120',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '年涨跌幅')
              ])
          },
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].year_rise)
          }
        }, {
          name: 'three_year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          width: '120',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '70px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '近三年涨跌幅')
              ])
          }
        }
      ],
      thisDatas:[
        {
          rows: [{
            name: '1天虹巨力灵活配置混合1',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '2天虹巨力灵活配置混合2',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '3天虹巨力灵活配置混合3',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力灵活配置混合4',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力灵活配置混合5',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力灵活配置混合6',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力灵活配置混合7',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力灵活配置混合8',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力灵活配置混合9',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }
      ],
      tabledatas: {},
      editText: '编辑',
      isEdit: true,
      //拖拽
      windowWidth: ui.WIN_WIDTH,
      el: 0,
      list: [{
        name: '前端',
        number: 378456,
        id: 'id1',
        height: 70,
        canSwipe: false
      }, {
        name: '前端',
        number: 378456,
        id: 'id2',
        height: 70,
        canSwipe: false
      }]
    }
  },
  methods: {
    changeTab(index) {
      current=index
      this.tabledatas = this.thisDatas[current]
    },
    navigateBack() {
      ui.navigateBack()
    },
    showFullScreenSearch() {
      ui.app.searchShow = true
      ui.setStatusBarStyle({ style: 'dark' })
    }
  },
  mounted() {
    this.tabledatas = this.thisDatas[current]
  }
}
