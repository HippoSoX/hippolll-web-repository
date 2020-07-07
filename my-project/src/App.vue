<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <p>计算器</p>
    <answer/>
    <ask/>
  </div>
</template>

<script>
import answer from './components/Answer.vue'
import ask from './components/Ask'
export default {
  name: 'app',
  components: { answer, ask }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
