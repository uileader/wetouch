// bindData.js
export default {
  data () {
    return {
      message: 'Hello TOUCH UI',
      id: 0,
      condition: true,
      flag: false,
      a: 1,
      b: 2,
      c: 3,
      length: 7,
      name: 'TOUCH UI',
      object: {
        key: 'Hello '
      },
      array: ['TOUCH UI'],
      zero: 0,
      arryitem: [1, 2, 3, 4],
      arryitem2: [10, 20, 3, 40],
      arryitem3: [15, 10, 90, 30],
      codeDemo1:'<ui-view>{{ message }}</ui-view>',
      codeDemo2:'<ui-view id="item-{{ id }}"></ui-view>',
      codeDemo3:'<ui-view ui:if="{{ condition }}"> </ui-view>',
      codeDemo4:'<ui-checkbox checked="{{true}}"> </ui-checkbox>',
      codeDemo5:'<ui-view hidden="{{flag ? true : false}}"> Hidden </ui-view>',
      codeDemo6:'<ui-view> {{a + b}} + {{c}} + d </ui-view>',
      codeDemo7:'<ui-view ui:if="{{length > 5}}">123</ui-view>',
      codeDemo8:'<ui-view>{{"hello" + name}}</ui-view>',
      codeDemo9:'<ui-view>{{object.key}} {{array[0]}}</ui-view>',
      codeDemo10:'<ui-view ui:for="{{arryitem}}">{{item}}</ui-view>',
      codeDemo11:'<ui-view ui:for="{{arryitem2}}" ui:for-item="obj">{{obj}}</ui-view>',
    }
  },
  methods: {}
} 
