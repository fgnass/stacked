var stacked = require('..')

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
