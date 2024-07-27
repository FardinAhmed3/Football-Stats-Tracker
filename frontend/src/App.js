import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import FootballLeague from './Components/FootballLeague';
import PlayersList from './Components/PlayersList';
import TeamsList from './Components/TeamsList';
import LandingPage from './LandingPage';
import PlayerStats from './Components/PlayerStats';
import Login from './Components/Login';
import Register from './Components/Register';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

const AppContent = () => {
  const { authTokens, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Football Statistics Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/league">League</Nav.Link>
            <Nav.Link as={Link} to="/players">Players List</Nav.Link>
            <Nav.Link as={Link} to="/teams">Teams List</Nav.Link>
            <Nav.Link as={Link} to="/stats">Stats</Nav.Link>
            {authTokens ? (
              <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/league" element={<FootballLeague />} />
        <Route path="/stats" element={<PlayerStats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/protected" element={<FootballLeague />} /> {/* Example protected route */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
