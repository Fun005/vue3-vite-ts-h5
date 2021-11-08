import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import components from "unplugin-vue-components/vite"
import { VarletUIResolver } from "unplugin-vue-components/resolvers"
import styleImport from "vite-plugin-style-import"
import externalGlobals from "rollup-plugin-external-globals"
// import { viteMockServe } from 'vite-plugin-mock'

import { resolve } from "path"

const commonjs = require("@rollup/plugin-commonjs")
const analyze = require("rollup-plugin-analyzer")
const Pxtovw = require("postcss-px-to-viewport")

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // 基础路径
  build: {
    target: "modules", // 浏览器兼容模块
    outDir: "dist", // 输出路径
    assetsDir: "assets", // 静态资源路径
    rollupOptions: {
      external: ["element-plus", "axios"],
      plugins: [
        commonjs(),
        externalGlobals({
          axios: "axios",
          "element-plus": "ElementPlus"
        }),
        analyze()
      ],
      output: {
        globals: {
          axios: "axios",
          "element-plus": "ElementPlus"
        }
      }
    }
  },
  plugins: [
    vue(),
    styleImport({
      // 由于 vite 本身已按需导入了组件库，因此仅样式不是按需导入的，因此只需按需导入样式即可。
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`
        },
        {
          // 需要导入的库名
          libraryName: "element-plus",
          // 如果样式文件不是.css后缀。需要开启此选项 default:false
          esModule: true,
          // 可能有些组件库不是很标准化。打开此选项以忽略以确定文件是否存在。 导入不存在的CSS文件时防止错误。 开启后性能可能会略有下降，但影响不大 * default: false
          ensureStyleFile: true,
          // 自定义样式转换
          resolveStyle: (name) => `element-plus/lib/theme-chalk/${name}.css`,
          // 用于一些可能需要按需引入组件的情况,不单单只是引入样式(对Esm不能很好支持的库)。仅在生产环境工作
          resolveComponent: (name) => `element-plus/lib/${name}`
        }
      ]
    }),
    // viteMockServe({supportTs: false})
    components({
      resolvers: [VarletUIResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~resource": resolve(__dirname, "src/assets"),
      comps: resolve(__dirname, "src/components"),
      styles: resolve(__dirname, "src/styles"),
      plugins: resolve(__dirname, "src/plugins"),
      views: resolve(__dirname, "src/views"),
      utils: resolve(__dirname, "src/utils")
    }
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //      ws: false,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
    hmr: {
      overlay: true
    }
  },

  optimizeDeps: {
    include: ["element-plus/lib/locale/lang/zh-cn"] // 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
    // exclude: ["vant", "element-plus", "axios"], //在预构建中强制排除的依赖项。
  },
  css: {
    postcss: {
      // 给postcss-loader传递选项
      plugins: [
        new Pxtovw({
          unitToConvert: "px", // 需要转换的单位，默认为"px"；
          viewportWidth: 750, // 设计稿的视口宽度
          unitPrecision: 5, // 单位转换后保留的小数位数
          propList: ["*"], // 要进行转换的属性列表,*表示匹配所有,!表示不转换
          viewportUnit: "vw", // 转换后的视口单位
          fontViewportUnit: "vw", // 转换后字体使用的视口单位
          minPixelValue: 1, // 设置最小的转换数值
          mediaQuery: false, // 设置媒体查询里的单位是否需要转换单位
          replace: true, // 是否直接更换属性值，而不添加备用属性
          exclude: [/node_modules/] // 忽略某些文件夹下的文件
        })
      ]
    }
  }
})
