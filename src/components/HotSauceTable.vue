<template>
  <div>
    <h3>Hello, Pepper Heads!</h3>

    <!--
    // TODO: Get search working
    <form id="search">
      Search <input name="query" v-model="searchQuery" />
    </form>
    <br />
    -->

    <table class="center" :filter-key="searchQuery">
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
let rawData = [                                                                                                                                                                                                  
{
sauce: "Sriracha",
brewery: "Hoy Fung Foods, Inc",
rating: 80,
SHU: 2200,
times_purchased: 36,
food_pairings: "Thai, Eggs",
flavor: "Sweet-forward, but still tangy. Nice and thick, it won't run off your eggs. A classic sauce.",
},
{
sauce: "Tobasco",
brewery: "McIlhenny Co",
rating: 20,
SHU: 3750,
times_purchased: 0,
food_pairings: "Eggs",
flavor: "Vinegar is the over-riding flavor, sadly. But distantly, a lot of wonderful depth of flavor from being aged in whiskey barrels for years."
},
{
sauce: "Peri Peri - XX Hot",
brewery: "Nando's Ltd",
rating: 90,
SHU: 35000,
times_purchased: 2,
food_pairings: "Eggs, grilled vegetables",
flavor: "Deep earthy flavor. The flavor of the birds-eye chiles is up front, but paired will with  onion, garlic and spices.",
},

{
sauce: "Iguana Gold",
brewery: "Half Moon Bay Trading Co",
rating: 95,
SHU: 6000,
times_purchased: 1,
food_pairings: "Pretzels, Sausages",
flavor: "A great mustardy flavor, with a kick. There is also a lot of onion and carrot there, to round out the flavor."
},

{
sauce: "Tears of the Sun Private Reserve",
brewery: "High River Sauces",
rating: 90,
SHU: 6500,
times_purchased: 1,
food_pairings: "Thai, eggs, sandwiches",
flavor: "All fruit and funk, in the best way. Mango and heat.",
},

{
sauce: "Howler Monkey Sauce - Hot",
brewery: "Howler Monkey Sauce",
rating: 55,
SHU: 7000,
times_purchased: 1,
food_pairings: "French fries, eggs",
flavor: "Mostly just vinegar and heat, but with a nice salt-and-pepper after taste."
},

{
sauce: "Ghost Pepper",
brewery: "Melinda's",
rating: 55,
SHU: 45000,
times_purchased: 1,
food_pairings: "eggs, sandwiches",
flavor: "Some funky tang, but mostly just vinegar."
},

{
sauce: "Cholula - Original",
brewery: "Spicy Liquid, LLC",
rating: 75,
SHU: 3600,
times_purchased: 12,
food_pairings: "Pizza, Eggs",
flavor: "A bit less funky than Sriracha. Vinegar forward with a wonderful smokiness."
},

{
sauce: "Red Habenero",
brewery: "El Yucateco Co",
rating: 75,
SHU: 5790,
times_purchased: 1,
food_pairings: "fries, burgers",
flavor: "Tomato-forward, but without the sugar of ketchup. Rich and surprisingly complex. Maybe more hot than balanced.",
},
{
sauce: "Green Habenero",
brewery: "El Yucateco Co",
rating: 78,
SHU: 9000,
times_purchased: 1,
food_pairings: "eggs, tacos",
flavor: "The ingredients just say peppers, but there is something uniquely El Yucateco that I just love about this flavor.",
},
{
sauce: "Caribbean Habenero",
brewery: "El Yucateco Co",
rating: 90,
SHU: 5400,
times_purchased: 1,
food_pairings: "rice and beans, corn on the cob, sandwiches",
flavor: "So much flavor: carrots and onions all rounded out to a really distinctive, rich flavor.",
},
{
sauce: "Kutbil-Ik XXXtra Hot Habenero",
brewery: "El Yucateco Co",
rating: 80,
SHU: 11600,
times_purchased: 1,
food_pairings: "burgers",
flavor: "Tomatoes, onions and spices lead to a really well-round flavor for something with so much KICK.",
}
];

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

