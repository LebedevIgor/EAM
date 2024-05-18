import axios from 'axios';
import { getToken } from '../utils/token/token';

const token = getToken();

const deleteTaskCalendar = async (id, host_id, task_id) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/calendar/delete',
      {
        events: {
          id: id,
          host_id: host_id,
          task_id: task_id,
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

export default deleteTaskCalendar;
