import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import './config/axios'

// vuex
require('@/store/subscriber')

// learn
// import Userfront from "@userfront/vue";
// Userfront.init("demo1234");

// maps
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation'
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU',
    // key: 'AIzaSyBkBuf2Vt0c9ZqpzLRwYwMXXhwQbWTg76Y',
    // libraries: 'places',
    // callback: 'initAutocomplete'
  },
});

// css
import '../public/frontend/vendor/fontawesome-free/css/all.min.css'
import '../public/frontend/css/sb-admin-2.min.css'
import '@/assets/css/style.css'

// datatables
import 'datatables.net-bs4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'jszip'
import 'pdfmake'
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4'
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
import 'datatables.net-buttons/js/buttons.colVis'
import 'datatables.net-buttons/js/buttons.flash'
import 'datatables.net-buttons/js/buttons.html5'
import 'datatables.net-buttons/js/buttons.print'

// search select
import 'vue-search-select/dist/VueSearchSelect.css'

Vue.config.productionTip = false

store
  .dispatch('auth/attempt', localStorage.getItem('token'))
  .then(() => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })

