import React from 'react';
import { useTodoListContext } from '../../context/appContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditForm = ({ handleSubmit, editedTask, setEditedTask }) => {
  const { taskValues, setTaskValues, setTasks, tasks, setIsEdit } =
    useTodoListContext();

  console.log(editedTask);

  const formik = useFormik({
    initialValues: {
      title: editedTask.title,
      category: editedTask.category,
      priority: editedTask.priority,
      id: editedTask.id,
      isEdit: editedTask.isEdit,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(10, 'Not longer then 10 characters')
        .required('You need to add value'),
      priority: Yup.string().required('Selecting a priority is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      setTasks(
        tasks.map((task) => (task.id === editedTask.id ? { ...values } : task))
      );

      setIsEdit(false);

      resetForm();
    },
  });

  const DUMMY_CATEGORIES = ['Work', 'Home', 'Hobby'];
  const DUMMY_PRIORITY = ['High', 'Medium', 'Low'];

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-wrapper">
          <input
            value={formik.values.title}
            onChange={formik.handleChange}
            className={`input form-input ${
              formik.touched.title ? 'active' : ''
            }`}
            id="title"
            name="title"
            type="text"
            placeholder="task..."
            onBlur={formik.handleBlur}
          />

          {formik.touched.title && formik.errors.title && (
            <span className="error">{formik.errors.title}</span>
          )}
        </div>
        <div className="input-wrapper">
          <select
            value={formik.values.category}
            onChange={formik.handleChange}
            name="category"
            id="category"
            onBlur={formik.handleBlur}
            className="select form-select"
          >
            {DUMMY_CATEGORIES.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
          {formik.touched.category && formik.errors.category && (
            <span className="error">{formik.errors.category}</span>
          )}
        </div>
        <div className="input-wrapper">
          {DUMMY_PRIORITY.map((priority, index) => (
            <label key={index}>
              {priority}
              <input
                onBlur={formik.handleBlur}
                name="priority"
                id={priority}
                checked={priority === formik.values.priority}
                value={priority}
                onChange={formik.handleChange}
                type="radio"
                className={`input form-input ${
                  formik.touched.title ? 'active' : ''
                }`}
              />
            </label>
          ))}
          {formik.touched.priority && formik.errors.priority && (
            <span className="error">{formik.errors.priority}</span>
          )}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditForm;
