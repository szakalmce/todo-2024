import './styles/root.css';
import './styles/app.css';
import './styles/custom.css';
import Title from './ui/Title';
import Form from './_components/form/form';

const App = () => {
  return (
    <div className="wrapper ">
      <Title>TODO LIST</Title>
      <div className="todo-wrapper">
        <Form />
      </div>
    </div>
  );
};

export default App;
