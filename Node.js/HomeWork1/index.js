const http = require("http");

const server = http.createServer((request, response) => {
    console.log(`Request is getted. ULL=${request.url}`);
    switch (request.url) {
        case "/":
            response.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            response.end(`<h1>Home page</h1>
            </br>
            <a href="/about">About</a>
            <script>
                function setToStorageHome() {
                    let count = 1;
                    if (localStorage.getItem("home") === null) {
                        localStorage.setItem("home", JSON.stringify(count));
                    } else {
                        let count = JSON.parse(localStorage.getItem("home"));
                        localStorage.setItem("home", JSON.stringify(++count));
                    }
                }
                
                function insertCount(count) {
                    const header = document.querySelector("h1");
                    const counter = document.createElement("h2");
                    counter.textContent = 'Total visits = ' +count ;
                    header.after(counter);
                }

                window.addEventListener("load", () => {
                    let count = localStorage.getItem("home") ?? 1;
                    insertCount(count);
                });

                window.addEventListener("beforeunload", () => {
                    setToStorageHome();
                })
            </script>`);
            break;
        case "/about":
            response.writeHead(200, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            response.end(`<h1>About page</h1>
            </br>
            <a href="/">Home</a>
            <script>        
                function setToStorageAbout() {
                    let count = 1;
                    if (localStorage.getItem("about") === null) {
                        localStorage.setItem("about", JSON.stringify(1));
                    } else {
                        let count = JSON.parse(localStorage.getItem("about"));
                        localStorage.setItem("about", JSON.stringify(++count));
                    }
                }

                function insertCount(count) {
                    const header = document.querySelector("h1");
                    const counter = document.createElement("h2");
                    counter.textContent = 'Total visits = ' + count;
                    header.after(counter);
                }

                window.addEventListener("load", () => {
                    let count = localStorage.getItem("about") ?? 1;
                    insertCount(count);
                });

                window.addEventListener("beforeunload", () => {
                    setToStorageAbout();
                })
            </script>`);
            break;
        default:
            response.writeHead(404, {
                "Content-Type": "text/html; charset=UTF-8",
            });
            response.end(
                '<h1>Error 404. Page not found</h1></br><a href="/">Home</a>'
            );
            break;
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server lunched on port ${port}`);
});
