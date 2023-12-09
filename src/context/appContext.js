import { useContext, createContext, useState } from 'react';

const AppContext = createContext();

export const useTodoListContext = () => {
  return useContext(AppContext);
};

export const TodoListContextProvider = ({ children }) => {
  const [taskValues, setTaskValues] = useState({
    title: '',
    category: 'Work',
    priority: '',
  });

  const value = {
    taskValues,
    setTaskValues,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
