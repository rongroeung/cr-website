import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite'
import i18n from '../src/lang/index'

// Register data and function
import { fetchDataMixin } from '@/util/mixin'
import fallbackData from '@/util/fallbackData'
// Register global component
import ComingSoon from './components/ComingSoon.vue'


const app = createApp(App)

// bind global variable
app.config.globalProperties.$githubAssetsPath =
  'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets'
app.config.globalProperties.$backendUrl = 'http://38.47.39.132:7001/cr-web-backend/api/v1/'
app.config.globalProperties.$fallbackData = fallbackData


// bind global component
app.component('ComingSoon', ComingSoon);


app.use(router)
app.use(i18n)
app.mixin(fetchDataMixin)
app.mount('#app')
