import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = {template: '<div>Home</div>'}
const NotFound = {template: '<div>NotFound goto home</div>'}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
