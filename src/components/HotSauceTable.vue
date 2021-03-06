<template>
  <div>
    <form id="search">
      Search <input name="query" class="inputClass" v-model="searchQuery" />
    </form>
    <br />

    <table class="center">
      <thead>
        <th v-for="header in headers.slice(0, -1)" :key="header" @click="sortBy(header)" :class="{ active: sortKey == header }">
          {{ header | capitalize }}
        <template v-if="!noSorts.includes(header)">
          <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'"></span>
        </template>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.sauce + item.brewery">
          <template v-if="item['link']">
            <td><a :href="item['link']" target="_blank">{{ item["sauce"] }}</a></td>
          </template>
          <template v-else>
            <td>{{ item["sauce"] }}</td>
          </template>
          <td v-for="header in headers.slice(1, -1)" :key="header">{{ item[header] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  // All data should be loaded from an external JSON file
  import rawData from "../assets/hot_sauce_reviews.json";
  let rawHeaders = Object.keys(rawData[0]);
  const noSortStr = "nosort_";

  export default {
    props: {
      headers: Array,
    },
    data: function() {
      this.headers = rawHeaders;
      this.sortKey = "";
      this.noSorts = rawHeaders.filter(word => word.startsWith(noSortStr));
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
      capitalize: function(str) {
        if (str.toUpperCase() === "SHU") {
          return "~SHU";
        }
        return str.replace(noSortStr, "").replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
      }
    },
    methods: {
      sortBy: function(key) {
        if (!this.noSorts.includes(key)) {
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

table, th, td {
  border: 1px solid rgb(1,4,9);
  border-collapse: collapse;
  color:rgb(201, 209, 217);
}

tr {
  background-color: #191919;
}

tr:hover {
  background-color: #2b2b2b;
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
  padding: 10px 10px;
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

