import { useState, useEffect } from 'react';
import { getPlanetOrbitData } from '../services/nasaApi';
import { getUpcomingLaunches, getAPOD, getAsteroids } from '../services/spacexApi';
import {
  Button, Typography, Card, CardContent,
  List, ListItem, ListItemText, Divider, CardMedia
} from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineDot, TimelineConnector, TimelineContent
} from '@mui/lab';

export default function MissionDashboard() {
  const [result, setResult] = useState<{
    journeyTimeDays: number
    launchWindow: string
  } | null>(null);

  const [apod, setApod] = useState<any>(null);
  const [asteroids, setAsteroids] = useState<any[]>([]);
  const [launches, setLaunches] = useState<any[]>([]);

  async function calculateMission() {
    const data = await getPlanetOrbitData();
    const earth = data.find(p => p.name === 'Earth')!;
    const mars = data.find(p => p.name === 'Mars')!;

    const kmPerAU = 149597870.7;
    const earthDist = earth.semimajorAxis / kmPerAU;
    const marsDist = mars.semimajorAxis / kmPerAU;

    const transferOrbitA = (earthDist + marsDist) / 2;
    const mu = 1; 
    const journeyTimeYears = Math.PI * Math.sqrt(Math.pow(transferOrbitA, 3) / (8 * mu));
    const journeyTimeDays = journeyTimeYears * 365;

    const launchWindow = new Date(
      Date.now() + 780 * 24 * 3600 * 1000
    ).toDateString();

    setResult({ journeyTimeDays, launchWindow });
  }

  useEffect(() => {
    getUpcomingLaunches().then(setLaunches).catch(console.error);
    getAPOD().then(setApod).catch(console.error);
    getAsteroids().then(setAsteroids).catch(console.error);
  }, []);

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant='h6'>🚀 Mission Planning Dashboard</Typography>
        <Button variant='contained' sx={{ mt: 1 }} onClick={calculateMission}>
          Calculate Mission to Mars
        </Button>

        {result && (
          <>
            <Typography sx={{ mt: 2 }}>
              🕒 Estimated Journey Time: {result.journeyTimeDays.toFixed(0)} days
            </Typography>
            <Typography>
              📅 Next Launch Window: {result.launchWindow}
            </Typography>

            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Launch</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='secondary' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Mid-course correction</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='success' />
                </TimelineSeparator>
                <TimelineContent>Arrival at Mars</TimelineContent>
              </TimelineItem>
            </Timeline>

           

          
          </>
        )}
         <Typography variant='h6' sx={{ mt: 3 }}>
              🛰️ Upcoming Real SpaceX Missions
            </Typography>
            <List dense>
              {launches.slice(0, 5).map(launch => (
                <div key={launch.id}>
                  <ListItem>
                    <ListItemText
                      primary={launch.name}
                      secondary={`Launch date: ${new Date(launch.date_utc).toLocaleString()}`}
                    />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          {apod && (
              <Card sx={{ mt: 3 }}>
                <CardContent>
                  <Typography variant="h6">🌌 Astronomy Picture of the Day</Typography>
                  <CardMedia
                    component="img"
                    image={apod.url}
                    alt={apod.title}
                    sx={{ mt: 1, borderRadius: 2, maxHeight: 250 }}
                  />
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {apod.title}
                  </Typography>
                  <Typography variant="body2">
                    {apod.explanation.slice(0, 150)}...
                  </Typography>
                </CardContent>
              </Card>
            )}

            {asteroids.length > 0 && (
              <Card sx={{ mt: 3 }}>
                <CardContent>
                  <Typography variant="h6">☄️ Near-Earth Asteroids Today</Typography>
                  <List dense>
                    {asteroids.slice(0, 5).map((a: any) => (
                      <ListItem key={a.id}>
                        <ListItemText
                          primary={a.name}
                          secondary={`Diameter: ${a.estimated_diameter.meters.estimated_diameter_max.toFixed(1)} m | Miss distance: ${parseFloat(a.close_approach_data[0].miss_distance.kilometers).toFixed(0)} km`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            )}
      </CardContent>
    </Card>
  );
}
