import type { App } from 'vue'
import { createPinia } from 'pinia'

export function storeRegister(app: App) {
  const pinia = createPinia()
  app.use(pinia)
  return app
}
