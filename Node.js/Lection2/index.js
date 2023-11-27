const fs = require("fs");

fs.writeFile(
    path.join(__dirname, "test.json"),
    `{
        "name": "Vasily",
        "surName": "Pupkin"
    }`,
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log("the file was saved.");
    }
);

fs.readFile(__dirname + "/test.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
