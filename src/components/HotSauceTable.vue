<template :heroes="listData" :headers="headers">
  <div>
    <h3>Hello, Pepper Heads!</h3>
    <table class="center">
      <thead>
        <th v-for="header in headers" :key="header" @click="sortBy(header)" :class="{ active: sortKey == header }">
          {{ header | capitalize }}
        </th>
      </thead>
      <tbody>
        <tr v-for="item in filteredHeroes" :key="item.sauce">
          <td v-for="header in headers" :key="header">{{ item[header] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  props: {
    heroes: Array,
    headers: Array,
    filterKey: String
  },
  data: function() {
    this.headers = ["sauce", "rating", "SHU", "food_pairings"];
    this.filterKey = "";
    this.sortKey = "";
    var sortOrders = {};
    this.headers.forEach(function(key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: "",
      sortOrders: sortOrders,
      listData: [
{ sauce: "Sriracha", rating: 80, SHU: 2200, food_pairings: "Eggs, Thai" },
{ sauce: "Tobasco", rating: 25, SHU: 3750, food_pairings: "Eggs" },
{ sauce: "Iguana Gold", rating: 95, SHU: 6000, food_pairings: "Pretzels, Sausages" },
{ sauce: "Cholula", rating: 75, SHU: 3600, food_pairings: "Eggs, Mexican" }
      ],
    }
  },
  computed: {
    filteredHeroes: function() {
      var sortKey = this.sortKey;
      var filterKey = this.filterKey && this.filterKey.toLowerCase();
      var order = this.sortOrders[sortKey] || 1;
      var heroes = this.heroes;

      // TODO: This should be unnecessary. We are missing some Vue data binding.
      if (typeof(heroes) == "undefined"){
        heroes = this.listData;
      }

      if (filterKey) {
        heroes = heroes.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
              .toLowerCase()
              .indexOf(filterKey) > -1
            );
          });
        });
      }
      if (sortKey) {
        heroes = heroes.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return heroes;
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

