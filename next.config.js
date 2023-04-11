/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
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
