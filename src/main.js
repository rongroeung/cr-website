import { createApp } from 'vue'
import App from './App.vue'

// Register plugin
import router from './router'
import 'flowbite'
import i18n from '../src/lang/index'
import './assets/css/main.css'

// Register data //
import fallbackData from '@/util/fallbackData'

// Register mixin //
import { fetchDataMixin } from '@/util/mixin'

// Register global component //
import ComingSoon from './components/ComingSoon.vue'

const app = createApp(App)

// Bind global variable //
app.config.globalProperties.$githubAssetsPath =
  'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets'
app.config.globalProperties.$backendUrl =
  'https://crossroadscambodia.church:7002/cr-web-backend/api/v1/'
app.config.globalProperties.$fallbackData = fallbackData

// Bind global component //
app.component('ComingSoon', ComingSoon)

app.use(router)
app.use(i18n)
app.mixin(fetchDataMixin)
app.mount('#app')
