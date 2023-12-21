import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTodoListContext } from '../../context/appContext';
import TaskDeleteConfirm from '../modals/task-delete-cofirm';

const TaskDetails = () => {
  const { setIsOpenModal, isOpenModal, setEditedTaskValues } =
    useTodoListContext();
  const location = useLocation();
  const navigate = useNavigate();

  const { task } = location.state;

  const handleEdit = (id) => {
    setEditedTaskValues(task);
    console.log(id);
    navigate(`/${task.name}/edit`);
  };

  return (
    <>
      <div className="wrapper">
        <div className="tasks-wrapper">
          <div>
            <h2>{task.name}</h2>
          </div>
          <div>
            <p>
              Category: <span>{task.category}</span>
            </p>
          </div>
          <div>
            <p>
              Date: <span>{task.date}</span>
            </p>
          </div>
          <div>
            <p>
              Start: <span>{task.start}</span>
            </p>
            <p>
              End: <span>{task.end}</span>
            </p>
          </div>
          <div>
            <p>Description</p>
            <p>{task.description}</p>
          </div>
          <div>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
            <button onClick={() => setIsOpenModal(true)}>Delete</button>
          </div>
        </div>
      </div>
      {isOpenModal ? <TaskDeleteConfirm taskId={task.id} /> : null}
    </>
  );
};

export default TaskDetails;
