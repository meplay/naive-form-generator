import type { App } from 'vue'
import { NForm, NFormItemGi, NInput, NScrollbar, create } from 'naive-ui'

export function naiveRegister(app: App) {
  const naive = create({
    components: [NInput, NScrollbar, NForm, NFormItemGi],
  })
  app.use(naive)
  return app
}
