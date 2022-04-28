import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'test-red': '#f00',
        'test-green': '#0f0',
      },
    },
  },
  shortcuts: {
    'my-bg-cover': 'bg-no-repeat bg-center bg-cover',
    'my-bg-contain': 'bg-no-repeat bg-center bg-contain',
  },
})
