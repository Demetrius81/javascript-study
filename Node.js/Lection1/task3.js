const http = require("http");
const server = http.createServer((request, response) => {
    console.log("Request is getted");
    response.writeHead(200, {
        "Content-Type": "text/html; charset=UTF-8",
    });
    response.end("<h1>Welcome to my site!</h1>");
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server lunched on port ${port}`);
});
