'use strict';

const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');

module.exports = withImages(withOptimizedImages({
  images: {
    domains: ['example.com'], // add your image domains here
  },
  compress: true,
  swcMinify: true,
  performance: {
    hints: 'warning',
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
  }
}));