import axios from 'axios';

const login = async (values) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/login',
      {
        data: {
          email: values.email,
          password: values.password,
        },
        success: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default login;
