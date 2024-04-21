import axios from 'axios';
import { getToken } from '../utils/token/token';

const token = getToken();

const addUser = async (values) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/contacts/add',
      {
        data: {
          ids: values,
        },
        success: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default addUser;
