import {
  Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HistoricalMission() {
  const missions = [
    {
      name: 'Apollo 11',
      year: 1969,
      events: [
        'Launch from Kennedy Space Center',
        'Entered lunar orbit',
        'First human landing on Moon',
        'Return to Earth splashdown'
      ]
    },
    {
      name: 'Voyager 1',
      year: 1977,
      events: [
        'Launch from Cape Canaveral',
        'Jupiter flyby',
        'Saturn flyby',
        'Entering interstellar space'
      ]
    },
    {
      name: 'Mars Pathfinder',
      year: 1996,
      events: [
        'Launch from Cape Canaveral',
        'Landing on Mars surface',
        'Deployment of Sojourner rover',
        'First successful rover exploration on Mars'
      ]
    },
    {
      name: 'Hubble Space Telescope',
      year: 1990,
      events: [
        'Launch aboard Space Shuttle Discovery',
        'Deployed in low Earth orbit',
        'Servicing missions improved optics',
        'Revolutionary space imagery delivered'
      ]
    },
    {
      name: 'International Space Station',
      year: 1998,
      events: [
        'First module launched: Zarya',
        'Continuous human presence since 2000',
        'International collaboration',
        'Ongoing scientific research in microgravity'
      ]
    }
  ];

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">📜 Historical Mission Recreations</Typography>
        {missions.map((mission) => (
          <Accordion key={mission.name}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{mission.name} ({mission.year})</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {mission.events.map((event, idx) => (
                <Typography key={idx}>• {event}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}
