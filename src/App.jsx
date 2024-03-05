import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import './style/main.scss';
import MainPage from './Pages/MainPage/MainPage';
import Layout from './component/Layout/Layout';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';

import { getToken } from './utils/token/token';

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [target, setTarget] = useState(null);
  const [modal, setModal] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [posts, setPosts] = useState([]);

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
          <Route path="/" element={<Layout />}>
            <Route
              index
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
                />
              }
            />
            <Route path="chat" element={<></>} />
            <Route path="about" element={<></>} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
