// create new server
// listen to port 3000
// log the request object to the console
const http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
  res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><form Action="/message" method="POST"><input type="text" name="message"></form></body>');
  res.write('</html>');
  res.end();
   };
});
server.listen(3000);
// we learned how to create a server and listen to incoming requests
// we learned how to log the request object to the console
// we learned how to send a response to the client
// we learned how to set a header on the response object
// we learned how to write a response to the client
// we learned how to end the response
// we learned how to listen to incoming requests on a specific port
// we learned how to send an HTML response to the client
// we learned how to send a response with a status code

