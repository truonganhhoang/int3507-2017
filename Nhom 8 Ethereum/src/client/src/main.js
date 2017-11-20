// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueNoty from 'vuejs-noty';

Vue.config.productionTip = false
require('./assets/sass/main.scss')
import 'vuejs-noty/dist/vuejs-noty.css';
Vue.use(VueNoty, {
  timeout: 1000
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
