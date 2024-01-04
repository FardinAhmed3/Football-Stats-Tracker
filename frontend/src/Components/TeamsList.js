import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/teams/');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams: ', error.response ? error.response.data : error.message);
      }
    };

    fetchTeams();
  }, []);

  const addTeam = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/teams/', { name: newTeam });
      setTeams(prevTeams => [...prevTeams, response.data]);
      setNewTeam('');
    } catch (error) {
      console.error('Error adding team: ', error.response ? error.response.data : error.message);
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
