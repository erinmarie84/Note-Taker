const fs = require('fs');
const express = require('express');
const http = require('http');
const { response } = require('express');
const PORT = 8080;

var app = express();

const handler = (request, response) => {
    fs.readFile(`${__dirname}/index.html`);
    (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end('Not Found!');
        }
    }
};

app.get("/notes", function(req, res) {
    res.send('');
})

app.get("/api/notes", function(req, res) {
    
})



const server = http.createServer(handler);
server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));