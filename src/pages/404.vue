<template>
  <div id="notfound">
    <NavBar />

    <h2>404 Not Found</h2>
    <img :src="require('../assets/404.gif')" alt="404 Not Found">
    <p>We looked everywhere, and just could not find what you were looking for.</p>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";

  export default {
    name: '404',
    components: {
      NavBar
    },
    data: function() {
    },
  };
</script>

<style scoped>
.torch {
  margin: -150px 0 0 -150px;
  width: 200px;
  height: 200px;
  box-shadow: 0 0 0 9999em #000000f7;
  opacity: 1;
  border-radius: 50%;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
}
</style>
