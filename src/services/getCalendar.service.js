import axios from 'axios';

import { getToken } from '../utils/token/token';

const token = getToken();

const getCalendar = async (month, now) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/calendar',
      {
        data: {
          month: `${month < 9 ? `0${month + 1}` : month + 1}`,
          year: `${now}`,
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
    return response.data.cell_data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default getCalendar;
