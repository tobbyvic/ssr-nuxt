console.log("process.env.BASE_URL", process.env.NUXT_ENV_BASE_URL);
// console.log("process", process);

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "yyd文件数据库",
    htmlAttrs: {
      lang: "zh"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "baidu-site-verification",
        content: "code-nPa5THSOxg"
      },
      {
        name: "google-site-verification",
        content: "aE6h3xQmUOuXfamQjtLJyOZIS4TtK1WAXdVQOG0nBWk"
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "这是一个yyd文件数据库, 里面包含了若干文件，包含前端相关，后端相关，cif文件绘制，等等数据。主要语言是javascript。来自姑苏的文件数据库，姑苏数据库，位于苏州。yyd的文件数据库"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    "@nuxt/postcss8"
    // ...
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // "@nuxtjs/axios",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  server: {
    port: 3001, // default: 3000
    host: "0.0.0.0" // default: localhost
  },

  env: {},

  serverMiddleware: [],

  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  axios: {
    base: "/",
    proxy: true
  },

  proxy: {
    "/api": {
      target: process.env.NUXT_ENV_BASE_URL || "http://101.43.113.93:8000"
      // pathRewrite: {
      //   "^/api": "/",
      // },
    }
  }
};
