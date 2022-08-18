import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from '@prismicio/vue'

import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faChevronLeft);
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
  render: h => h(App)
}).$mount('#app')
