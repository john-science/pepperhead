<template>
  <div id="wanted">
    <NavBar />

    <h2>Hot Sauce Styles</h2>
    <div class="center-it">
      <ul class="big-list">
        <li v-for="item in data" :key="item">
          {{ item.style }} - {{ item.desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";
  import styleData from "../assets/styles_of_sauces.json";
  import sauceData from "../assets/hot_sauce_reviews.json";

  export default {
    name: 'Styles',
    components: {
      NavBar
    },
    data: function() {
      this.data = styleData;
      this.sauces = sauceData;  // TODO: We probably don't need this, just pre-process out the sauces of interest.
    },
  };
</script>

<style scoped>
.center-it {
  text-align:center;
}
.big-list {
  display:inline-block;
  text-align: left;
}
</style>

