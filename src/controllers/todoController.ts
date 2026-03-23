import { Request, Response } from 'express';
import { Todo, todos } from '../models/todoModel';

let currentId = 1; // ตัวแปรสำหรับสร้าง ID รันไปเรื่อยๆ

// ดึงรายการทั้งหมด
export const getTodos = (req: Request, res: Response) => {
  res.status(200).json(todos);
};

// เพิ่มรายการใหม่
export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTodo: Todo = {
    id: currentId++,
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// อัปเดตสถานะการทำงาน
export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todoIndex = todos.findIndex(t => t.id === parseInt(id as string, 10));

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  // อัปเดตข้อมูล
  todos[todoIndex] = {
    ...todos[todoIndex],
    title: title !== undefined ? title : todos[todoIndex].title,
    completed: completed !== undefined ? completed : todos[todoIndex].completed,
  };

  res.status(200).json(todos[todoIndex]);
};

// ลบรายการ
export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(t => t.id === parseInt(id as string, 10));

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos.splice(todoIndex, 1);
  res.status(200).json({ message: 'Todo deleted successfully' });
};

export const getTodoById = (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = todos.find(t => t.id === parseInt(id as string, 10));
  
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  res.status(200).json(todo);
};

