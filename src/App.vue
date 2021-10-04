<template>
  <div id="app">
    <!-- TODO: Move nav bar to its own component -->
    <div id="nav" class="header">
      <table class="hidden-table">
        <tbody>
          <tr class="hidden-table">
            <td>
              <p class="header-logo"><a href="#">PepperHead</a></p>
            </td>
            <td>
              <nav class="nav-global">
                <ul>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Wanted</a></li>
                </ul>
              </nav>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>Hot Sauce Reviews</h2>
    <p>by Some Pepper Head</p>
    <br />

    <HotSauceTable msg="Hot Sauce Reviews"/>

    <br />
    <p>The above are just my opinions, obviously. For instance, I'm not a big fan of Louisiana hot sauces. Also, I am only reviewing commercially available hot sauces.</p>
    <br />

    <!-- TODO: Move WANTED list to a table, like  to its own component -->
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
import HotSauceTable from './components/HotSauceTable.vue'

export default {
  name: 'App',
  components: {
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

.header {
  display:block;
  padding-left:1em;
  padding-right:1em;
}

.header-logo {
  font-size:24px;
  font-weight: bolder;
  font-family: monospace, monospace;
  margin:0px;
  padding-top:.75em;
  padding-bottom:.75em;
}

.header-logo a:active, .header-logo a:hover, .header-logo a:link, .header-logo a:visited {
  color:#9f2a00;
  text-decoration:none;
  font-weight: bolder;
}

.nav-global {
  font-weight: bolder;
  margin-top:0;
  text-align:right;
  width:15em;
  float:right;
}

.nav-global a:active, .nav-global a:hover, .nav-global a:link, .nav-global a:visited {
  color:#017924;
  text-decoration:none;
  font-weight: bolder;
}

.nav-global ul {
  list-style:none;
  list-style-image:none;
  margin:0;
  padding:0;
}

.nav-global li {
  display:inline-block;
  line-height:normal;
  letter-spacing:normal;
  margin-right:16px;
  word-spacing:normal;
  vertical-align:middle;
}

.hidden-table {
  border:0;
  margin:0;
  padding:0;
  border-spacing:0;
  width:90%;
}
</style>
