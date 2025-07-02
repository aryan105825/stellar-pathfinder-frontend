import {
  ThemeProvider,
  CssBaseline,
  Container,
 
  Box
} from '@mui/material';
import theme from './theme';

import Visualizer3D from './components/Visualizer3D';
import MissionDashboard from './components/MissionDashboard';
import LiveMissionTracker from './components/LiveMissionTracker';
import EducationalMode from './EducationalMode';
import PlanetDataTable from './components/PlanetDataTable';
import LandingChallenge from './LandingChallenge';
import HistoricalMission from './components/HistoricalMission';
import LandingPage from './components/LandingPage';  
import Navbar from './components/Navbar';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
       <Navbar />
        <Box sx={{ py: 4 }}>
          <Container>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<MissionDashboard />} />
              <Route path="/visualizer" element={<Visualizer3D />} />
              <Route path="/education" element={<EducationalMode />} />
              <Route path="/challenge" element={<LandingChallenge />} />
              <Route path="/history" element={<HistoricalMission />} />
              <Route path="/planetdata" element={<PlanetDataTable />} />
              <Route path="/livetracker" element={<LiveMissionTracker />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
