module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      // viewportWidth: 750,
      viewportWidth: function (file) {
        return file && file.includes("node_modules/vant") ? 375 : 750;
      },
      unitPrecision: 3,
      minPixelValue: 1
    },
    // 'postcss-pxtorem': {
    //   rootValue ({ file }) {
    //     return file.indexOf('vant') !== -1 ? 37.5 : 75
    //   },
    //   propList: ['*']
    // },
    autoprefixer: {}
  }
}

