import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Vote from '@/components/Vote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/vote/:id',
      name: 'Vote',
      component: Vote
    }
  ]
})
