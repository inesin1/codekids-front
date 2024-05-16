import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import './index.css'
import { VueQueryPlugin } from 'vue-query'

createApp(App).use(router).use(createPinia()).use(VueQueryPlugin).mount('#app')
