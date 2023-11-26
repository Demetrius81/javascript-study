const fs = require("fs");
const path = require("path");

function writeFile(dirName, fileName, data) {
    const jsonStatus = JSON.stringify(data);
    fs.writeFile(path.resolve(dirName, fileName), jsonStatus, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("the file was saved.");
    });
}
function readFile(dirName, fileName) {
    let result = null;
    fs.readFileSync(path.resolve(__dirname, fileName), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            result = JSON.parse(data);
        }
    });

    return result;
}

module.exports = { writeFile, readFile };
