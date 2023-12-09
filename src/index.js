import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoListContextProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoListContextProvider>
      <App />
    </TodoListContextProvider>
  </React.StrictMode>
);
