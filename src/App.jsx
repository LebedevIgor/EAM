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
import Layout from './components/Layout/Layout';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';

import { getToken } from './utils/token/token';
import Profile from './Pages/ProfilePage/ProfilePage';
import TasksPage from './Pages/TasksPage/TasksPage';
import getDataTask from './services/getDataTask.service';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import getUser from './services/getUser.service';
import getNewUser from './services/getNewUser.service';
import getInvitesUser from './services/getInvitesUser.service';

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [task, setTask] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [invitesUsers, setInvitesUsers] = useState([]);
  const [modalUserInfo, setModalUserInfo] = useState(false);
  const [modalInvite, setModalInvite] = useState(false);

  const [modalContacts, setModalContacts] = useState(false);

  const [target, setTarget] = useState(null);
  const [modal, setModal] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [posts, setPosts] = useState([]);
  const [now, setNow] = useState(new Date().getFullYear());
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

  // const setValues = async () => {
  //   try {
  //     const dataTasks = await getDataTask();
  //     setTask(dataTasks.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  useEffect(() => {
    const setValues = async () => {
      try {
        const dataTasks = await getDataTask();
        setTask(dataTasks.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setValues();
  }, [modal]);

  useEffect(() => {
    const setValues = async () => {
      try {
        const invitesUsers = await getInvitesUser();
        setInvitesUsers(invitesUsers.users);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setValues();
  }, [modalInvite]);

  useEffect(() => {
    const setValues = async () => {
      try {
        const dataUser = await getUser();
        setContacts(dataUser.user);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setValues();
  }, [modalContacts, modalUserInfo, modalInvite]);

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

  useEffect(() => {
    const setValues = async () => {
      try {
        const dataUser = await getNewUser();
        setUsers(dataUser.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setValues();
  }, [modalContacts]);

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
                  contacts={contacts}
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
            <Route
              path="contacts"
              element={
                <ContactsPage
                  contacts={contacts}
                  setContacts={setContacts}
                  users={users}
                  modal={modalContacts}
                  setModal={setModalContacts}
                  modalUserInfo={modalUserInfo}
                  setModalUserInfo={setModalUserInfo}
                  modalInvite={modalInvite}
                  setModalInvite={setModalInvite}
                  invitesUsers={invitesUsers}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
