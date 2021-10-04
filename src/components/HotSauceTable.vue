<template>
  <div>
    <form id="search">
      Search <input name="query" class="inputClass" v-model="searchQuery" />
    </form>
    <br />

    <table class="center">
      <thead>
        <th v-for="header in headers" :key="header" @click="sortBy(header)" :class="{ active: sortKey == header }">
          {{ header | capitalize }}
        <template v-if="header != 'food_pairings' && header != 'flavors'">
          <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'"></span>
        </template>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.sauce">
          <td v-for="header in headers" :key="header">{{ item[header] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
// TODO: THIS COMPONENT SHOULD TAKE THE JSON AS AN INPUT!!!
// TODO: SUPPORT SHU RANGE!!
import rawData from "../assets/hot_sauce_reviews.json";
let rawHeaders = Object.keys(rawData[0]);

export default {
  props: {
    headers: Array,
  },
  data: function() {
    this.headers = rawHeaders;
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
    filteredData: function() {
      var sortKey = this.sortKey;
      var order = this.sortOrders[sortKey] || 1;
      var data = this.listData;
      // TODO: Why is this necessary?
      var sQuery = this.searchQuery;

      if (sQuery) {
        data = data.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
              .toLowerCase()
              .indexOf(sQuery) > -1
            );
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    }
  },
  filters: {
    // TODO: Capitalize after the spaces
    capitalize: function(str) {
      if (str.toUpperCase() === "SHU") {
        return "~SHU";
      }
      return str.charAt(0).toUpperCase() + str.slice(1).replaceAll("_", " ");
    }
  },
  methods: {
    sortBy: function(key) {
      if (key != "food_pairings" && key != "flavors") {
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1;
      }
    }
  }
};
</script>


<style scoped>
.center {
  margin-left: 10px;
  margin-right: 10px;
}

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table, th, td {
  border: 2px solid #777777;
  border-collapse: collapse;
}

th {
  background-color: #9f2a00;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

