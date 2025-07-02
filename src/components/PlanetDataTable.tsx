import { useEffect, useState } from 'react';
import { getPlanetPositions } from '../services/nasaApi';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from '@mui/material';

const extraPlanetData: Record<string, { distanceAU: number; orbitalPeriod: number; diameter: number }> = {
  Mercury: { distanceAU: 0.39, orbitalPeriod: 88, diameter: 4879 },
  Venus:   { distanceAU: 0.72, orbitalPeriod: 225, diameter: 12104 },
  Earth:   { distanceAU: 1.00, orbitalPeriod: 365, diameter: 12742 },
  Mars:    { distanceAU: 1.52, orbitalPeriod: 687, diameter: 6779 },
  Jupiter: { distanceAU: 5.20, orbitalPeriod: 4333, diameter: 139820 },
  Saturn:  { distanceAU: 9.58, orbitalPeriod: 10759, diameter: 116460 },
  Uranus:  { distanceAU: 19.2, orbitalPeriod: 30687, diameter: 50724 },
    Neptune: { distanceAU: 30.1, orbitalPeriod: 60190, diameter: 49244 }
};


export default function PlanetDataTable() {
  const [planets, setPlanets] = useState<{ name: string; x: number; z: number }[]>([]);

  useEffect(() => {
    getPlanetPositions().then((data) => {
      console.log('Planet positions:', data);
      setPlanets(data);
    }).catch(console.error);
  }, []);

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ p: 2 }}>🌍 Live Planet Data & Positions</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">X</TableCell>
            <TableCell align="right">Z</TableCell>
            <TableCell align="right">Distance (AU)</TableCell>
            <TableCell align="right">Orbital Period (days)</TableCell>
            <TableCell align="right">Diameter (km)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {planets.map((planet) => {
            const extra = extraPlanetData[planet.name];
            return (
              <TableRow key={planet.name}>
                <TableCell>{planet.name}</TableCell>
                <TableCell align="right">{planet.x.toFixed(2)}</TableCell>
                <TableCell align="right">{planet.z.toFixed(2)}</TableCell>
                <TableCell align="right">{extra?.distanceAU ?? '-'}</TableCell>
                <TableCell align="right">{extra?.orbitalPeriod ?? '-'}</TableCell>
                <TableCell align="right">{extra?.diameter ?? '-'}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
