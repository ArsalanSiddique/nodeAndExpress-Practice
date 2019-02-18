// // var express = require("express");
// // var http = require("http");

// // var app = express();

// // app.use(function(req, res) {
// //     console.log("In comes a request to " + req.url);
// //     Response.end("Hello, Middleware.");
// // });

// // http.createServer(app).listen(3000);



// ================== Dual middleware ==================



// var express = require("express");
// var http = require("http");
// var app = express();

// app.use(function (request, response, next) {
//     console.log("In comes a request " + request.method + " to " + request.url);
//     // response.send("Loging process.");
//     next();
// })

// app.use(function (request, response) {
//     response.writeHead(200, { "content-type": "text/plain" });
//     response.end("Hello, world!");
// });
// http.createServer(app).listen(3000);



// ================== login function for even minutes ==================



// var express = require("express");
// var http = require("http");
// var app = express();


// app.use(function(req, res, next) {
//     console.log("It comes in " + req.method + " and url " + req.url );
//     next();
// });

// app.use(function(req, res, next) {
//     var mydate = new Date().getMinutes();
//     if(mydate % 2 === 0) {
//         console.log("Access Granted");
//         next();
//     }else {
//         res.statusCode = 403;
//         res.end("Access Denied");
//     }
// });

// app.use(function(req, res) {
//     res.end("Secret Info is: sowrdFish");
// });

// http.createServer(app).listen(3000);



// ================== login by using morgan module ==================


// !working

var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));

app.use(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
});

http.createServer(app).listen(3000);