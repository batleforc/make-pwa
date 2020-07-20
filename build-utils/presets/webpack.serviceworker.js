const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = () => ({
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js',
      maximumFileSizeToCacheInBytes:150000000
    })
  ]
});