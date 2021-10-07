<template>
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
                <li><a href="/">Reviews</a></li>
                <li><a href="/wanted">Wanted</a></li>
              </ul>
            </nav>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
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
