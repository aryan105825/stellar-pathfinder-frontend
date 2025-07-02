import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Slider,
  Button,
  Box
} from '@mui/material';

export default function LandingChallenge() {
  const [speed, setSpeed] = useState(200);        
  const [angle, setAngle] = useState(45);       
  const [result, setResult] = useState<string | null>(null);
  const [fuelUsed, setFuelUsed] = useState<number | null>(null);

  function attemptLanding() {
    const fuel = speed * 0.5 + Math.abs(45 - angle) * 2; 
    setFuelUsed(parseInt(fuel.toFixed(0)));

    if (speed < 250 && angle >= 30 && angle <= 60) {
      setResult('✅ Successful landing on Mars!');
    } else {
      setResult('💥 Crash landing! Too fast or wrong angle.');
    }
  }

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">🧪 Landing Challenge: Land on Mars with Minimum Fuel</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Descent Speed (km/h): {speed}</Typography>
          <Slider
            value={speed}
            onChange={(_, value) => setSpeed(value as number)}
            min={100}
            max={500}
            step={10}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Landing Angle (degrees): {angle}</Typography>
          <Slider
            value={angle}
            onChange={(_, value) => setAngle(value as number)}
            min={0}
            max={90}
            step={1}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={attemptLanding}
        >
          Attempt Landing
        </Button>
        {result && (
          <>
            <Typography sx={{ mt: 2 }}>{result}</Typography>
            <Typography>🛢 Fuel used: {fuelUsed} units</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
