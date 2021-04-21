import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('7d')

Vue.config.productionTip = false


import {setCookie, getCookie, delCookie} from './cookies.js';
export default {
  name: 'App',
  beforeMount () {
    Vue.prototype.$cookieStore = {
      setCookie,
      getCookie,
      delCookie
    }
  }
}

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import router from './router/'
import myStore from './store/'

new Vue({
  render: h => h(App),
  router,
  store:myStore
}).$mount('#app')
