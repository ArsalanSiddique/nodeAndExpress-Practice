const express = require("express");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

const app = express();
var morganMiddleware = morgan("short");
app.use(morganMiddleware);

app.use(function(req, res, next) {
    console.log("URL is: " + req.url);
    console.log("Request Date: " + new Date());
    next();
});

app.use((req, res, next) => {
    var filePath = path.join(__dirname, "static", req.url);
    console.log(filePath);
    fs.stat(filePath, function(err, fileInfo) {
        if(err) {
            next(new Error("Error Sending File."));
            return;
        }
        if(fileInfo.isFile()) {
            res.sendFile(filePath, (err) => {
                if(err) {
                    next(new Error("Error Sending File"));
                }
            });
        }
    });
});

app.use((err, req, res, next) => {
    // console.error(err);
    // next(err);
    res.status(500);
    res.send("Internel Server Error");
});

// var filePath = path.join(__dirname, "static");
// app.use(express.static(filePath));

app.use((req, res)=> {
    res.status(404).send("File Not Found");
});

app.listen(3000, ()=> {
    console.log("app is running on port 3000");
});