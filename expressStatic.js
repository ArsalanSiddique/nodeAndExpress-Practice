//express's static

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(req, res) {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Looks like you didn't find a staticFile");
});

http.createServer(app).listen(3000);