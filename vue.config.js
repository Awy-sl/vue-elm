/*
 * vue.confiig.js
 */

module.exports = {
  configureWebpack: {
    resolve: {
      // 配置别名
      alias: {
        assets: "@/assets",
        components: "@/components",
        api: "@/api",
      },
    },
  },
};
