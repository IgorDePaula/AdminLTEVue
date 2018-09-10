import Vue from 'vue'
import App from './App.vue'

import './assets/css/bootstrap/bootstrap.less'
import './assets/css/skins/_all-skins.less'
import './assets/css/font-awesome/less/font-awesome.less'
import './assets/css/AdminLTE.less'
import './assets/css/buttons.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
