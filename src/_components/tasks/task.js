import React from 'react';
import { FcSelfServiceKiosk, FcSettings, FcMindMap } from 'react-icons/fc';

const Task = ({ name, category, date, start, end, description, id }) => {
  const iconHelper = () => {
    if (category === 'development') {
      return <FcSettings />;
    } else if (category === 'research') {
      return <FcMindMap />;
    } else {
      return <FcSelfServiceKiosk />;
    }
  };

  return (
    <li className="task-wrapper">
      <div className="task-icon-wrapper">{iconHelper()}</div>
      <div className="task-content-wrapper">
        <p>{name}</p>
        <span>
          {start} - {end}
        </span>
      </div>
      <div className="task-actions-wrapper">
        <button>SEE</button>
      </div>
    </li>
  );
};

export default Task;
