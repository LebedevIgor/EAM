import axios from 'axios';

const register = async (values) => {
  try {
    const response = await axios.post(
      'https://bold-ripple-kilogram.glitch.me/register',
      {
        data: {
          username: values.username,
          surname: values.surname,
          name: values.name,
          patronymic: values.patronymic,
          about: values.about,
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

export default register;
