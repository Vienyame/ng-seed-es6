'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var http = require('http');
var httpProxy = require('http-proxy');

gulp.task('proxy', function(){
	
	var proxy = httpProxy.createServer({
	  target: 'ws://0.0.0.:8100',
	  ws: true
	});
	var proxyServer = http.createServer(function (req, res) {
		proxy.web(req, res);
	});
	proxyServer.on('upgrade', function (req, socket, head) {
	  proxy.ws(req, socket, head);
	});

	proxy.on('proxyReq', function(proxyReq, req, res, options) {
	  console.log(res);
	  //proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
	});

	proxy.on('error', function(){
		console.log(arguments);
	});

	proxyServer.listen(8100, '0.0.0.0');

});