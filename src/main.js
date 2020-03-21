// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

if(process.env.NODE_ENV=="mock")
require("../src/mock");

Vue.config.productionTip = false

console.log(router);

/* eslint-disable no-new */
let VueInstance=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

console.log(VueInstance);
