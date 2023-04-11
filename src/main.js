import Vue from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGlow from 'vue-glow';

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueGlow,
  render: h => h(App)
}).$mount('#app')
