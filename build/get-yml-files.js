#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

function getYmlFiles (cb) {
  const folder = path.resolve(__dirname, '../deps/twofactorauth/_data')
  fs.readdir(folder, function (err, files) {
    if (err) return cb(err)
    files = files.filter(function (file) {
      return /\.yml$/i.test(file)
    })
    cb(null, files.map(function (file) {
      return path.join(folder, file)
    }))
  })
}

module.exports = getYmlFiles
