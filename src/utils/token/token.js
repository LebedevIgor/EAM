export const getToken = () => {
  return localStorage.getItem('token');
};

export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const getLogin = () => {
  return localStorage.getItem('login');
};

export const saveLogin = (login) => {
  localStorage.setItem('login', login);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};
