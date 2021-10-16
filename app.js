const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to home page');
  }
  if (req.url === '/about') {
    res.end('Welcome to history');
  }
  res.end(`
  <h1>Oops!</h1>
  <p>Something went wrong. We can't find the page.</p>
  <a href="/">Back Home</a>
  `);
});

server.listen(5000);