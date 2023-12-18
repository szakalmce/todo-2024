import React from 'react';
import { useTodoListContext } from '../../context/appContext';
import Task from './task';

const TasksList = () => {
  const { tasks } = useTodoListContext();

  const test = tasks.filter((task) =>
    task.isDone ? <Task key={task.id} {...task} task={task} /> : null
  );

  const ifDone = tasks.filter((task) => task.isDone);

  return (
    <div>
      <h1>In progress</h1>
      <ul>
        {tasks.map((task) =>
          !task.isDone ? <Task key={task.id} {...task} task={task} /> : null
        )}
      </ul>

      {ifDone.length !== 0 && (
        <>
          <h1>is Done</h1>
          {tasks.map((task) =>
            task.isDone ? <Task key={task.id} {...task} task={task} /> : null
          )}
        </>
      )}
    </div>
  );
};

export default TasksList;
