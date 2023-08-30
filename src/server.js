import http from 'node:http';

const server = http.createServer(async (req, res) => {
  console.log(req);

  return res.end('teste');
});

server.listen(3333);