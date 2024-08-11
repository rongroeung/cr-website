import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mission from '../views/Mission.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mission',
      name: 'mission',
      component: Mission
    }
  ]
})

export default router


// switch (ele) {
      //   case 'about':
      //     this.showAbout = true
      //     this.showMinistries = false
      //     this.showMission = false
      //     this.showGetInvolve = false
      //     this.showNews = false
      //     break
      //   case 'ministries':
      //     this.showAbout = false
      //     this.showMinistries = true
      //     this.showMission = false
      //     this.showGetInvolve = false
      //     this.showNews = false
      //     break
      //   case 'mission':
      //     this.showAbout = false
      //     this.showMinistries = false
      //     this.showMission = true
      //     this.showGetInvolve = false
      //     this.showNews = false
      //     break
      //   case 'get-involve':
      //     this.showAbout = false
      //     this.showMinistries = false
      //     this.showMission = false
      //     this.showGetInvolve = true
      //     this.showNews = false
      //     break
      //   case 'news':
      //     this.showAbout = false
      //     this.showMinistries = false
      //     this.showMission = false
      //     this.showGetInvolve = false
      //     this.showNews = true
      //     break
      // }