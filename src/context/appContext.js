import { useContext, createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AppContext = createContext();

export const useTodoListContext = () => {
  return useContext(AppContext);
};

export const TodoListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskValues, setNewTaskValues] = useState({
    name: '',
    category: '',
    date: '',
    start: '',
    end: '',
    description: '',
  });

  const value = {
    tasks,
    setTasks,
    newTaskValues,
    setNewTaskValues,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
