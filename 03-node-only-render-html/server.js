var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}); //this 
    fs.readFile('./index.html', null, function(error, data) { //runs the read file method. 
        if (error) {
            response.writeHead(404); //if its 404 thats what you print
            response.write('File not found!');
        } else { //if not, you are putting up your data... 
            response.write(data); //this is the data
        }
        response.end(); //end the function
    });
}

http.createServer(onRequest).listen(8000); //then it creates the server