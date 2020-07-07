<template>
  <div id="answer">
    <form>
      <input type="number" v-model="num1" />
      <select id="cal" v-model="cal" >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input type="number" v-model='num2' />
    </form>
    <div v-if="cal === '+'">
      <p>{{ Number(num1) + Number(num2) }}</p>
    </div>
    <div v-else-if="cal === '-'">
      <p>{{ Number(num1) - Number(num2) }}</p>
    </div>
    <div v-else-if="cal === '*'">
      <p>{{ Number(num1) * Number(num2) }}</p>
    </div>
    <div v-else-if="cal === '/'">
      <p>{{ Number(num1) / Number(num2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'answer',
  data: function () {
    return {
      num1: 0,
      num2: 0,
      cal: '+',
      ans: 0
    }
  }
}
</script>

<style>
</style>
