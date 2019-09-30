// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import $ from 'jquery'
import 'swiper/css/swiper.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';

import "vue-image-lightbox/dist/vue-image-lightbox.min.js"
import "vue-image-lightbox/dist/vue-image-lightbox.min.css"
import VueLazyload from "vue-lazyload";  //懒加载

import App from './App'


Vue.config.productionTip = false;
Vue.use(VueLazyload);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
