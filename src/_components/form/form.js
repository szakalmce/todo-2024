import React from 'react';
import { useTodoListContext } from '../../context/appContext';

const Form = () => {
  const { taskValues, setTaskValues } = useTodoListContext();

  const DUMMY_CATEGORIES = ['Work', 'Home', 'Hobby'];
  const DUMMY_PRIORITY = ['High', 'Medium', 'Low'];

  const formSubmit = (e) => {
    e.preventDefault();

    console.log(taskValues);

    setTaskValues({
      title: '',
      category: 'Work',
      priority: '',
    });
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          value={taskValues.title}
          onChange={(e) =>
            setTaskValues({
              ...taskValues,
              title: e.target.value,
            })
          }
          type="text"
          placeholder="task..."
        />
        <select
          value={taskValues.category}
          onChange={(e) =>
            setTaskValues({
              ...taskValues,
              category: e.target.value,
            })
          }
        >
          {DUMMY_CATEGORIES.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
        <div>
          {DUMMY_PRIORITY.map((priority, index) => (
            <label key={index}>
              {priority}
              <input
                checked={priority === taskValues.priority}
                value={priority}
                onChange={(e) =>
                  setTaskValues({
                    ...taskValues,
                    priority: e.target.value,
                  })
                }
                name="priority"
                type="radio"
              />
            </label>
          ))}
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
