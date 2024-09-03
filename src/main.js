import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
import i18n from '../src/lang/index';
import { fetchDataMixin } from '@/util/mixin'

const app = createApp(App)

// bind global variable
app.config.globalProperties.$assetsPath = 'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets'
app.config.globalProperties.$backendUrl = 'http://38.47.39.132:7001/cr-web-backend/api/v1/'

app.use(router)
app.mixin(fetchDataMixin)
app.use(i18n);
app.mount('#app')
