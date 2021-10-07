import Vue from "vue";
import page from "@/pages/Wanted.vue";

console.log('before rendering wanted');

new Vue({
  render: h => h(page),
}).$mount('#wanted');
