import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function EducationalMode() {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">📚 Educational Mode</Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>🌌 What is an Orbit?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              An orbit is the curved path of a celestial object around a star, planet, or moon, governed by gravity and inertia.  
              Objects in space stay in orbit by balancing their forward velocity with the pull of gravity.  
              Different shapes (circular, elliptical) and altitudes (LEO, MEO, GEO) define mission types.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>🚀 What is a Hohmann Transfer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Hohmann transfer orbit is an efficient way to move a spacecraft between two circular orbits of different radii around the same central body.  
              It uses two engine burns: the first to enter an elliptical transfer orbit, and the second to circularize at the destination.
              It’s widely used for missions to Mars, Venus, and satellites moving between Earth orbits.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>📅 How to Calculate a Launch Window</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A launch window depends on the relative positions of Earth and the target planet.  
              For Mars, the ideal window opens about every 26 months (780 days) when Mars and Earth align properly.
              Using orbital mechanics, you can compute the synodic period to plan the next optimal departure date.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>🛰️ Satellite Tracking & Real Missions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Modern APIs like NASA, SpaceX, and N2YO let us track real-time positions of satellites and spacecraft.  
              This makes it possible to compare planned missions with actual missions and watch humanity’s exploration live from Earth.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>🌕 Apollo 11: First Moon Landing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Apollo 11 was launched on July 16, 1969, carrying astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins.
              On July 20, Armstrong and Aldrin landed the Lunar Module “Eagle” on the Moon, and Armstrong became the first human to step onto its surface.
              The mission returned safely to Earth on July 24, 1969.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
