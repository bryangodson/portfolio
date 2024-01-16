var dt =require('./date')
var http=require('http');
http.createServer((reauest, response)=>{
response.writeHead(200,{'Content-Type':'text/html'})
response.write(dt.date()) 
response.end('Hello world')
}).listen(8080)