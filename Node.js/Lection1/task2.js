const http = require("http");
const server = http.createServer((request, result) => {
    console.log("Request is getted");
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server lunched on port ${port}`);
});
