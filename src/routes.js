import { completeTask, createNewTask, deleteTask, getAllTasks, updateTask } from './service/tasks.js';
import { buildRoutePath } from './utils/build-route-path.js';

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => getAllTasks(req, res),
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => createNewTask(req, res),

  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => updateTask(req, res),

  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => completeTask(req, res),

  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => deleteTask(req, res),

  },
];