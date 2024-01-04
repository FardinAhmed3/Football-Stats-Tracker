import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to the Football Statistics Tracker
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Track, analyze, improve.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" component={Link} to="/teams">
            View Teams
          </Button>
          <Button variant="contained" color="secondary" component={Link} to="/players" style={{ marginLeft: '10px' }}>
            View Players
          </Button>
        </Box>

      </Box>
    </Container>
  );
};

export default LandingPage;

