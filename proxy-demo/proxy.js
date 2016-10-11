/**
 * Created by wjkang on 2016/10/11.
 */
var http = require('http');
var net = require('net');
var url = require('url');

function request(cReq, cRes) {

    var u = url.parse(cReq.url);
    console.log(cReq.url);
    console.log(u);
    var options = {
        hostname : u.hostname,
        port     : u.port || 80,
        path     : u.path,
        method     : cReq.method,
        headers     : cReq.headers
    };

    var pReq = http.request(options, function(pRes) {
        cRes.writeHead(pRes.statusCode, pRes.headers);
        pRes.pipe(cRes);
    }).on('error', function(e) {
        cRes.end();
    });

    cReq.pipe(pReq);
}

http.createServer().on('request', request).listen(8889, '0.0.0.0');
