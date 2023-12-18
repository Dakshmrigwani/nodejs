const http = require('http');

const data = require("./data")
http.createServer((req , res) => {
res.writeHead(200 , {'Content-type':'application\json'})
// 200 or 201 or 404 , 500 is a server response 
res.write(JSON.stringify(data));
res.end()
}).listen(5000)
