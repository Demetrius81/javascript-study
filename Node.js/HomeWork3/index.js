const express = require("express");
const fs = require("fs");
const fileservice = require("./fileservice");

const path = require("path");

const home = "/";
const about = "/about";
const file = "status.json";

let status = fileservice.readFile(__dirname, file) ?? {
    home: 0,
    about: 0,
};

const app = express();

app.use((req, res, next) => {
    if (req.url === home) {
        status.home++;
        fileservice.writeFile(__dirname, file, status);
    } else if (req.url === about) {
        status.about++;
        fileservice.writeFile(__dirname, file, status);
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
