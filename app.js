// create new server
// listen to port 3000
// log the request object to the console 
const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><form Action="/message" method="POST"><input type="text" name="message"></form> <button type="submit">Send</button></body>');
    res.write('</html>');
    res.end();
  };
  //redirecting the user
  if (url === '/message' && req.method === 'POST') {
    const reqBody = [];
    // on method post, we want to redirect the user to the home page, and it listens to the incoming data
    // we want to listen to the incoming data, and we want to listen to the data event
    //chunk is a buffer, and we want to store the data in a file
    // buffer is a temporary memory storage area, it stores data so that it can be processed by the CPU
    req.on('data', (chunk) => {
      reqBody.push(chunk);
    });
    req.on('end', () => {
      //buffer.concat is a method that concatenates all the buffers in the array
      const parsedBody = Buffer.concat(reqBody).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      //fs.writeFile('message.txt', message, (err) => {
      //  res.statusCode = 302;
      //  res.setHeader('Location', '/');
      //  return res.end();
      //});
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
      fs.writeFilee('message.txt', 'Meta info');
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
});
//parsing data
//streams and buffers
//listening to incoming requests, and sending responses, and setting headers, and status codes, and sending HTML responses
// what is buffer? A buffer is a temporary memory storage area. It stores data so that it can be processed by the CPU.





// we learned how to create a server and listen to incoming requests
// we learned how to log the request object to the console
// we learned how to send a response to the client
// we learned how to set a header on the response object
// we learned how to write a response to the client
// we learned how to end the response
// we learned how to listen to incoming requests on a specific port
// we learned how to send an HTML response to the client
// we learned how to send a response with a status code

