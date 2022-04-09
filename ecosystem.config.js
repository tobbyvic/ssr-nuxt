module.exports = {
  apps: {
    name: "ssr1",
    script: "npm",
    args: "start",
    // 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
    watch: true, // watch: './',
    // 不用监听的文件
    ignore_watch: ["node_modules"],
    // 设置应用程序异常退出重启的次数，默认15次（从0开始计数）,最大异常重启次数，即小于min_uptime运行时间重启次数；
    // max_restarts: 10,
    // 生产环境配置
    // $ pm2 start app.js --env
    env_production: {
      // 环境参数，当前指定为生产环境 process.env.NODE_ENV
      NODE_ENV: "production"
      // 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR
      //   REMOTE_ADDR: "http://www.dzm.com/",
    },
    // 开发环境配置
    // $ pm2 start app.js --env_dev
    env_dev: {
      // 环境参数，当前指定为开发环境 process.env.NODE_ENV
      NODE_ENV: "development"
      // 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR
      //   REMOTE_ADDR: "http://www.dzm-dev.com/",
    },
    // 测试环境配置
    // $ pm2 start app.js --env_test
    env_test: {
      // 环境参数，当前指定为测试环境 process.env.NODE_ENV
      NODE_ENV: "test"
      // 当前环境接口地址，如果不用可不配置 process.env.REMOTE_ADDR
      //   REMOTE_ADDR: "http://www.dzm-test.com/",
    }
  }
};
