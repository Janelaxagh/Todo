import create, { State, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { generateId } from '../helpers';

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore extends State {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

function isToDoStore(object: State): object is ToDoStore {
  return "tasks" in object;
}

const localStorageUpdate = <T extends State>(config: StateCreator<T>): StateCreator<T> => (set, get, api) =>
  config((nextState, ...args) => {
    if (isToDoStore(nextState)) {
      window.localStorage.setItem("tasks", JSON.stringify(nextState.tasks));
    }
    set(nextState, ...args);
  }, get, api);

export const useTodoStore = create<ToDoStore>(devtools(localStorageUpdate((set, get) => ({
  tasks: [],
  createTask: (title: string) => {
    const { tasks } = get();
    const newTask: Task = {
      id: generateId(),
      title,
      createdAt: Date.now()
    };
    set({ tasks: [newTask, ...tasks] });
  },
  updateTask: (id: string, title: string) => {
    const { tasks } = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title
      }))
    });
  },
  removeTask: (id: string) => {
    const { tasks } = get();
    set({ tasks: tasks.filter((task) => task.id !== id) });
  }
}))));
