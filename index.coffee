module.exports = (server, opts) ->
	headers = 'X-Requested-With, Cookie, Set-Cookie, Accept, Access-Control-Allow-Credentials, Origin, Content-Type, Request-Id , X-Api-Version, X-Request-Id, Authorization'
	headers += ', ' + opts.headers if opts?.headers

	# CORS headers
	server.use (req, res, next) ->
		res.header 'Access-Control-Allow-Origin', req.headers.origin if req.headers.origin
		res.header 'Access-Control-Allow-Credentials', 'true'
		res.header 'Access-Control-Allow-Headers', headers
		res.header 'Access-Control-Expose-Headers', 'Set-Cookie'
		next()

	# Preflight requests
	server.opts '.*', (req, res, next) ->
		if req.headers.origin and req.headers['access-control-request-method']
			res.header 'Access-Control-Allow-Origin', req.headers.origin
			res.header 'Access-Control-Allow-Credentials', 'true'
			res.header 'Access-Control-Allow-Headers', headers
			res.header 'Access-Control-Expose-Headers', 'Set-Cookie'
			res.header 'Allow', req.headers['access-control-request-method']
			res.header 'Access-Control-Allow-Methods', req.headers['access-control-request-method']
			if req.log
				req.log.info { url:req.url, method:req.headers['access-control-request-method'] }, "Preflight"
			res.send 204
			next()
		else
			res.send 404
			next()