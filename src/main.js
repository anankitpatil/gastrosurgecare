// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import VueForm from 'vue-form'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue .use(VueCarousel)
Vue.use(VueForm)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBpMJBuAetWEYv6ikr-EwGAZ5MU4CWSR-U',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.config.productionTip = false

/* global CSS */
require('./assets/styles.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
