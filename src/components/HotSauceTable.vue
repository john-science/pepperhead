<template>
  <div>
    <h3>Hot Sauce Reviews</h3>
    <h4>by... some pepper head</h4>

    <form id="search">
      Search <input name="query" class="inputClass" v-model="searchQuery" />
    </form>
    <br />

    <table class="center" :filter-key="searchQuery">
      <thead>
        <th v-for="header in headers" :key="header" @click="sortBy(header)" :class="{ active: sortKey == header }">
          {{ header | capitalize }}
        <template v-if="header != 'food_pairings' && header != 'flavor'">
          <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'"></span>
        </template>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in filteredHeroes" :key="item.sauce">
          <td v-for="header in headers" :key="header">{{ item[header] }}</td>
        </tr>
      </tbody>
    </table>

    <br />
    <p>The reviews above are obviously based on personal taste. I obviously like spicy sauces, but I also like to use <strong>a lot</strong> of sauce, so I tend to dislike vinegar-heavy sauces. Please
    don't send me hate mail if you disagree with these ratings. Perhaps some day I will build a community hot sauce review site, where you can make your own voice heard.</p>
  </div>
</template>


<script>
import rawData from "../assets/hot_sauce_reviews.json";
let rawHeaders = Object.keys(rawData[0]);

export default {
  props: {
    heroes: Array,
    headers: Array,
    filterKey: String
  },
  data: function() {
    this.headers = rawHeaders;
    this.filterKey = "";
    this.sortKey = "";
    var sortOrders = {};
    this.headers.forEach(function(key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: "",
      searchQuery: "",
      sortOrders: sortOrders,
      listData: rawData,
    }
  },
  computed: {
    filteredHeroes: function() {
      var sortKey = this.sortKey;
      var order = this.sortOrders[sortKey] || 1;
      // TODO: These 2 should be unnecessary. We are missing some Vue data binding.
      var heroes = this.listData;
      var filterKey = this.searchQuery;

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
      if (key != "food_pairings" && key != "flavor") {
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1;
      }
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

