// for.js
export default {
  data () {
    return {
      array: [{
        message: 'foo'
      }, {
        message: 'bar'
      }],
      newArry: [1, 2, 3],
      newArry1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      newArry2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      objectArray: [
        {id: 0, unique: 'unique_0'},
        {id: 1, unique: 'unique_1'}
      ],
      numberArray: [1, 2, 3, 4],
      codeDemo1: '<ui-view ui:for="{{array}}">{{index}}: {{item.message}}</ui-view>',
      codeDemo2: '<ui-view ui:for="{{array}}" ui:for-index="idx" ui:for-item="itemName">{{idx}}: {{itemName.message}}</ui-view>',
      codeDemo3: '<ui-view ui:for="{{newArry1}}" ui:for-item="i"><ui-view ui:for="{{newArry2}}" ui:for-item="j"><ui-view ui:if="{{i <= j}}">{{i}} * {{j}} = {{i * j}}</ui-view></ui-view></ui-view>',
      codeDemo4: ' <ui-block ui:for="{{[1, 2, 3]}}"><view> {{index}}: </view><view> {{item}} </view></ui-block>',
      codeDemo5: '',
      codeDemo6: '',
      codeDemo7: '',
      codeDemo8: ''
    }
  },
  methods: {
    downFile (index) {
    },
    switch1: function (e) {
      let length = this.objectArray.length
      for (let i = 0; i < length; ++i) {
        let x = Math.floor(Math.random() * length)
        let y = Math.floor(Math.random() * length)
        let temp = this.objectArray[x]
        this.objectArray[x] = this.objectArray[y]
        this.objectArray[y] = temp
      }
      this.objectArray = this.objectArray
    },
    addToFront: function (e) {
      let length = this.objectArray.length
      this.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.objectArray)
      this.setData({
        objectArray: this.objectArray
      })
    },
    addNumberToFront: function (e) {
      this.numberArray = [ this.numberArray.length + 1 ].concat(this.numberArray)
      this.numberArray = this.numberArray
    }
  }
}
