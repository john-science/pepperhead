<template>
  <div id="app">
    <NavBar />

    <h2>Hot Sauce Reviews</h2>
    <p>by Some Pepper Head</p>
    <br />

    <HotSauceTable />

    <br />
    <p>The above are just my opinions, obviously. For instance, I'm not a big fan of Louisiana hot sauces. Also, I am only reviewing commercially available hot sauces.</p>
    <br />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HotSauceTable from '@/components/HotSauceTable.vue';
import "@/global-style.css";

export default {
  name: 'App',
  components: {
    NavBar,
    HotSauceTable
  }
}
</script>

<style>
</style>
