<template>
<div>
  <h3>Hello, {{ followers }}!</h3>
  <table class="center">
    <tr>
      <th>Sauce</th>
      <th>SHU</th>
      <th>Foods</th>
    </tr>
    <tr>
      <td>Sriacha</td>
      <td>2200</td>
      <td>Eggs, Thai</td>
    </tr>
    <tr>
      <td>Iguana Gold</td>
      <td>6000</td>
      <td>Sausages, Pretzels</td>
    </tr>
  </table>
</div>
</template>


<script>
export default {
  data:  function() {
    return {
      followers: 'Pepper Heads'
    }
  }
}
</script>


<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #d43800;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #d43800;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>

