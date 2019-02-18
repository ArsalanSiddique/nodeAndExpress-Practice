var express = require("express");

var app = express();

app.get("/", function(request, response, next) {
    response.send("Hello World")
    //response.send("This is Home Page")
})

app.get("/about", function(request, response, next) {
    response.send("I am a designer and developer.")
})
app.get("/contact", function(request, response, next) {
    response.send("+92 341 1126905")
    response.send("arsalan.ahmed1264@gmail.com")
})

app.use(function(requset, response) {
    response.statusCode = 404;
    response.end("404!");
});

app.listen(3000, function() {
    console.log("App is running");
})
