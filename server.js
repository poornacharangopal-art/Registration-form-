const http = require("http");

http.createServer((req,res)=>{

    console.log("Request received:", req.method);

    res.writeHead(200,{
        "Content-Type":"text/plain",
        "Access-Control-Allow-Origin":"*"
    });

    res.end("form submitted successfully");

}).listen(3000,()=>{
    console.log("Server is running on port 3000");
});