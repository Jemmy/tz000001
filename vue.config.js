module.exports = {
  runtimeCompiler: undefined,
  baseUrl: '/',
  outputDir: '/dest',
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  },
  // Отключаем  webpack-prefetch-plugin, что бы не загружать чанки в фоне
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}
