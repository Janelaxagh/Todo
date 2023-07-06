import create from "zustand";
import { generateId } from '../helpers'

interface Tack {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Tack[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useTodoStore = create<ToDoStore>((set,get) => ({
  tasks: [
    // {
    //   id: generateId(),
    //   title: 'How it work?',
    //   createdAt: Date.now()
    // },
  ],
  createTask: (title) => {
    const { tasks } = get(); 
    const newTask = {
      id: generateId(),
      title,
      createdAt: Date.now()
    }   
    
    set({
      tasks: [newTask, ...tasks]// [newTask].concat(tasks)
    })
  },
  updateTask: (id: string, title: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      }))
    })
  },
  removeTask: (id: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.filter((task) => task.id !== id)
    })
  }
}))
