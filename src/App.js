import './styles/root.css';
import './styles/app.css';
import './styles/custom.css';
import Title from './ui/Title';
import Form from './_components/form/form';
import TasksList from './_components/tasks/tasks-list';
import { useTodoListContext } from './context/appContext';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './_components/layouts/Layout';
import Starter from './_components/pages/Starter';
import Home from './_components/pages/Home';
import AddTask from './_components/pages/AddTask';

const App = () => {
  const { tasks } = useTodoListContext();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </Layout>
  );
};

export default App;
