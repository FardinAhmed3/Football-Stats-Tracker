import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const PlayersList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/players');
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching players: ', error.response ? error.response.data : error.message);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" component="h2" gutterBottom>
        Players List
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Goals</TableCell>
            <TableCell align="right">Assists</TableCell>
            <TableCell align="right">Interceptions</TableCell>
            <TableCell align="right">Fouls</TableCell>
            <TableCell align="right">Pace</TableCell>
            <TableCell align="right">Attack</TableCell>
            <TableCell align="right">Defense</TableCell>
            <TableCell align="right">Dribble</TableCell>
            <TableCell align="right">Stamina</TableCell>
            <TableCell align="right">Physique</TableCell>
            {/* Add other headers here */}
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell align="right">{player.goals}</TableCell>
              <TableCell align="right">{player.assists}</TableCell>
              <TableCell align="right">{player.interceptions}</TableCell>
              <TableCell align="right">{player.fouls}</TableCell>
              <TableCell align="right">{player.pace}</TableCell>
              <TableCell align="right">{player.attack}</TableCell>
              <TableCell align="right">{player.defense}</TableCell>
              <TableCell align="right">{player.dribble}</TableCell>
              <TableCell align="right">{player.stamina}</TableCell>
              <TableCell align="right">{player.physique}</TableCell>
              {/* Add other player attributes here */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayersList;
