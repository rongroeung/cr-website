import { createRouter, createWebHistory } from 'vue-router'
import { getItemWithExpiry } from '@/util/mixin.js'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import CampusMinistryPage from '../views/CampusMinistryPage.vue'
import CertificateInMinistryPage from '../views/CertificateInMinistryPage.vue'
import ChurchBoardPage from '../views/ChurchBoardPage.vue'
import ChurchOutreachPage from '../views/ChurchOutreachPage.vue'
import ContactPage from '../views/ContactPage.vue'
import GetInvolvedPage from '../views/GetInvolvedPage.vue'
import MicroEnterpriseProjectsPage from '../views/MicroEnterpriseProjectsPage.vue'
import MilestonePage from '../views/MilestonePage.vue'
import MinistriesPage from '../views/MinistriesPage.vue'
import MissionPage from '../views/MissionPage.vue'
import PastoralTeamPage from '../views/PastoralTeamPage.vue'
import SponsorAChildPage from '../views/SponsorAChildPage.vue'
import WorshipMinistryPage from '../views/WorshipMinistryPage.vue'
import SportMinistryPage from '../views/SportMinistryPage.vue'
import ShortTermMissionsPage from '../views/ShortTermMissionsPage.vue'
import ProfessionalEquipperPage from '../views/ProfessionalEquipperPage.vue'
import VolunteerPage from '../views/VolunteerPage.vue'
import GivePage from '../views/GivePage.vue'
import NewsPage from '../views/NewsPage.vue'
import SundaySermonsPage from '../views/SundaySermonsPage.vue'
import EventsPage from '../views/EventsPage.vue'
import ChurchNewsPage from '../views/ChurchNewsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import UpdateContentById from '../views/admin/UpdateContentById.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import UserLayout from '@/layouts/UserLayout.vue'
import AddNewContent from '@/views/admin/AddNewContent.vue'
import AddNewDescription from '@/views/admin/AddNewDescription.vue'
import AddNewMedia from '@/views/admin/AddNewMedia.vue'
import AddNewYoutube from '@/views/admin/AddNewYoutube.vue'
import LoginPage from '@/views/admin/LoginPage.vue'

const navbarHeight = 80 //ref --navbar-height: 80px

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      // scroll to specific id by specify buttonRouteId <CrButton buttonRouter="home" buttonRouteId="discipleship_journey" />
      return {
        el: to.hash,
        behavior: 'smooth',
        left: 0,
        top: navbarHeight
      }
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/admin',
      component: AdminLayout,
      redirect: { name: 'update-content-by-id' },
      children: [
        {
          path: 'update-content-by-id',
          name: 'update-content-by-id',
          component: UpdateContentById
        },
        {
          path: 'add-new-content',
          name: 'add-new-content',
          component: AddNewContent
        },
        {
          path: 'add-new-description',
          name: 'add-new-description',
          component: AddNewDescription
        },
        {
          path: 'add-new-media',
          name: 'add-new-media',
          component: AddNewMedia
        },
        {
          path: 'add-new-youtube',
          name: 'add-new-youtube',
          component: AddNewYoutube
        }
      ]
    },
    {
      path: '/',
      component: UserLayout,
      children: [
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: NotFoundPage
        },
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: '/about',
          children: [
            {
              path: '',
              name: 'about',
              component: AboutPage
            },
            {
              path: 'church-board',
              name: 'church-board',
              component: ChurchBoardPage
            },
            {
              path: 'pastoral-team',
              name: 'pastoral-team',
              component: PastoralTeamPage
            },
            {
              path: 'milestone',
              name: 'milestone',
              component: MilestonePage
            }
          ]
        },
        {
          path: '/ministries',
          children: [
            {
              path: '',
              name: 'ministries',
              component: MinistriesPage
            },
            {
              path: 'campus-ministry',
              name: 'campus-ministry',
              component: CampusMinistryPage
            },
            {
              path: 'worship-ministry',
              name: 'worship-ministry',
              component: WorshipMinistryPage
            },
            {
              path: 'sport-ministry',
              name: 'sport-ministry',
              component: SportMinistryPage
            }
          ]
        },
        {
          path: '/mission',
          children: [
            {
              path: '',
              name: 'mission',
              component: MissionPage
            },
            {
              path: 'church-outreach',
              name: 'church-outreach',
              component: ChurchOutreachPage
            },
            {
              path: 'micro-enterprise-project',
              name: 'micro-enterprise-project',
              component: MicroEnterpriseProjectsPage
            },
            {
              path: 'certificate-in-ministry-leadership',
              name: 'certificate-in-ministry-leadership',
              component: CertificateInMinistryPage
            },
            {
              path: 'sponsor-a-child',
              name: 'sponsor-a-child',
              component: SponsorAChildPage
            }
          ]
        },
        {
          path: '/get-involved',
          children: [
            {
              path: '',
              name: 'get-involved',
              component: GetInvolvedPage
            },
            {
              path: 'short-term-missions',
              name: 'short-term-missions',
              component: ShortTermMissionsPage
            },
            {
              path: 'professional-equipper',
              name: 'professional-equipper',
              component: ProfessionalEquipperPage
            },
            {
              path: 'volunteer',
              name: 'volunteer',
              component: VolunteerPage
            },
            {
              path: 'give',
              name: 'give',
              component: GivePage
            }
          ]
        },
        {
          path: '/news',
          children: [
            {
              path: '',
              name: 'news',
              component: NewsPage
            },
            {
              path: 'sunday-sermons',
              name: 'sunday-sermons',
              component: SundaySermonsPage
            },
            {
              path: 'events',
              name: 'events',
              component: EventsPage
            },
            {
              path: 'church-news',
              name: 'church-news',
              component: ChurchNewsPage
            }
          ]
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactPage
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem('adminToken');
  const token = getItemWithExpiry('adminToken');
  if (to.path.startsWith('/admin') && !token) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router
