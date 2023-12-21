import './styles/root.css';
import './styles/app.css';
import './styles/custom.css';

import { useTodoListContext } from './context/appContext';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './_components/layouts/Layout';
import Starter from './_components/pages/Starter';
import Home from './_components/pages/Home';
import AddTask from './_components/pages/AddTask';
import TaskDetails from './_components/tasks/task-details';
import EditForm from './_components/pages/EditTask';
import EditTask from './_components/pages/EditTask';
import AllTasks from './_components/pages/AllTasks';

const App = () => {
  const { tasks, isOpenModal } = useTodoListContext();

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Starter />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/:name" element={<TaskDetails />} />
          <Route path="/:name/edit" element={<EditTask />} />
          <Route path="/all" element={<AllTasks />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
