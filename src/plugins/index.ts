import type { App } from 'vue'
import { iconsRegister } from './icons-register'

const pluginRegister = (app: App) => {
  app.use(iconsRegister)
  return app
}

export default pluginRegister
