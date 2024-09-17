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
import ComingSoon from './components/ComingSoon.vue'
import ImagePreview from './components/ImagePreview.vue'

const app = createApp(App)

// Bind global variable //
app.config.globalProperties.$githubAssetsPath =
  'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets'
app.config.globalProperties.$backendUrl =
  'https://crossroadscambodia.church:7002/cr-web-backend/api/v1/'

// app.config.globalProperties.$websitePreviewUrl = 'https://cr-website.onrender.com/'
app.config.globalProperties.$websitePreviewUrl = 'http://localhost:5173/'
// app.config.globalProperties.$websitePreviewUrl = 'https://crossroadscambodia.church/'
app.config.globalProperties.$content_ids_mapper = {
  '01': '',
  '02': 'about/',
  '03': 'church-board/',
  '04': 'pastoral-team/',
  '05': 'milestone/',
  '06': 'ministries/',
  '07': 'campus-ministry/',
  '08': 'worship-ministry/',
  '09': 'sport-ministry/',
  10: 'mission/',
  11: 'church-outreach/',
  12: 'micro-enterprise-project/',
  13: 'certificate-in-ministry-leadership/'
}


// Bind global component //
app.component('ComingSoon', ComingSoon)
app.component('ImagePreview', ImagePreview)

app.use(ToastPlugin)
app.use(router)
app.use(i18n)
app.mixin(fetchDataMixin)
app.mount('#app')
