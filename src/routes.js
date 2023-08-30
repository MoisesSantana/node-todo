import { buildRoutePath } from './utils/build-route-path.js';

export const routes = [
  { method: 'GET', path: buildRoutePath('/tasks'), handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'POST', path: buildRoutePath('/tasks'), handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'PUT', path: buildRoutePath('/tasks/:id'), handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'PATCH', path: buildRoutePath('/tasks/:id/complete'), handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
  { method: 'DELETE', path: buildRoutePath('/tasks/:id'), handler: (req, res) => {
    return res.end('path: ' + req.url + ' method: ' + req.method);
  } },
];