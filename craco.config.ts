export default {
  babel: {
    presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
  },
  webpack: {},
};
