const sharp = require('sharp');

let inputFile  = "app/Jegor.png";
let outputFile = "app/output.webp";

sharp(inputFile)
    .webp({ lossless: true })
    .toFile(outputFile)
    .then(function(newFileInfo) {
        console.log("Success");
        console.log(newFileInfo)
    })
    .catch(function(err) {
        console.log("Error");
    });
