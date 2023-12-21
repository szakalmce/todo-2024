import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoListContext } from '../../context/appContext';
import Task from '../tasks/task';
import { FaAngleLeft } from 'react-icons/fa6';

const AllTasks = () => {
  const { tasks } = useTodoListContext();

  const sortedTasks = tasks.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (b.date > a.date) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className="content-wrapper">
      <div style={{ paddingBottom: '1rem' }}>
        <div className="task-title-wrapper">
          <div className="task-title-position-wrapper">
            <button className="task-back">
              <Link to="/home">
                <FaAngleLeft />
              </Link>
            </button>
            <h2>All Tasks</h2>
          </div>
        </div>
      </div>

      <div className="all-tasks-wrapper">
        <ul className="tasks-list">
          {sortedTasks.map((task) => (
            <Task type="all" key={task.id} {...task} task={task} />
          ))}
        </ul>
      </div>
      <div className="home-button-wrapper">
        <button className="home-button">
          <Link to="/add-task">+</Link>
        </button>
      </div>
    </div>
  );
};

export default AllTasks;
