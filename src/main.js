import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@vant/touch-emulator'
import router from './router/router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vant);
window.cwData = {};
window.cwData.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
