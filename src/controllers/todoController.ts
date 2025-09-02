import type { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors/NotFoundError.js';
import { BadRequestError } from '../errors/BadRequestError.js';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: ToDo[] = [];
let nextId = 1;

export function createTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, completed = false } = req.body;
    if (!title) throw new BadRequestError('Title is required');
    const todo: ToDo = { id: nextId++, title, completed };
    todos.push(todo);
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
}

export function getTodos(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

export function getTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const todo = todos.find(t => t.id === Number(req.params.id));
    if (!todo) throw new NotFoundError();
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export function updateTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const todo = todos.find(t => t.id === Number(req.params.id));
    if (!todo) throw new NotFoundError();
    todo.title = req.body.title ?? todo.title;
    todo.completed = req.body.completed ?? todo.completed;
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export function deleteTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const idx = todos.findIndex(t => t.id === Number(req.params.id));
    if (idx === -1) throw new NotFoundError();
    const deleted = todos[idx];
    todos.splice(idx, 1);
    res.status(200).json(deleted);
  } catch (err) {
    next(err);
  }
}
