module.exports = {
  apps: {
    name: "nuxt-ssr-template",
    script: "npm",
    args: "start",
    // 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
    watch: true, // watch: './',
    // 不用监听的文件
    ignore_watch: ["node_modules"]
  }
};
