const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);
    res.end("resposta do servidor - 2.\n");
});

server.listen(3002, '0.0.0.0', () => {
    console.log('running on http://localhost:3002/');
});
