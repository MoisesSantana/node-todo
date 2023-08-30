import http from 'node:http';
import { routes } from './routes.js';

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const route = routes.find((route) => {
    return(
      route.method === method && route.path.test(url)
    );
  });

  if (route) {
    return route.handler(req, res);
  }

  return res.writeHeader(404).end('Not Found');
});

server.listen(3333);