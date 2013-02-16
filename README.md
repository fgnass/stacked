# stacked

Stacked is a stand-alone, lightweight, zero-dependency version of
[connect](http://www.senchalabs.org/connect/)'s middleware handling code.

It can be used to create modules that bundle multiple middleware functions
into one.

## Usage

```javascript
var stacked = require('stacked')

function middleware(req, res, next) {
  console.log('middleware', req.url)
  next()
}

function mounted(req, res, next) {
  console.log('mounted', req.url)
  next()
}

module.exports = stacked()
  .use(middleware)
  .mount('/path', mounted)
```
