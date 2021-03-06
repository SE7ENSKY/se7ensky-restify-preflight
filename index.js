// Generated by CoffeeScript 1.7.1
module.exports = function(server, opts) {
  var headers;
  headers = 'X-Requested-With, Cookie, Set-Cookie, Accept, Access-Control-Allow-Credentials, Origin, Content-Type, Request-Id , X-Api-Version, X-Request-Id, Authorization';
  if (opts != null ? opts.headers : void 0) {
    headers += ', ' + opts.headers;
  }
  server.use(function(req, res, next) {
    if (req.headers.origin) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', headers);
    res.header('Access-Control-Expose-Headers', 'Set-Cookie');
    return next();
  });
  return server.opts('.*', function(req, res, next) {
    var requestMethod;
    if (req.headers.origin && req.headers['access-control-request-method']) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Headers', headers);
      res.header('Access-Control-Expose-Headers', 'Set-Cookie');
      requestMethod = req.headers['access-control-request-method'];
      res.header('Allow', requestMethod);
      res.header('Access-Control-Allow-Methods', requestMethod);
      if (req.log) {
        req.log.info({
          url: req.url,
          method: req.headers['access-control-request-method']
        }, "Preflight");
      }
      res.send(204);
      return next();
    } else {
      res.send(404);
      return next();
    }
  });
};
