import axios from 'axios';
import { getToken } from '../utils/token/token';

const token = getToken();

const getDataTask = async (values) => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/tasks', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default getDataTask;
