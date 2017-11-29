var url = require('url'); //using the url to help find paths
var fs = require('fs'); //exporting a function useful in node JS

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) { //filesystem using the read file method
        if (error) {
            response.writeHead(404); 
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
  handleRequest: function(request, response) { //same thing but in another file then index
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname; //this is finding the value for url whatever the user enters
      switch (path) {
          case '/':
              renderHTML('./index.html', response); //two routes, each with the same response this time
              break;
          case '/login':
              renderHTML('./login.html', response);
              break;
          default:
              response.writeHead(404);
              response.write('Route not defined'); //gives an error if neither
              response.end(); //cuts out... it works!!!!
      }

  }
};