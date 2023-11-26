const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(`Поступил запрос`, req.method, req.url);
});

app.get("/", (req, res) => {
    res.send("<h1>Welcome</h1>");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is lunched on ${port} port.`);
});
