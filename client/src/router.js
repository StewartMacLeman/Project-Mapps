import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CountrySelect from '@/views/CountrySelect'
import Quiz from '@/views/Quiz'
import Difficulty from '@/views/ChooseDifficulty'
import NameSelect from '@/views/NameSelect'
import MiData from '@/views/MiData'

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
    },
    {
      name: 'difficulty',
      path: '/difficulty',
      component: Difficulty
    },
    {
      name: 'name',
      path: '/name',
      component: NameSelect
    },
    {
      name: 'mi',
      path: '/mi',
      component: MiData
    }
  ]
})

export default router;
