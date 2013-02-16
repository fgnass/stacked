var http = require('http')
  , bundle = require('./bundle')

http.createServer(bundle).listen(8080)
