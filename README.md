# twofactorauth

Aggregates [`_data`](https://github.com/2factorauth/twofactorauth/tree/master/_data) in [twofactorauth](https://github.com/2factorauth/twofactorauth).

```
$ npm i twofactorauth [-S|-g]
```

[![Build Status](https://travis-ci.org/ralphtheninja/node-twofactorauth.svg?branch=master)](https://travis-ci.org/ralphtheninja/node-twofactorauth)
[![dependencies](https://david-dm.org/ralphtheninja/node-twofactorauth.svg)](https://david-dm.org/ralphtheninja/node-twofactorauth)

## Usage

Exports an object where `websites` property is an aggregated array with website meta data. With the addition that each entry in the array, also has `category` attached to it, based on the file name it was extracted from. E.g. all entries from `_data/backup.yml` will have the `category` property set to `"backup"`.

```js
console.log(require('twofactorauth'))
```

outputs:

```json
{
  "websites": [
    {
      "name": "AeroFS",
      "url": "https://www.aerofs.com/",
      "tfa": "Yes",
      "software": "Yes",
      "img": "aerofs.png",
      "doc": "https://blog.aerofs.com/two-factor-authentication-for-hybrid-and-private-cloud/",
      "category": "backup"
    },
    {
      "name": "Apple iCloud",
      "url": "https://www.icloud.com",
      "img": "icloud.png",
      "tfa": "Yes",
      "sms": "Yes",
      "software": "Yes",
      "exceptions": {
        "text": "See http://support.apple.com/kb/HT5593 for a list of supported SMS carriers."
      },
      "doc": "http://support.apple.com/kb/ht5570",
      "category": "backup"
    },
    ..
  ]
}

```

You can also install it globally and get the data directly to `stdout`.

```
$ npm i twofactorauth -g
$ twofactorauth
```

## License
MIT
