import React from 'react';
import { useTodoListContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

const TaskDeleteConfirm = ({ taskId }) => {
  const navigate = useNavigate();

  const { handleDeleteTask, setIsOpenModal } = useTodoListContext();

  const handleDelete = (taskId) => {
    handleDeleteTask(taskId);
    setIsOpenModal(false);
    navigate('/home');
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-inner">
        <p>Are you sure?</p>
        <div className="modal-buttons-wrapper">
          <button
            onClick={() => handleDelete(taskId)}
            className="btn btn-success"
          >
            Yes
          </button>
          <button
            onClick={() => setIsOpenModal(false)}
            className="btn btn-warning"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDeleteConfirm;
