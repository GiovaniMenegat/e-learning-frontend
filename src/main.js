import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from '@prismicio/vue'

import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faChevronLeft, faCheck, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'

library.add(faUser, faChevronLeft, faCheck, faBars);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);

// Prismic configuration
const endpoint = process.env.VUE_APP_PRISMIC_ENDPOINT;

const routes = [
  {
    type: 'class',
    path: '/:uid',
  }
]

Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { routes },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
