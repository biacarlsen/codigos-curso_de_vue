// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Vue.config.productionTip = false

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Página de Contato</p>'}
const SemPagina = {template: '<p>Essa página não existe!</p>'}

const routes = [
  {path: '/', component: Home},
  {path: '/contato', component: Contato}
]

const router = new VueRouter({
  routes //short for 'routes:routes
})

/* eslint-disable no-new */

const app = new Vue({
  router
}).$mount('#app')