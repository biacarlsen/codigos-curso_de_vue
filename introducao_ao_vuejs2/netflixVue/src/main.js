// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Vue.config.productionTip = false

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Página de Contato</p>'}
const SemPagina = {template: '<p>Essa página não existe!</p>'}

const rotas = {
  '/': Home,
  '/contato': Contato
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    rotaAtual: window.location.pathname
  },
  computed:{
    exibeComponente () {
      return rotas[this.rotaAtual] || SemPagina
    }
  },
  render(h) { return h(this.exibeComponente)}
})
