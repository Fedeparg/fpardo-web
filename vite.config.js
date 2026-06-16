import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    test: {
      environment: 'node',
    },
    server: {
      proxy: {
        '/api/notion': {
          target: 'https://api.notion.com/v1',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api\/notion/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.NOTION_TOKEN}`)
              proxyReq.setHeader('Notion-Version', '2022-06-28')
            })
          },
        },
      },
    },
  }
})
