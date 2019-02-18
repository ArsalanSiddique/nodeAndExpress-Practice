var urlModule = require("url");
var parsedUrl = urlModule.parse("http://www.example.com/profile?name=barry");

console.log(parsedUrl.host); //www.example.com
console.log(parsedUrl.hostname);
console.log(parsedUrl.port);
console.log(parsedUrl.slashes);
console.log(parsedUrl.query); //name = barry