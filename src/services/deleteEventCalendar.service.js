import axios from 'axios';
import { getToken } from '../utils/token/token';

const token = getToken();

const deleteEventCalendar = async (event_id, host_id) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/events/delete',
      {
        data: {
          event_id: event_id,
          host_id: host_id,
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

export default deleteEventCalendar;
