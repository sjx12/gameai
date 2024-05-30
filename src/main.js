import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import initApp from './init'

let app = createApp(App)
initApp(app)
app.use(store).use(router).mount('#app')
