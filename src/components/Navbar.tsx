import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={3} sx={{
      backdropFilter: 'blur(10px)',
      background: 'rgba(0, 0, 0, 0.4)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🌌 Stellar Pathfinder
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/visualizer">Visualizer</Button>
          <Button color="inherit" component={Link} to="/planetdata">Planet Data</Button>
          <Button color="inherit" component={Link} to="/livetracker">Live Tracker</Button>

          <Button color="inherit" component={Link} to="/education">Learn</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
