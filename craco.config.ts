module.exports = {
  plugin: [],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  devServer: {
    hot: true,
    proxy: {
      '/api/*': 'http://193.123.246.157/',
      secure: false,
      changeOrigin: true,
    },
  },
};
