import axios from 'axios';

const baseURL = 'http://localhost:3000/api'; // Remplacez par l'URL de votre API

const api = axios.create({
  baseURL,
});

export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const sendData = async (data) => {
  try {
    const response = await api.post('/data', data);
    return response.data;
  } catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
};

// Définissez d'autres fonctions d'API selon vos besoins
