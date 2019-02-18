var fs = require("fs");
var options = { encoding: "utf-8" };

fs.readFile("myTxtFile.txt", options, function (err, data) {
    if(err) {
        console.log("Error Reading File!");
        return;
    }
    console.log(data.match(/x/gi).length + " Letter X's ")
});

console.log("Why I run FIRST. ")
// var fs = require("fs");
// var options = { encoding: "utf-8" };
// fs.readFile("myfile.txt", options, function (err, data) {
//     if (err) {
//         console.error("Error reading file!");
//         return;
//     }
//     console.log(data.match(/x/gi).length + " letter X's");
// });