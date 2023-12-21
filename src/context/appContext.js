import { useContext, createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AppContext = createContext();

export const useTodoListContext = () => {
  return useContext(AppContext);
};

export const TodoListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [editedTaskValues, setEditedTaskValues] = useState();
  const [newTaskValues, setNewTaskValues] = useState({
    name: '',
    category: '',
    date: '',
    start: '',
    end: '',
    description: '',
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const value = {
    tasks,
    setTasks,
    newTaskValues,
    setNewTaskValues,
    isOpenModal,
    setIsOpenModal,
    handleDeleteTask,
    setEditedTaskValues,
    editedTaskValues,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
