import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginSolid } from '@rsbuild/plugin-solid'

export default defineConfig({
  plugins: [
    pluginBabel({
    }),
    pluginSolid(),
  ],
  server: {
    port: Number(process.env.DEV_PORT) || 3000,
  },
})
