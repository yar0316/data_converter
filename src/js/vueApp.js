
new Vue({
  el: '#app',
  data: {
    inputData: '',
    convertedData: 'hello'
  },
  methods: {
    execConvert: function(){
      this.convertedData = conversion(this.inputData)
    }
  }
})