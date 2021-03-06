var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

http.createServer(function(req, res){
    var pathObj = url.parse(req.url, true);
    if(pathObj.pathname !== '/favicon.ico'){
        fs.readFile(path.join(__dirname, pathObj.pathname), function(e, data){
            if(e){
                res.writeHead(404, 'not found');
                res.end('<h1>404 not found</h1>');
            }else {
                res.end(data);
            }
        })
    }
}).listen(8090);