import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa6';
import { useTodoListContext } from '../../context/appContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddTask = () => {
  const { setNewTaskValues, setTasks, tasks } = useTodoListContext();

  const today = new Date().toISOString().slice(0, 10);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    date: Yup.string().required('Required'),
    start: Yup.string().required('Required'),
    end: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      date: '',
      start: '',
      end: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      setTasks([
        ...tasks,
        { ...values, id: new Date().toISOString(), isDone: false },
      ]);

      resetForm();
    },
  });

  return (
    <div className="wrapper">
      <div className="tasks-wrapper">
        <div className="task-title-wrapper">
          <div className="task-title-position-wrapper">
            <button className="task-back">
              <Link to="/home">
                <FaAngleLeft />
              </Link>
            </button>
            <h2>Create New Task</h2>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="form-wrapper">
          <div className="input-wrapper">
            <p className="form-title">Task Name</p>
            <input
              value={formik.values.name}
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={`input fullwidth-input ${
                formik.errors.name && formik.touched.name ? 'input-error' : null
              }`}
              type="text"
            />
          </div>

          <div className="input-wrapper">
            <p
              className={`form-title ${
                formik.errors.category && formik.touched.category
                  ? 'error'
                  : null
              }`}
            >
              Category
            </p>
            <div className={`form-radio-wrapper`}>
              <div className="radio-wrapper">
                <input
                  value="design"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.category === 'design'}
                  type="radio"
                  id="design"
                  name="category"
                />
                <label htmlFor="design">Design</label>
              </div>

              <div className="radio-wrapper">
                <input
                  value="development"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.category === 'development'}
                  type="radio"
                  id="development"
                  name="category"
                />
                <label htmlFor="development">Development</label>
              </div>

              <div className="radio-wrapper">
                <input
                  value="research"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.category === 'research'}
                  type="radio"
                  id="research"
                  name="category"
                />
                <label htmlFor="research">Research</label>
              </div>
            </div>
          </div>

          <div className="input-wrapper">
            <p className="form-title">Date & Time</p>
            <input
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="date"
              className={`input fullwidth-input ${
                formik.errors.date && formik.touched.date ? 'input-error' : null
              }`}
              type="date"
              min={today}
            />
          </div>

          <div className="input-wrapper input-columns-wrapper">
            <div className="form-time-wrapper">
              <p className="form-title-2">Start time</p>
              <input
                value={formik.values.start}
                onChange={formik.handleChange}
                name="start"
                step="3600"
                className={`input fullwidth-input ${
                  formik.errors.start && formik.touched.start
                    ? 'input-error'
                    : null
                }`}
                type="time"
              />
            </div>
            <div className="form-time-wrapper">
              <p className="form-title-2">End time</p>
              <input
                value={formik.values.end}
                onChange={formik.handleChange}
                name="end"
                min={formik.values.start}
                className={`input fullwidth-input ${
                  formik.errors.end && formik.touched.end ? 'input-error' : null
                }`}
                type="time"
              />
            </div>
          </div>
          <div className="input-wrapper">
            <p className="form-title">Description</p>
            <textarea
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`input fullwidth-input ${
                formik.errors.description && formik.touched.description
                  ? 'input-error'
                  : null
              }`}
              name="description"
              id=""
              rows="2"
            ></textarea>
          </div>
          <button type="submit" className="addtask-button">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
