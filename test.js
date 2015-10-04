const test = require('tape')
const after = require('after')
const fs = require('fs')
const getYmlFiles = require('./build/get-yml-files')
const build = require('./build/build')

test('getYmlFiles return files correctly', function (t) {
  getYmlFiles(function (err, files) {
    t.error(err, 'no error')
    var done = after(files.length, function (err) {
      t.error(err, 'no error')
      t.end()
    })
    files.forEach(function (file) {
      fs.exists(file, function (exists) {
        done(exists ? null : new Error('nope'))
      })
    })
  })
})

test('building .json and requiring it', function (t) {
  var result = 'build/test.json'
  try { fs.unlinkSync(result) } catch (err) { }
  t.equal(fs.existsSync(result), false, 'should not exist')

  build('test.json', function () {
    t.equal(fs.existsSync(result), true, 'should exist')
    t.doesNotThrow(function () {
      require('./build/test.json')
    })
    t.end()
  })
})
