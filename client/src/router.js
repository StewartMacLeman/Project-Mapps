import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CountrySelect from '@/views/CountrySelect'
import Quiz from '@/views/Quiz'

Vue.use(Router)

const router = new Router ({
  routes: [
    {
      name: 'home',
      path: '',
      component: Home
    },
    {
      name: 'country-select',
      path: '/country-select',
      component: CountrySelect
    },
    {
      name: 'quiz',
      path: '/quiz',
      component: Quiz
    }
  ]
})

export default router;
