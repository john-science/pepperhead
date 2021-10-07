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
import NavBar from '@/components/NavBar.vue'
import HotSauceTable from '@/components/HotSauceTable.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HotSauceTable
  }
}
</script>

<style>
html {
  background-color:#333;
  color:#eee;
  overflow-y:scroll;
  text-align:center;
}

body {
  margin:0px;
}

h1,h2,h3,h4 {
  color:#eee;
  background-color:#9f2a00;
  margin:0px;
}

h1,h2 {
  padding:.5em;
}

h3,h4 {
  padding:.25em;
}

a:active, a:hover, a:link, a:visited {
  color:green;
  text-decoration:none;
}
</style>
