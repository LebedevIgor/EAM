import axios from 'axios';
import { getToken } from '../utils/token/token';

const token = getToken();

const eventsAdd = async (values) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/events/add',
      {
        data: {
          description: values.description,
          date: values.date,
          event_name: values.event_name,
          event_particip: values.task_particip,
          time: values.time,
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

export default eventsAdd;
