import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoListContext } from '../../context/appContext';
import Task from '../tasks/task';

const Home = () => {
  const { tasks } = useTodoListContext();

  const progressBarWidth = tasks.length;

  const today = new Date().toISOString().slice(0, 10);

  const todayTasks = tasks.filter((task) => task.date === today);

  console.log(todayTasks);

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
              {todayTasks.length} {todayTasks.length <= 1 ? 'task' : 'tasks'}
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
            <button className="home-tasks-button">
              <Link to="/all">See All</Link>
            </button>
          </div>
        </div>
        <ul className="tasks-list">
          {todayTasks.length === 0 ? (
            <p>You don't have any tasks to do!</p>
          ) : (
            todayTasks
              .map((task) => <Task key={task.id} {...task} task={task} />)
              .slice(0, 3)
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
