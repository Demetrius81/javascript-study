const express = require("express");

const app = express();

const users = [];

let unuqueId = 0;

app.use(express.json());

app.get("/users", (req, res) => {
    res.send({ users });
});

app.post("/users", (req, res) => {
    unuqueId = users.length + 1;
    users.push({
        id: unuqueId,
        ...req.body,
    });
    res.send({ id: unuqueId });
});

app.put("/users/:id", (req, res) => {
    const id = +req.params.id;
    const user = users.find((x) => x.id === id);
    if (user) {
        const { firstName, secondName, age, city } = req.body;
        user.firstName = firstName;
        user.secondName = secondName;
        user.age = age;
        user.city = city;
        res.send({ user: user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

const port = 3000;

app.listen(port);
