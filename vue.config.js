const fs = require('fs')
const path = require('path')
const IS_PROD = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, dir)

// pages配置
let pages = {}
let indexHtml = '/index.html' // 配置首页展示的页
function entryPagesFunc (filePath) {
  const filePathCut = filePath.substring(0, filePath.lastIndexOf('/')).split('./src/pages/')[1]
  const fileName = filePathCut.replace(/\//g, '_')
  const configJsonPath = `./src/pages/${filePathCut}/config.json`
  let skinConfig = {} // 向loader中传递的json数据
  if (fs.existsSync(resolve(configJsonPath))) {
    skinConfig = JSON.stringify({
      skinConfig: require(resolve(`${configJsonPath}`))
    })
  }

  pages[fileName] = {
    entry: `src/pages/${filePathCut}/entry.js`,
    template: `src/pages/${filePathCut}/entry.html`,
    filename: `${fileName}.html`,
    chunks: ['global', `${fileName}`],
    skinConfig
  }
}

if (process.env.skin) {
  // 遍历单个
  entryPagesFunc(`./src/pages/${process.env.skin}/entry.js`)
  indexHtml = `/${process.env.skin.replace(/\//g, '_')}.html` // 指定文件路径并显示
} else {
  // 遍历所有 - 得到的路径数组 - @TODO启动慢
  const glob = require('glob')
  const entryPages = glob.sync('./src/pages/activity/**/entry.js')
  entryPages.forEach((filePath) => {
    entryPagesFunc(filePath)
  })
}

// 首页和业务页面
if (!IS_PROD) {
  pages = Object.assign({}, {
    index: {
      entry: 'src/pages/main.js',
      template: 'src/pages/index.html',
      filename: 'index.html',
      title: '首页',
      chunks: ['index']
    }
  }, pages)
}

module.exports = {
  devServer: { // 对开发服务的设置
    port: 8384,
    open: true, // 自动调用默认浏览器打开
    index: indexHtml
  },

  pages,

  // 部署应用包时的基本 URL
  publicPath: IS_PROD ? '//yun.tuisnake.com/h5vue/' : '',

  // 对组件中css的配置
  css: {
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]'
        // camelCase: 'only'
      },
      postcss: {
        // rem配置
        plugins: [
          require('postcss-px2rem')({
            // remUnit: 100   // 基准大小 baseSize，需要html中font-size换算比例倍数相同
            remUnit: 200 * 750 / 640 // 兼容old
          })
        ]
      }
    }
  },

  // 关闭文件名哈希
  filenameHashing: false,

  chainWebpack: config => {
    // 修复HMR @TODO 看别人这么配置的，具体原因不详，待验证
    config.resolve.symlinks(true)

    // 别名
    config.resolve.alias
      .set('@less', resolve('src/less'))
      .set('@assets', resolve('src/assets'))
      .set('@pages', resolve('src/pages'))
      .set('@common', resolve('src/common'))
      .set('@components', resolve('src/common/components'))
      .set('@business', resolve('src/common/business'))
      .set('@tools', resolve('src/tools'))
      .set('@activity', resolve('src/pages/activity'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('./src/less/mixin.less')
      ]
    }
  },
  /**
   * @Type: Object | Function
   * @method externals 外部引用配置，如Vue
   * @method config.plugins.push 添加插件配置
   */
  configureWebpack: config => {
    if (!IS_PROD) {
      config.devtool = 'source-map'
    }

    config.target = 'web'
    // 抽离 - 外部引用JS
    config.externals = {
      vue: 'Vue'
    }
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
  parallel: require('os').cpus().length > 1
}
// 启动一个 vue 文件 vue serve template.vue
