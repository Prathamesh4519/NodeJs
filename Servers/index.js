const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("New Req Received");
    // res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Welcome to Node.js Server');
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});