import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
import i18n from '../src/lang/index';
import Field from './util/constant';

const app = createApp(App)

// bind global variable
app.config.globalProperties.$Field = Field;
app.config.globalProperties.$assetsPath = 'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets'

app.use(router)
app.use(i18n);
app.mount('#app')
