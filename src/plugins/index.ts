import type { App } from 'vue'
import { iconsRegister } from './icons-register'
import { storeRegister } from './store-register'

const pluginRegister = (app: App) => {
  app.use(iconsRegister)
  app.use(storeRegister)
  return app
}

export default pluginRegister
