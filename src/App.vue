<template>
  <div id="app">
    <img alt="PepperHead logo" src="./assets/hot_sauces.png">
    <h3>Hot Sauce Reviews</h3>
    <h4>by... Some Pepper Head</h4>

    <HotSauceTable msg="Hot Sauce Reviews"/>

    <br />
    <p>The reviews above are obviously based on personal taste. I obviously like spicy sauces, but I also like to use <strong>a lot</strong> of sauce, so I tend to dislike vinegar-heavy sauces. Please
    don't send me hate mail if you disagree with these ratings. Perhaps some day I will build a community hot sauce review site, where you can make your own voice heard.</p>
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
