import { createApp } from 'vue'
import App from './App.vue'

import pluginRegister from '@/plugins'
import 'virtual:windi.css'

createApp(App).use(pluginRegister).mount('#app')
