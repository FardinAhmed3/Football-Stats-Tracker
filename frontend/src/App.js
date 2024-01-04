import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FootballLeague from './Components/FootballLeague';
import PlayersList from './Components/PlayersList';
import TeamsList from './Components/TeamsList';
import LandingPage from './LandingPage';
import PlayerStats from './Components/PlayerStats';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap CSS

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">  Football Statistics Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/league">League</Nav.Link>
            <Nav.Link as={Link} to="/players">Players List</Nav.Link>
            <Nav.Link as={Link} to="/teams">Teams List</Nav.Link>
            <Nav.Link as={Link} to="/Stats">Stats</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/league" element={<FootballLeague />} />
        <Route path="/Stats" element={<PlayerStats/>}/>
      </Routes>
    </Router>
  );
};

export default App;