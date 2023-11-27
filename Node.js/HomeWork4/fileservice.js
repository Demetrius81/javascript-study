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
    const pathToFile = path.resolve(dirName, fileName);
    if (fs.existsSync(pathToFile)) {
        const data = fs.readFileSync(pathToFile, "utf-8", "r");
        if (data) {
            result = JSON.parse(data);
            return result;
        } else {
            return null;
        }
    } else {
        console.log("Not found");
        return null;
    }
}

module.exports = { writeFile, readFile };
