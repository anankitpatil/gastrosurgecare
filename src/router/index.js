import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UpperGI from '@/components/UpperGI'
import Hpb from '@/components/Hpb'
import LowerGI from '@/components/LowerGI'
import Routine from '@/components/Routine'
import Specialised from '@/components/Specialised'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Appointment from '@/components/Appointment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upper-gi',
      name: 'UpperGI',
      component: UpperGI
    },
    {
      path: '/hpb',
      name: 'Hpb',
      component: Hpb
    },
    {
      path: '/lower-gi',
      name: 'LowerGI',
      component: LowerGI
    },
    {
      path: '/routine',
      name: 'Routine',
      component: Routine
    },
    {
      path: '/specialised',
      name: 'Specialised',
      component: Specialised
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: Appointment
    }
  ]
})
