import Vue from 'vue'
import App from './App.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* ---------- ROUTER ---------- */
//https://router.vuejs.org/
//instalación: npm i vue-router
import { router } from './router'
import './axios'

/* ---------- FORMULARIO AVANZADO ---------- */
//https://www.npmjs.com/package/vue-form
//instalación: npm i vue-form
import './form'

Vue.config.productionTip = false

new Vue({
  router, // es igual a -> router: router
  render: h => h(App),
}).$mount('#app')
