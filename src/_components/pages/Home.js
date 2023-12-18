import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoListContext } from '../../context/appContext';
import Task from '../tasks/task';

const Home = () => {
  const { tasks } = useTodoListContext();

  return (
    <div className="content-wrapper">
      <div className="home-wrapper">
        <div>
          <h1>Homepage</h1>
        </div>
        <div className="home-progressbar-wrapper">
          <div className="ho">
            <p>Today's progress summary</p>
            <span>
              {tasks.length} {tasks.length <= 1 ? 'task' : 'tasks'}
            </span>
          </div>
          <div className="">
            <div className="home-progressbar-text">
              <p>Progress</p>
              <p>50%</p>
            </div>
            <div class="progress-bar">
              <div class="progress" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
        <div>
          <div className="home-tasks-title-wrapper">
            <h2>Today's Task</h2>
            <button className="home-tasks-button">See All</button>
          </div>
        </div>
        <ul className="tasks-list">
          {tasks.length === 0 ? (
            <p>You don't have any tasks to do!</p>
          ) : (
            tasks.map((task) => <Task key={task.id} {...task} />)
          )}
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

export default Home;
