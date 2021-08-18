
//http
const  http = require('http');
const server = http.createServer((request, respone) => {
    if (request.url === '/'){
        respone.write('Hello World');
        respone.end();
    }

    if(request.url === '/api/courses'){
        respone.write(JSON.stringify([1,2,3]));
        respone.end();
    }

});

/*
//=> is the same like function()
server.on('connection', (socket) => {
    console.log('New connection....');
});
*/

server.listen(3000);

console.log('Listening on port 3000...');
