import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as VueGoogleMaps from 'vue2-google-maps'
import './styles/style.scss'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCWXYNpedTJavKD4o9BGYTSMbNYfFbOmRE',
    libraries: 'places',
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



 
