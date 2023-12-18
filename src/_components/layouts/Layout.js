import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <div className="todolist-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
