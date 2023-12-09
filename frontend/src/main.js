import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
import router from './router/index.js'
import store from './store.js'

const app = createApp(App)

app.use(store)
app.use(router)

createApp(App).mount('#app')
