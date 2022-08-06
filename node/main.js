var http = require('http')
var fs = require('fs')
var app = http.createServer(function(request, response){
    //if(http.request,url == "/"){
    //    url = '/index.html'
    //}
    response.writeHead(200, {'Content.Type': 'text/html; charset=utf-8'});
    response.end("hello")
})

app.listen(3000)