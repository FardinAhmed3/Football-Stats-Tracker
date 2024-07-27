import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { Radar } from 'react-chartjs-2';
import { MenuItem, FormControl, Select, Box, Typography } from '@mui/material';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const PlayerStats = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('players/');
        setPlayers(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Redirect to login if unauthorized
          navigate('/login');
        } else {
          console.error('Error fetching players: ', error.response ? error.response.data : error.message);
        }
      }
    };

    fetchPlayers();
  }, [navigate]);

  const handleChange = (event) => {
    setSelectedPlayerId(event.target.value);
  };

  const selectedPlayer = players.find(player => player.id === selectedPlayerId);

  const data = {
    labels: ['Pace', 'Attack', 'Defense', 'Physique', 'Dribble', 'Stamina'],
    datasets: [
      {
        label: 'Player Stats',
        data: selectedPlayer ? [
          selectedPlayer.pace,
          selectedPlayer.attack,
          selectedPlayer.defense,
          selectedPlayer.physique,
          selectedPlayer.dribble,
          selectedPlayer.stamina
        ] : [0, 0, 0, 0, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Player Statistics
      </Typography>

      <FormControl fullWidth margin="normal">
        <Select
          value={selectedPlayerId}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select a Player
          </MenuItem>
          {players.map((player) => (
            <MenuItem key={player.id} value={player.id}>
              {player.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ height: 400, mt: 3 }}>
        <Radar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default PlayerStats;
