var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

http.createServer(function(req, res){
    var pathObj = url.parse(req.url, true);

    switch(pathObj.pathname){
        case '/getNews':
            var news = [
                '苹果',
                '香蕉',
                '猕猴桃'
            ];
            res.setHeader('Content-type', 'text/json; charset=utf-8');
            if(pathObj.query.callback){
                res.end(pathObj.query.callback + '(' + JSON.stringify(news) + ')');
            }else {
                res.end(JSON.stringify(news));
            }
            break;
        default:
            fs.readFile(path.join(__dirname, pathObj.pathname), function(e, data){
                if(e){
                    res.writeHead(404, 'not found');
                    res.end('<h1>404 not found</h1>');
                }else {
                    res.end(data);
                }
            })
    }
}).listen(8080);