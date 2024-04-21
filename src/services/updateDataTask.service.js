import axios from 'axios';
import { getToken } from '../utils/token/token';

const token = getToken();

const updateDataTask = async (values) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/tasks/update',
      {
        data: {
          id: values.id,
          begin_date: values.begin_date,
          complete_perc: values.complete_perc,
          condition: values.condition,
          date_remind: values.date_remind,
          description: values.description,
          end_date: values.end_date,
          is_private: values.is_private,
          priority: values.priority,
          remind: values.remind,
          task_name: values.task_name,
          task_particip: values.task_particip,
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

export default updateDataTask;
