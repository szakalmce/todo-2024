import React from 'react';
import { FcSelfServiceKiosk, FcSettings, FcMindMap } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useTodoListContext } from '../../context/appContext';
import TaskDeleteConfirm from '../modals/task-delete-cofirm';

const Task = ({
  name,
  category,
  date,
  start,
  end,
  description,
  id,
  task,
  type,
}) => {
  const navigate = useNavigate();

  const { tasks } = useTodoListContext();

  const iconHelper = () => {
    if (category === 'development') {
      return <FcSettings />;
    } else if (category === 'research') {
      return <FcMindMap />;
    } else {
      return <FcSelfServiceKiosk />;
    }
  };

  const handleClick = () => {
    navigate(`/${name}`, { state: { task } });
  };

  return (
    <>
      <li className="task-wrapper">
        <div className="task-icon-wrapper">{iconHelper()}</div>
        <div className="task-content-wrapper">
          <p>{name}</p>
          {type === 'all' ? (
            <span>{date}</span>
          ) : (
            <span>{description.slice(0, 20)}...</span>
          )}
        </div>
        <div className="task-actions-wrapper">
          <button onClick={handleClick}>See</button>
        </div>
      </li>
    </>
  );
};

export default Task;
