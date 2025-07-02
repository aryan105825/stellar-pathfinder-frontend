import { Typography, Button, Box, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Card
        sx={{
          maxWidth: 600,
          margin: '0 auto',
          p: 3,
          backdropFilter: 'blur(12px)',
          background: 'rgba(255, 255, 255, 0.12)',  
          border: '1px solid rgba(255, 255, 255, 0.25)',
          borderRadius: 4,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        <CardContent>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            🌌 Stellar Pathfinder
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
            Plan, visualize & experience your own space missions using real astronomical data.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/dashboard"
              sx={{ m: 1 }}
            >
              Start Planning
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/visualizer"
              sx={{ m: 1 }}
            >
              View 3D Solar System
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
