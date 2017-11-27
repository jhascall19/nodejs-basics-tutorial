var http = require('http'); // importing a require statment. this is a variable
var module1 = require('./module1'); //importing these and modules and functions
var module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction(); //executing the function
    response.end();
}

http.createServer(onRequest).listen(8000); //function of the var http