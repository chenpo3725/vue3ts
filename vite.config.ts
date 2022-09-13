import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, {resolve} from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from "unplugin-auto-import/vite";
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    Components({
      dts: true, // 为了获得对自动导入组件的ts支持
      dirs: ['src/components'], // 用于搜索组件目录的相对路径dirs指定搜索组件目录的相对路径，指定目录下的组件会在使用时，自动引入；
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ], // 全局注册的组件，插件无需导入，对ts不友好，所以需要手动注册它们的类型types处理全局注册的组件对ts不友好的问题，用来手动注册它们的类型；
      resolvers: [VantResolver()],//resolvers用来导入组件库解析器，组件库解析器是对流行的vue组件库提供自动导入功能；
  }),
    AutoImport({
      dts: true,
      imports: ["vue", "vue-router"],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      // dts: 'src/auto-import.d.ts'
      eslintrc: { // 生成eslint的配置文件，需要在eslint配置中导入
        enabled: true, // Default `false`
        globalsPropValue: "readonly", // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    eslintPlugin({
      exclude: ['./node_modules/**'],
      cache: false
    })
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
      }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname,'src/styles/index.less')}";`,
      },
    },
  },
  server: {
    port: 8888
  },
})
