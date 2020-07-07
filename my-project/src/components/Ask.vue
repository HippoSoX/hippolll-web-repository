<template>
<div id="ask">
  <button @click="get">点击获取大佬人生经验</button>
  <p id="mes"></p>
</div>
</template>

<script>
export default {
  name: 'ask',
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    get () {
      this.$axios
        .get('https://api.scuter.icu/test/word')
        .then(function (Response) {
          console.log(Response.data)
          if (Response.data.code) {
            document.getElementById('mes').innerHTML = '请求失败'
          } else {
            document.getElementById('mes').innerHTML = Response.data.word
          }
        })
        .catch(function () {
          /* console.log(error.data)
          this.message = JSON.stringify(error.data) */
        })
    }
  }
}
</script>

<style>
button {
    width: 150px;
    height: 30px
}
</style>
