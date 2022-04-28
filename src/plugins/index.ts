import type { App } from 'vue'
import { iconsRegister } from './icons-register'
import { storeRegister } from './store-register'
import { naiveRegister } from './naive-register'

const pluginRegister = (app: App) => {
  app.use(iconsRegister)
  app.use(storeRegister)
  app.use(naiveRegister)
  return app
}

export default pluginRegister
