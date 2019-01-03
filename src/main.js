import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
