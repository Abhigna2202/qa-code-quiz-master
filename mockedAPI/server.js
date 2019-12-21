const app = require('./app')
const http = require('http');

http.createServer(app).listen(9999, () => {
    console.log("Application listening on PORT 9999");
});