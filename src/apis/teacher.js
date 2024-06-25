import axios from 'axios';

const teacherUrl = `${import.meta.env.VITE_BACKEND_URL}/mentors`;

const getTeacher = async () => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(teacherUrl, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching teacher data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export { getTeacher };
