const express = require("express");
const fs = require("fs");
const path = require("path");

const home = "/";
const about = "/about";
const file = "status.json";

let status = readFile(__dirname, file) ?? {
    home: 0,
    about: 0,
};

function writeFile(dirName, fileName, data) {
    const jsonStatus = JSON.stringify(data);
    fs.writeFile(path.resolve(dirName, fileName), jsonStatus, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("the file was saved.");
        }
    });
}

function readFile(dirName, fileName) {
    let result = null;
    fs.access(path.resolve(dirName, fileName), (error) => {
        if (error) {
            console.log("File not found");
        } else {
            fs.readFileSync(
                path.resolve(dirName, fileName),
                "utf-8",
                (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        result = JSON.parse(data);
                        console.log(result);
                    }
                }
            );
        }
    });

    return result;
}

const app = express();

app.use((req, res, next) => {
    if (req.url === home) {
        status.home++;
        writeFile(__dirname, file, status);
    } else if (req.url === about) {
        status.about++;
        writeFile(__dirname, file, status);
    }
    next();
});

app.get(home, (req, res) => {
    res.send(`
    <h1>Home page</h1>
    </br>
    <a href="/about">About</a>
    </br>
    <h2>Total visits = ${status.home}</h2>
    </script>
    `);
});

app.get(about, (req, res) => {
    res.send(`
    <h1>About</h1>
    </br>
    <a href="/">Home</a>
    </br>
    <h2>Total visits = ${status.about}</h2>
    </script>
    `);
});

app.listen(3000);
