export const routes = [
  { method: 'GET', path: '/tasks', handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'POST', path: '/tasks', handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'PUT', path: '/tasks/:id', handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'PATCH', path: '/tasks/:id/complete', handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'DELETE', path: '/tasks/:id', handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
];