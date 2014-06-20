# stacked

Stacked is a stand-alone, lightweight, zero-dependency version of
[connect](http://www.senchalabs.org/connect/)'s middleware infrastructure.

It can be used to create modules that bundle multiple middleware functions
into one.

## Install

```
npm install stacked --save
```

## Usage

```javascript
var stacked = require('stacked')

/**
 * A middleware that logs the requested URL.
 */
function middleware(req, res, next) {
  console.log('url:', req.url)
  next()
}

/**
 * A middleware that logs the requested URL (with the mount point stripped)
 * as well as the original URL.
 */
function mounted(req, res, next) {
  console.log('url:', req.url, 'realUrl:', req.realUrl)
  next()
}

module.exports = stacked()
  .use(middleware)
  .mount('/path', mounted)
```

## Run Tests

```
npm install
npm test
```
