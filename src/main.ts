import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import pluginRegister from '@/plugins'
import 'virtual:windi.css'

createApp(App)
  .use(router)
  .use(pluginRegister)
  .mount('#app')
