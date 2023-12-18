import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoListContextProvider } from './context/appContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoListContextProvider>
        <App />
      </TodoListContextProvider>
    </Router>
  </React.StrictMode>
);
