const http = require('http');
http.createServer((req , res) => {
    res.write("hello");
     res.end();  //we end res bcz it don't the server ended
}).listen(4500)

// or you can do this for mode programing way

function dataSaver(req , res){
    res.write("hello i am daksh");
    res.end();
}

http.createServer(dataSaver).listen(4500)