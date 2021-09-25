<template>
  <div id="app">
    <img alt="PepperHead logo" src="./assets/hot_sauces.png">
    <HotSauceTable msg="Welcome to PepperHead"/>
  </div>
</template>

<script>
import HotSauceTable from './components/HotSauceTable.vue'

export default {
  name: 'App',
  components: {
    HotSauceTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
