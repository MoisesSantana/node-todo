import { randomUUID } from 'node:crypto';
import { dateFormatter } from '../utils/formatter.js';
import { Database } from '../database.js';

const database = new Database();

export function getAllTasks(_req, res) {
  const tasks = database.select('tasks');

  return res.end(JSON.stringify(tasks));
}

export function createNewTask(req, res) {
  const task = {
    id: randomUUID(),
    ...req.body,
    createdAt: dateFormatter.format(new Date()),
    updatedAt: dateFormatter.format(new Date()),
    completedAt: null,
  };

  database.insert('tasks', task);
  return res.writeHeader(201).end(JSON.stringify(task));
}

export function updateTask(req, res) {
  const { id } = req.params;

  const updatedTask = {
    ...req.body,
    updatedAt: dateFormatter.format(new Date()),
  };

  const response = database.update('tasks', id, updatedTask);
  if (!response) {
    return res.writeHeader(404).end(JSON.stringify('Task not found'));
  }

  return res.end(JSON.stringify(response));
}

export function completeTask(req, res) {
  return res.end('path: ' + req.url + ' method: ' + req.method);
}

export function deleteTask(req, res) {
  return res.end('path: ' + req.url + ' method: ' + req.method);
}