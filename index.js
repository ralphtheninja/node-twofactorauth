#!/usr/bin/env node

var data = module.exports = {
  websites: require('./build/websites.json')
}

if (!module.parent) {
  console.log(JSON.stringify(data, null, 2))
}
