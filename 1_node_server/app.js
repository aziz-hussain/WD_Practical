const http = require('http');
const port = 9000;
const greeting = require('./my_function.js')
greet = greeting.greet('aziz')

const server = http.createServer((request, response) => {
    response.write('nigger \n');
    response.write(greet);
    response.end();
})

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})