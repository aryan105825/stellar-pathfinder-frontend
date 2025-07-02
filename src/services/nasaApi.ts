import axios from 'axios'

const nasaApiKey = import.meta.env.VITE_NASA_API_KEY
const NASA_API_BASE_URL = 'https://api.nasa.gov'

export async function getAPOD () {
  const response = await axios.get(`${NASA_API_BASE_URL}/planetary/apod`, {
    params: { api_key: nasaApiKey }
  })
  return response.data
}
// getPlanetPositions in nasaApi.ts
export async function getPlanetPositions() {
  return [
    { name: 'Mercury', x: 3, z: 0 },
    { name: 'Venus', x: 5, z: 1 },
    { name: 'Earth', x: 7, z: -2 },
    { name: 'Mars', x: 9, z: 2 },
    { name: 'Jupiter', x: 12, z: -3 },
    { name: 'Saturn', x: 15, z: 4 },
    { name: 'Uranus', x: 18, z: -5 },
      { name: 'Neptune', x: 21, z: 6 }
  ];
}


export async function getPlanetOrbitData () {
  const [earthRes, marsRes] = await Promise.all([
    axios.get('https://api.le-systeme-solaire.net/rest/bodies/earth'),
    axios.get('https://api.le-systeme-solaire.net/rest/bodies/mars')
  ])

  return [
    {
      name: 'Earth',
      semimajorAxis: earthRes.data.semimajorAxis, // in km
      orbitalPeriod: earthRes.data.sideralOrbit // in days
    },
    {
      name: 'Mars',
      semimajorAxis: marsRes.data.semimajorAxis,
      orbitalPeriod: marsRes.data.sideralOrbit
    }
  ]
}

export async function getISSPosition() {
  const response = await axios.get('https://stellar-backend-3jrq.onrender.com/api/iss');
  return response.data;
}

