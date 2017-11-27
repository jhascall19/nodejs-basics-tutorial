//I WANNA 
var http = require('http');

function onRequest(request, response) { //writing the function
    response.writeHead(200, {'Content-Type': 'text/plain'}); // could set other header-keys as well
    response.write('Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch'); //what will be printed
    response.end(); //you are now done
}

http.createServer(onRequest).listen(8000); //need to write the function on Request