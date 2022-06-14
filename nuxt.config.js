console.log("process.env.BASE_URL", process.env.NUXT_ENV_BASE_URL);
// console.log("process", process);

export default {
  hooks: {
    // build: {
    //   done(builder) {
    //     const extraFilePath = path.join(
    //       builder.nuxt.options.buildDir,
    //       'extra-file'
    //     )
    //     fs.writeFileSync(extraFilePath, 'Something extra')
    //   }
    // }
    "render:route": (url, result) => {
      // console.log("result", result);
      const newHTML = result.html.replace(/data-n-head=\"ssr\"/gi, "");
      // console.log("newHTML", newHTML.slice(0, 400));
      result.html = newHTML;
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      "yyd的测试数据库,闫玉东的测试文件数据库网站，前端开发者，SEO测试，数据库测试，江苏省苏州市",
    htmlAttrs: {
      lang: "zh",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "baidu-site-verification",
        content: "code-nPa5THSOxg",
      },
      {
        name: "google-site-verification",
        content: "aE6h3xQmUOuXfamQjtLJyOZIS4TtK1WAXdVQOG0nBWk",
      },
      {
        name: "sogou_site_verification",
        content: "aHQSEvMLWf",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "这是一个测试数据库网站, 里面包含了若干文件，包含网站相关内容，托管的图片文件等等数据。主要语言是html css javascript。yyd是一个来自苏州的web前端开发者。本段为对于网站SEO的测试内容文本。",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "element-ui/lib/theme-chalk/index.css",
    "@assets/css/github-markdown.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui", "@/plugins/route", "@/plugins/highlight"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    "@nuxt/postcss8",
    // ...
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
  },

  server: {
    port: 3001, // default: 3000
    host: "0.0.0.0", // default: localhost
  },

  env: {},

  serverMiddleware: [],

  axios: {
    baseURL: "https://api-dev.lib-mat.ac.cn",
    proxy: false,
  },

  proxy: {
    // "/api": {
    // target: process.env.NUXT_ENV_BASE_URL || "https://api-dev.lib-mat.ac.cn",
    // target: "https://api-dev.lib-mat.ac.cn"
    // pathRewrite: {
    //   "^/api": "/",
    // },
    // },
  },
};
