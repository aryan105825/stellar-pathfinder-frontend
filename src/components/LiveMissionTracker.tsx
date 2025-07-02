import { useEffect, useState } from 'react';
import { getISSPosition } from '../services/nasaApi';
import {
  Card, CardContent, Typography,
  Table, TableBody, TableCell, TableContainer, TableRow, Paper, Divider
} from '@mui/material';

export default function LiveMissionTracker() {
  const [iss, setIss] = useState<any>(null);
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    getISSPosition().then((data) => {
      console.log('ISS position:', data);
      setIss(data);

      const time = new Date((data.timestamp || Date.now()) * 1000);
      setTimestamp(time.toLocaleString());
    }).catch(console.error);
  }, []);

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">🛰️ Live Mission Tracker (ISS)</Typography>

        {iss ? (
          <>
            <TableContainer component={Paper} sx={{ mt: 1 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Latitude</TableCell>
                    <TableCell>{iss.satlatitude.toFixed(2)}°</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Longitude</TableCell>
                    <TableCell>{iss.satlongitude.toFixed(2)}°</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Altitude</TableCell>
                    <TableCell>{iss.sataltitude.toFixed(2)} km</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Speed</TableCell>
                    <TableCell>{iss.satvelocity ? `${iss.satvelocity.toFixed(2)} km/h` : 'N/A'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Timestamp</TableCell>
                    <TableCell>{timestamp}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Visibility</TableCell>
                    <TableCell>{iss.visibility || 'unknown'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              This data updates on page load using live satellite data.
            </Typography>
          </>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </CardContent>
    </Card>
  );
}
