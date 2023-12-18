import React from 'react';
import { Link } from 'react-router-dom';

const Starter = () => {
  return (
    <div className="content-wrapper">
      <div className="starter-content-wrapper">
        <h1>Welcome to Todo Task App</h1>
        <p>
          A workspace to over 10 Milion influencers around global of the world.
        </p>
        <button className="todo-button">
          <Link to="/home">Let's Start</Link>
        </button>
      </div>
    </div>
  );
};

export default Starter;
