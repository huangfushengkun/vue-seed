'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"mock"',
  ROOT_API_URL:'"http://www.hs-dev.com"'
})
