import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';

import './style/main.scss';
import MainPage from './Pages/MainPage/MainPage';
import Layout from './component/Layout/Layout';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';

import { getToken } from './utils/token/token';
import Profile from './Pages/ProfilePage/ProfilePage';
import TasksPage from './Pages/TasksPage/TasksPage';

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [task, setTask] = useState([
    {
      taskName: 'Задача 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu lectus vestibulum, interdum risus vel, molestie mauris. Etiam fringilla eros nisl, sit amet auctor mauris fermentum in. Mauris interdum consectetur tempus. In hac habitasse platea dictumst. Pellentesque risus neque, malesuada id dui vitae, faucibus finibus felis. Nunc et dapibus nisl. Pellentesque ut tempus risus. Pellentesque non tincidunt nisi, vel molestie velit. ',
    },
    {
      taskName: 'Задача 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu lectus vestibulum, interdum risus vel, molestie mauris. Etiam fringilla eros nisl, sit amet auctor mauris fermentum in. Mauris interdum consectetur tempus. In hac habitasse platea dictumst. Pellentesque risus neque, malesuada id dui vitae, faucibus finibus felis. Nunc et dapibus nisl. Pellentesque ut tempus risus. Pellentesque non tincidunt nisi, vel molestie velit.',
    },
  ]);
  const [target, setTarget] = useState(null);
  const [modal, setModal] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [posts, setPosts] = useState([]);
  const [now, setNow] = useState(new Date().getFullYear());
  console.log(`${month}${now}`);

  console.log(`${month}${new Date().getFullYear()}`);
  const compareTarget = (e) => {
    setTarget(e);
    posts.map((i) => {
      if (i.id === e) {
        return setModal(true);
      } else {
        return null;
      }
    });
  };

  // ---------------------------------------------------------------------------

  const token = getToken();
  const location = useLocation().pathname;
  useEffect(() => {
    if (
      !token &&
      location !== '/authorization/login' &&
      location !== '/authorization/register' &&
      location !== '/authorization'
    ) {
      navigate('/authorization/register');
    }
  }, [token, navigate]);

  return (
    <div className="app">
      <Routes>
        <Route path="/authorization/*">
          <Route index element={<AuthorizationPage />} />
          <Route path="login" element={<AuthorizationPage />} />
          <Route path="register" element={<AuthorizationPage />} />
        </Route>
        {token && (
          <Route
            path="/"
            element={<Layout posts={posts} compareTarget={compareTarget} />}
          >
            <Route
              index
              element={
                <TasksPage
                  modal={modal}
                  setModal={setModal}
                  task={task}
                  setTask={setTask}
                />
              }
            />
            <Route path=":profile" element={<Profile />} />
            <Route
              path="calendar"
              element={
                <MainPage
                  posts={posts}
                  setPosts={setPosts}
                  month={month}
                  setMonth={setMonth}
                  data={data}
                  compareTarget={compareTarget}
                  modal={modal}
                  setModal={setModal}
                  target={target}
                  now={now}
                  setNow={setNow}
                />
              }
            />
            <Route path="chat" element={<></>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
