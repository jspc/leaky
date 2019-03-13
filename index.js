const http = require('http');

var server = http.createServer((req, res) => {
    for (var i=0; i<1000; i++) {
        server.on('request', function leakyfunc() {});
    }

    res.end('Hello World\n');
}).listen(8080, '0.0.0.0');

server.setMaxListeners(0);

console.log('Process PID: ', process.pid);
