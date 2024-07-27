import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('teams/');
        setTeams(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Redirect to login if unauthorized
          navigate('/login');
        } else {
          console.error('Error fetching teams: ', error.response ? error.response.data : error.message);
        }
      }
    };

    fetchTeams();
  }, [navigate]);

  const addTeam = async () => {
    try {
      const response = await axios.post('teams/', { name: newTeam });
      setTeams(prevTeams => [...prevTeams, response.data]);
      setNewTeam('');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login if unauthorized
        navigate('/login');
      } else {
        console.error('Error adding team: ', error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Teams List
      </Typography>
      <TextField
        label="New Team Name"
        variant="outlined"
        value={newTeam}
        onChange={(e) => setNewTeam(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addTeam}>
        Add Team
      </Button>
      <List>
        {teams.map((team) => (
          <ListItem key={team.id}>
            <ListItemText primary={team.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TeamsList;
