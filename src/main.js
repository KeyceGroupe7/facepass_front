import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'babel-polyfill';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { BListGroup } from 'bootstrap-vue'
import { ListGroupPlugin } from 'bootstrap-vue'
Vue.use(ListGroupPlugin)

Vue.config.productionTip = false

library.add(fas)
library.add(faVuejs)
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('b-list-group', BListGroup)

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'));

dom.watch()

new Vue({
  el: '#app',
  data() {
    return {

    }
  },
  render: h => h(App)
}).$mount('#app')
