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

    <!-- TODO: Move WANTED list to a table, and its own component -->
    <h4>Hot Sauces I Want to Try</h4>
    <ul style="text-align:left;">
      <li>Bonache - Piri Piri sauce - Washington state</li>
      <li>Mike's Fine Brines - Chipolte - Washington state</li>
      <li>Hot Girl Hot Saucei - Jamacian style - Washington state</li>
      <li>Aardvark Sauce - Oregon</li>
      <li><a href="https://www.seattlemag.com/restaurants/washington%E2%80%99s-hot-sauce-game-fire">Check out this list of locals</a></li>
      <li><a href="https://www.amazon.com/dp/B004MXR9AU/">Pain is Good - Habanero Sauce</a></li>
      <li><a href="https://www.amazon.com/dp/B06XX4R3GX/">Ghost Pepper Hot Sauce by Yellowbird</a></li>
      <li><a href="https://www.amazon.com/dp/B00BADXRRO">Rogue Moruga Blood Orange Scorpion Pepper Sauce</a></li>
      <li><a href="https://www.amazon.com/dp/B06XF8SRHY/">QUEEN MAJESTY HOT SAUCE Hot Sauce Red Habanero Black Coffee</a></li>
      <li><a href="https://www.amazon.com/dp/B01KB7XZ62">Cheeba Gold Barbados Style Scotch Bonnet Pepper Sauce</a></li>
    </ul>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HotSauceTable from './components/HotSauceTable.vue'

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
