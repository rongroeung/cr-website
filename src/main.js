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

// Bind global component //
app.component('ComingSoon', ComingSoon)
app.component('ImagePreview', ImagePreview)

app.use(ToastPlugin)
app.use(router)
app.use(i18n)
app.mixin(fetchDataMixin)
app.mount('#app')
