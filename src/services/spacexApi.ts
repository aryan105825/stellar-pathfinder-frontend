import axios from 'axios';


export async function getUpcomingLaunches() {
  const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
  return response.data; 
}

const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;

// ✅ Get APOD photo
export async function getAPOD() {
  const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`);
  return res.data;  
}

export async function getAsteroids() {
  const today = new Date().toISOString().split('T')[0];
  const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${nasaApiKey}`);
  return res.data.near_earth_objects[today];
}
