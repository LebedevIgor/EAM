import axios from 'axios';

import { getToken } from '../utils/token/token';

const token = getToken();

const addTaskCalendar = async (name, id, task_id) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/calendar/add',
      {
        data: {
          name: name,
          id: task_id,
          task_id: id,
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
    return response.data.events;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default addTaskCalendar;
