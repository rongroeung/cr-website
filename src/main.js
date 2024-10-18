import { createApp } from 'vue'
import App from './App.vue'

// Register plugin
import router from './router'
import 'flowbite'
import i18n from '../src/lang/index'
import './assets/css/main.css'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

// Register data //

// Register mixin //
import { fetchDataMixin } from '@/util/mixin'

// Register global component //
import ImagePreview from './components/ImagePreview.vue'

const app = createApp(App)

// Bind global variable //
app.config.globalProperties.$backendUrl =
  'https://crossroadscambodia.church:7002/cr-web-backend/api/v1/'

app.config.globalProperties.$numberOfSundaySermonPerPage = 8
app.config.globalProperties.$numberOfNewsAndEventsItemPerPage = 4
app.config.globalProperties.$websitePreviewUrl = window.location.origin
app.config.globalProperties.$content_ids_mapper = {
  '01': '/',
  '02': '/about/',
  '03': '/about/church-board/',
  '04': '/about/pastoral-team/',
  '05': '/about/milestone/',
  '06': '/ministries/',
  '07': '/ministries/campus-ministry/',
  '08': '/ministries/worship-ministry/',
  '09': '/ministries/sport-ministry/',
  10: '/mission/',
  11: '/mission/church-outreach/',
  12: '/mission/micro-enterprise-project/',
  13: '/mission/certificate-in-ministry-leadership/',
  14: '/mission/sponsor-a-child/',
  15: '/get-involved/',
  16: '/get-involved/short-term-missions/',
  17: '/get-involved/professional-equipper/',
  18: '/get-involved/volunteer/',
  19: '/get-involved/give/',
  20: '/news/',
  21: '/news/sunday-sermons/',
  22: '/news/events/',
  23: '/news/church-news/',
  24: '/contact/'
}


// Bind global component //
app.component('ImagePreview', ImagePreview)

app.use(ToastPlugin)
app.use(router)
app.use(i18n)
app.mixin(fetchDataMixin)
app.mount('#app')
