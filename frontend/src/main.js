import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'

axios.defaults.headers.common.accept = 'application/json'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
