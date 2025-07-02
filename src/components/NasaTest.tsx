import { useEffect, useState } from 'react';
import { getAPOD } from '../services/nasaApi';
import { Card, CardContent, Typography } from '@mui/material';

export default function NasaTest() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getAPOD().then(setData).catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <Card sx={{ mt: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h6">{data.title}</Typography>
        <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
        <Typography variant="body2" mt={1}>{data.explanation}</Typography>
      </CardContent>
    </Card>
  );
}
