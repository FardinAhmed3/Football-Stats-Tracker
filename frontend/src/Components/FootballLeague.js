import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FootballLeague = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState('');
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    goals: '',
    assists: '',
    interceptions: '',
    fouls: '',
    pace: '',
    stamina: '',
    defense: '',
    attack: '',
    dribble: '',
    physique: ''
  });
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

  const addPlayer = async () => {
    try {
      const playerData = {
        name: newPlayer.name,
        goals: newPlayer.goals ? parseInt(newPlayer.goals, 10) : 0,
        assists: newPlayer.assists ? parseInt(newPlayer.assists, 10) : 0,
        interceptions: newPlayer.interceptions ? parseInt(newPlayer.interceptions, 10) : 0,
        fouls: newPlayer.fouls ? parseInt(newPlayer.fouls, 10) : 0,
        pace: newPlayer.pace ? parseInt(newPlayer.pace, 10) : 0,
        stamina: newPlayer.stamina ? parseInt(newPlayer.stamina, 10) : 0,
        defense: newPlayer.defense ? parseInt(newPlayer.defense, 10) : 0,
        attack: newPlayer.attack ? parseInt(newPlayer.attack, 10) : 0,
        dribble: newPlayer.dribble ? parseInt(newPlayer.dribble, 10) : 0,
        physique: newPlayer.physique ? parseInt(newPlayer.physique, 10) : 0,
      };

      const response = await axios.post('players/', playerData);
      console.log('Player added:', response.data);
      // Reset the player form to initial state
      setNewPlayer({
        name: '',
        goals: '',
        assists: '',
        interceptions: '',
        fouls: '',
        pace: '',
        stamina: '',
        defense: '',
        attack: '',
        dribble: '',
        physique: ''
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Redirect to login if unauthorized
        navigate('/login');
      } else {
        console.error('Error creating player: ', error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h4">Create Team</Typography>
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
      </Box>

      <List>
        {teams.map((team) => (
          <ListItem key={team.id}>
            <ListItemText primary={team.name} />
          </ListItem>
        ))}
      </List>

      <Box mt={4}>
        <Typography variant="h4">Create Player</Typography>
        <TextField
          label="Player Name"
          variant="outlined"
          value={newPlayer.name}
          onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Goals"
          type="number"
          variant="outlined"
          value={newPlayer.goals}
          onChange={(e) => setNewPlayer({ ...newPlayer, goals: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Assists"
          type="number"
          variant="outlined"
          value={newPlayer.assists}
          onChange={(e) => setNewPlayer({ ...newPlayer, assists: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Interceptions"
          type="number"
          variant="outlined"
          value={newPlayer.interceptions}
          onChange={(e) => setNewPlayer({ ...newPlayer, interceptions: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Fouls"
          type="number"
          variant="outlined"
          value={newPlayer.fouls}
          onChange={(e) => setNewPlayer({ ...newPlayer, fouls: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Pace"
          type="number"
          variant="outlined"
          value={newPlayer.pace}
          onChange={(e) => setNewPlayer({ ...newPlayer, pace: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Attack"
          type="number"
          variant="outlined"
          value={newPlayer.attack}
          onChange={(e) => setNewPlayer({ ...newPlayer, attack: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Defense"
          type="number"
          variant="outlined"
          value={newPlayer.defense}
          onChange={(e) => setNewPlayer({ ...newPlayer, defense: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dribble"
          type="number"
          variant="outlined"
          value={newPlayer.dribble}
          onChange={(e) => setNewPlayer({ ...newPlayer, dribble: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Stamina"
          type="number"
          variant="outlined"
          value={newPlayer.stamina}
          onChange={(e) => setNewPlayer({ ...newPlayer, stamina: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Physique"
          type="number"
          variant="outlined"
          value={newPlayer.physique}
          onChange={(e) => setNewPlayer({ ...newPlayer, physique: e.target.value })}
          fullWidth
          margin="normal"
        />
        {/* Repeat to add more fields */}
        <Button variant="contained" color="primary" onClick={addPlayer}>
          Create Player
        </Button>
      </Box>
    </Container>
  );
};

export default FootballLeague;
