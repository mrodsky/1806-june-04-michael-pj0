var http = require('http');
var fs = require('fs');

var httpHandler = (request, response) => {
  // var fileSync = fs.readFileSync('templates/index.html');
  // response.end(fileSync);
  if (request.url === '/') {
    switch (request.method) {
      case 'GET':
        fs.readFile('templates/index.html', (error, data) => {
          if (error) {
            console.log(error);
            response.end('internet broke');
          }

          response.end(data);
        });


        break;
      default:
        break;
    }
  }

  if (request.url === '/contact') {
    switch (request.method) {
      case 'POST':
        fs.readFile('templates/contact.html', (error, data) => {
          if (error) {
            console.log(error);
            response.end('internet broke');
          }

          response.end(data);
        });


        break;
      default:
        break;
    }
  }
};


var server = http.createServer(httpHandler);

var port = 5051;
server.listen(port);
