Конечно, вот пример README.md для вашего проекта ToDo с использованием React, Vite и Zustand:

```markdown
# ToDo приложение на React с использованием Zustand и Vite

Это простое приложение для создания списка задач (ToDo) на React с использованием библиотеки Zustand для управления состоянием.

## Описание

Приложение разработано с использованием следующих технологий:
- **React:** Используется для построения пользовательского интерфейса и компонентов.
- **Zustand:** Библиотека управления состоянием, предоставляющая простой способ работы со сложным состоянием.
- **Vite:** Сборщик, обеспечивающий быструю разработку и сборку проекта.

## Установка

1. **Клонирование репозитория:**
   ```bash
   git clone https://github.com/your_username/todo.git
   cd todo
   ```

2. **Установка зависимостей:**
   ```bash
   npm install # или yarn install
   ```

3. **Запуск проекта в режиме разработки:**
   ```bash
   npm run dev # или yarn dev
   ```

4. **Сборка проекта:**
   ```bash
   npm run build # или yarn build
   ```

5. **Предпросмотр собранного проекта:**
   ```bash
   npm run preview # или yarn preview
   ```


## Как использовать `useTodoStore`

`useTodoStore` - это кастомный хук Zustand, который предоставляет доступ к состоянию и методам управления задачами ToDo.

### Методы:
- **`createTask(title: string)`:** Создает новую задачу.
- **`updateTask(id: string, title: string)`:** Обновляет существующую задачу.
- **`removeTask(id: string)`:** Удаляет задачу по идентификатору.

Пример использования:
```javascript
import { useTodoStore } from './path/to/useTodoStore';

const Component = () => {
  const createTask = useTodoStore((state) => state.createTask);
  // Другие методы

  // Использование метода createTask
  createTask('Новая задача');
};
```
