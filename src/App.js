import './styles/root.css';
import './styles/app.css';
import './styles/custom.css';
import Title from './ui/Title';
import Form from './_components/form/form';
import TasksList from './_components/tasks/tasks-list';

const App = () => {
  return (
    <div className="wrapper ">
      <Title>TODO LIST</Title>
      <div className="todo-wrapper">
        <Form />
        <TasksList />
      </div>
    </div>
  );
};

export default App;
