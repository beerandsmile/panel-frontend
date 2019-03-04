import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

window.axios =  axios.create({
  baseURL: 'http://panel.buhojmedved.ru/api/v1',
  /* other custom settings */
});
axios.defaults.headers.common["token"] = localStorage.getItem('token')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
