<template>
  <div id="notfound">
    <NavBar />

    <h2>404 Not Found</h2>
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
</style>
