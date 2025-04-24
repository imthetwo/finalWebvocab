const http = require('http'); 

const server = http.createServer((req, res) => {
  // Set a default response header  
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    // Home page response
    res.write('<h1>This is the home page.</h1>');
  } else if (req.url === '/student') {
    // Student page response
    res.write('<h1>This is the student page.</h1>');
  } else if (req.url === '/admin') {
    // Admin page response
    res.write('<h1>This is the admin page.</h1>');
  } else if (req.url === '/data') {
    // Data page returning JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'Hello World JSON' }));
  } else {
    // For any other URL, send "Invalid Request!!"
    res.write('Invalid Request!!');
  }
  
  // End the response so the client knows it's complete
  res.end();
});

// Listen for incoming requests on port 8000
server.listen(8000, () => {
  console.log('Node.js web server at port 8000 is running...');
});
