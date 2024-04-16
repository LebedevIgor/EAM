import axios from 'axios';
import { getToken } from '../utils/token/token';

const token = getToken();

const deleteDataTask = async (values) => {
  console.log(values);
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/tasks/delete',
      {
        data: {
          id: values,
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

export default deleteDataTask;
