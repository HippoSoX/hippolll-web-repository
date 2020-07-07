// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
// import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = true
Vue.prototype.$axios = axios;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

