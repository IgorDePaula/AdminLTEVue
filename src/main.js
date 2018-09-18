import Vue from 'vue'
import App from './App.vue'

import './assets/css/bootstrap/bootstrap.less'
import './assets/css/font-awesome/less/font-awesome.less'

import 'admin-lte/dist/css/AdminLTE.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
