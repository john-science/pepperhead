import Vue from 'vue';
import App from '@/pages/App.vue';

console.log('main index only');

new Vue({
  render: h => h(App),
}).$mount('#app')
