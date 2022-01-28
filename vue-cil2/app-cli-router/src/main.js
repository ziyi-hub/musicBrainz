import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Homepage from './components/home.vue'
import Tasks from './components/tasks.vue'
import User from './components/user.vue'
import NotFound from './components/notfound.vue'
import Carte from './components/carte.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode : "history",
  routes : [
    {path: "/", component: Homepage},
    {path: "/tasks", component: Tasks},
    {path: "/carte", component: Carte},
    {path: "/user/:user_id", component: User}, //on passe un parametre sur cette route
    {path: "*", component: NotFound} //A mettre a la fin de tous les routeurs
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

