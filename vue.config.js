const path = require("path");
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");


function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  parallel: false,
  publicPath: process.env.NODE_ENV === 'development' ? './' : '/vue3-ts-h5.github.io',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/index.scss";`
      },
      //配置路vw vm适配
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  },

  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  
  //配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@assets": resolve("src/assets")
      }
    }
  },

  chainWebpack: config => {
    config.module
    .rule("ts")
    .use("ts-loader")
    .tap(options => {
      options = merge(options, {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: "vant",
              libraryDirectory: "es",
              // style: name => `${name}/css/index`
              style: true
            })
          ]
        }),
        compilerOptions: {
          module: "es2015"
        }
      });
      return options;
    })
  }
}
