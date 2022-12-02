const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugins.delete('prefetxh');//prefetch 기능 삭제
    /*
    해당 기능은 운영쪽 현황 조사를 통해 지속적으로 라운터 설정
    */
  }
})
