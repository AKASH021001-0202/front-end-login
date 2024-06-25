import axios from 'axios';


const studentUrl =` ${import.meta.env.VITE_BACKEND_URL}/students`;

const getStudent = async () => {
  try {
    const response = await axios.get(studentUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error;
  }
};

export { getStudent };
