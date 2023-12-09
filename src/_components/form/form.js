import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="task..." />
        <select>
          <option value="">Work</option>
          <option value="">Home</option>
          <option value="">Hobby</option>
        </select>
        <div>
          <label>
            High
            <input name="prority" type="radio" />
          </label>
          <label>
            Medium
            <input name="prority" type="radio" />
          </label>
          <label>
            Low
            <input name="prority" type="radio" />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
