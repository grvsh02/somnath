/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
};

module.exports = {
  ...nextConfig,
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
}


// const nextConfig = {
//   reactStrictMode: true,
// }
//
// module.exports = nextConfig
