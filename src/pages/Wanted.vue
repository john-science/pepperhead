<template>
  <div id="wanted">
    <NavBar />

    <h2>Hot Sauces I Want to Try</h2>
    <ul style="text-align:left;">
      <li>Bonache - Piri Piri sauce - Washington state</li>
      <li>Mike's Fine Brines - Chipolte - Washington state</li>
      <li>Hot Girl Hot Saucei - Jamacian style - Washington state</li>
      <li>Aardvark Sauce - Oregon</li>
      <li><a href="https://www.seattlemag.com/restaurants/washington%E2%80%99s-hot-sauce-game-fire">Check out this list of locals</a></li>
      <li><a href="https://www.amazon.com/dp/B004MXR9AU/">Pain is Good - Habanero Sauce</a></li>
      <li><a href="https://www.amazon.com/dp/B06XX4R3GX/">Ghost Pepper Hot Sauce by Yellowbird</a></li>
      <li><a href="https://www.amazon.com/dp/B00BADXRRO">Rogue Moruga Blood Orange Scorpion Pepper Sauce</a></li>
      <li><a href="https://www.amazon.com/dp/B06XF8SRHY/">QUEEN MAJESTY HOT SAUCE Hot Sauce Red Habanero Black Coffee</a></li>
      <li><a href="https://www.amazon.com/dp/B01KB7XZ62">Cheeba Gold Barbados Style Scotch Bonnet Pepper Sauce</a></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";

  export default {
    name: 'Wanted',
    components: {
      NavBar
    }
  };
</script>

<style scoped>
</style>

