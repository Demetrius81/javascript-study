const express = require("express");
const joi = require("joi");
const fileservice = require("./fileservice.js");

const file = "users.json";
const app = express();
let users = [];
let unuqueId = 0;
const userSheme = joi.object({
    firstName: joi.string().required().min(2),
    firstName: joi.string().required().min(2),
    secondName: joi.string().required().min(2),
    age: joi.number().required().min(0).max(125),
    city: joi.string().min(2),
});

app.use(express.json());

app.get("/users", (req, res) => {
    users = fileservice.readFile(__dirname, file) ?? [];
    res.send({ users });
});

app.post("/users", (req, res) => {
    const result = userSheme.validate(req.body);
    if (result.err) {
        return res.status(404).send({ error: result.error.details });
    }
    users = fileservice.readFile(__dirname, file) ?? [];
    const lastId = users.length > 0 ? users[users.length - 1].id : 0;
    unuqueId = lastId + 1;
    users.push({
        id: unuqueId,
        ...req.body,
    });
    fileservice.writeFile(__dirname, file, users);
    res.send({ id: unuqueId });
});

app.put("/users/:id", (req, res) => {
    const result = userSheme.validate(req.body);
    if (result.err) {
        return res.status(404).send({ error: result.error.details });
    }
    users = fileservice.readFile(__dirname, file) ?? [];
    const id = +req.params.id;
    const user = users.find((x) => x.id === id);
    if (user) {
        const { firstName, secondName, age, city } = req.body;
        user.firstName = firstName;
        user.secondName = secondName;
        user.age = age;
        user.city = city;
        fileservice.writeFile(__dirname, file, users);
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.get("/users/:id", (req, res) => {
    users = fileservice.readFile(__dirname, file) ?? [];
    const id = +req.params.id;
    const user = users.find((x) => x.id === id);
    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete("/users/:id", (req, res) => {
    users = fileservice.readFile(__dirname, file) ?? [];
    const id = +req.params.id;
    const user = users.find((x) => x.id === id);
    if (user) {
        const index = users.indexOf(user);
        users.splice(index, 1);
        fileservice.writeFile(__dirname, file, users);
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

const port = 3000;

app.listen(port);
