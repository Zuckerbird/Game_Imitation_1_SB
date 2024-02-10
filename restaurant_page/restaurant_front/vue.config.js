const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // proxyの設定
  devServer: {
    proxy: {
      "^/api*": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
});
