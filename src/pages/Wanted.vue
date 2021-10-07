<template>
  <div id="wanted">
    <NavBar />

    <h2>Hot Sauces I Want to Try</h2>
    <ul class="big-list">
      <li><a href="https://highriversauces.com/" target="_blank">High River</a> - <a href="https://www.amazon.com/dp/B01KB7XZ62" target="_blank">Cheeba Gold Barbados Style Scotch Bonnet Pepper Sauce</a></li>
      <li><a href="https://highriversauces.com/" target="_blank">High River</a> - <a href="https://www.amazon.com/dp/B00BADXRRO" target="_blank">Rogue Moruga Blood Orange Scorpion Pepper Sauce</a></li>
      <li><a href="https://www.amazon.com/dp/B004MXR9AU/" target="_blank">Pain is Good - Habanero Sauce</a></li>
      <li><a href="https://www.amazon.com/dp/B06XF8SRHY/" target="_blank">Queen Majesty - Red Habanero Black Coffee</a></li>
      <li><a href="https://www.yellowbirdfoods.com/" target="_blank">Yellowbird</a> - <a href="https://www.amazon.com/dp/B06XX4R3GX/" target="_blank">Ghost Pepper Hot Sauce</a></li>
    </ul>

    <h4>Sauces Local to Me</h4>
    <ul class="big-list">
      <li><a href="https://bonachesauce.com/" target="_blank">Bonache</a> - Piri Piri sauce</li>
      <li>Hot Girl Hot Sauce - Jamacian style</li>
      <li><a href="http://www.mikesfinebrines.com/" target="_blank">Mike's Fine Brines</a> - Callahan's Chipolte</li>
      <li><a href="https://secretaardvark.com/" target="_blank">Secret Aardvark</a></li>
      <li><a href="https://www.silagysauce.com/shop" target="_blank">Silagy Sauces</a> - <a href="https://www.silagysauce.com/shop/roasted-ghost" target="_blank">Roasted Ghost Sauce</a></li>
      <li><a href="https://www.silagysauce.com/shop" target="_blank">Silagy Sauces</a> - <a href="https://www.silagysauce.com/shop/smokin-habanero-sauce" target="_blank">Smokin' Habanero Sauce</a></li>
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
.big-list {
  text-align: left;
  margin-left: 20%;
}
</style>

