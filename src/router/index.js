import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Layout.vue'
import Home from '../views/Home/Home.vue'
import DoctorList from '../components/Home/DoctorList.vue'
import MyDoctor from '../views/MyDoctor/MyDoctor.vue'
import Me from '../views/Me/Me.vue'
import Community from '../views/Community/Community.vue'
import DiseaseKnowledge from '../views/DiseaseKnowledge/DiseaseKnowledge.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect : '/home/depart/zonghe/1',
    children : [
      {
        path : 'home',
        name : 'home',
        component : Home,
        children : [
          {
            path:'depart/:de/:random',
            name : 'depart',
            component : DoctorList
          }
        ]
      },
      {
        path : 'mydoctor',
        name : 'mydoctor',
        component : MyDoctor,
      },
      {
        path : 'diseaseknowledge',
        name : 'diseaseknowledge',
        component : DiseaseKnowledge,
      },
      {
        path : 'community',
        name : 'community',
        component : Community,
      },
      {
        path : 'me',
        name : 'me',
        component : Me,
      },
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
