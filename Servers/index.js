const http=require('http');
const fs=require("fs"); 

const server=http.createServer((req,res)=>{
    if(req.url === "/favicon.ico"){
            res.end();
       }
   fs.appendFile("log.txt",`Request made to ${req.url} at ${new Date()}\n`,(err)=>{
        if(err) throw err;
        console.log("Request logged");
    });
    // res.writeHead(200,{'Content-Type':'text/html'});
    switch(req.url){
        case "/":
            res.end("<h1>Welcome to the Home Page</h1>");
            break;  
          case "/about":
            res.end("<h1>Welcome to the About Page</h1>");
            break;
            default:
            res.end("<h1>404 Not Found</h1>");
    }  
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});