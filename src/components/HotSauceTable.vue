<template>
  <div class="row">
    <div class="col-8">
      <h3>Hello, Pepper Heads!</h3>
      <table class="table table-striped center">
        <thead class="thead-dark">
            <th v-for="header in headers" :key="header" scope="col">
              {{ header | capitalize }}
            </th>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.name">
            <td v-for="header in headers" :key="header">{{ item[header] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      searchQuery: "",
      headers: ["sauce", "rating", "SHU", "food_pairings"],
      list: [
{ sauce: "Sriracha", rating: 80, SHU: 2200, food_pairings: "Eggs, Thai" },
{ sauce: "Tobasco", rating: 25, SHU: 3750, food_pairings: "Eggs" },
{ sauce: "Iguana Gold", rating: 95, SHU: 6000, food_pairings: "Pretzels, Sausages" },
{ sauce: "Cholula", rating: 75, SHU: 3600, food_pairings: "Eggs, Mexican" }
      ],
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).replaceAll("_", " ");
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    }
  }
};
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

