import React from 'react';

const Task = () => {
  return (
    <li>
      <div>
        <p>Task Name</p>
        <p>Task Category</p>
      </div>
      <div>
        <button>DONE</button>
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </li>
  );
};

export default Task;
