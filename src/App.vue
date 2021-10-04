<template>
  <div id="app">
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
html {
  background-color:#333333;
  color:#eeeeee;
  overflow-y:scroll;
  text-align:center;
}

body {
  margin:0px;
}

.header {
  display:block;
  background-color:#9f2a00;
  color:#ffffff;
  padding-left:1em;
  padding-right:1em;
}

.header a:active, .headder a:hover, .header a:link, .header a:visited {
  color:#ffffff;
  text-decoration:none;
}

.header-logo {
  font-size:24px;
  margin:0px;
  padding-top:.75em;
  padding-bottom:.75em;
}

.nav-global {
  margin-top:0;
  text-align:right;
  width:15em;
  float:right;
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
