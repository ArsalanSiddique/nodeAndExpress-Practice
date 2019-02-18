var http = require("http");
function requestHandler(request, response) {
    if(request.url === "/")
        response.end("Hello, Bro! Now you are on the root directory " + request.url);
    if(request.url === "/about")
        response.end("I'm a IOT developer " + request.url);
    if(request.url === "/contact")
        response.end("Hello, this is my contact. +92 341 1126905 " + request.url);
    else
        response.end("404 Error occured " + request.url);
}
var server = http.createServer(requestHandler);
server.listen(3000);