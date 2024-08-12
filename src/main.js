import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
import i18n from '../src/lang/index';

const app = createApp(App)

app.use(router)
app.use(i18n);
app.mount('#app')
