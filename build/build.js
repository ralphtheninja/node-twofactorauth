#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const getYmlFiles = require('./get-yml-files')

function build (writeTo, cb) {
  getYmlFiles(function (err, files) {
    if (err) return cb(err)
    var all = []
    try {
      files.forEach(function (file) {
        var content = fs.readFileSync(file, 'utf8')
        var category = path.basename(file, '.yml')
        var doc = yaml.safeLoad(content)
        if (Array.isArray(doc.websites)) {
          doc.websites.forEach(function (site) { site.category = category })
          all = all.concat(doc.websites)
        }
      })
      var outputFile = path.join(__dirname, writeTo)
      fs.writeFileSync(outputFile, JSON.stringify(all, null, 2))
    } catch (err) {
      return cb(err)
    }
    cb()
  })
}

module.exports = build

if (!module.parent) {
  build('websites.json', function (err) {
    if (err) return console.error('failed to build', err)
    console.log('built websites.json successfully')
  })
}
