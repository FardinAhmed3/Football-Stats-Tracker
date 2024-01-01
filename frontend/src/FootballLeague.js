// src/FootballLeague.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FootballLeague.css'; // Ensure this CSS file exists in the src folder

// Set the base URL for all Axios requests
axios.defaults.baseURL = 'http://localhost:8000/api';

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

  // Fetch teams from the backend
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('/teams/');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams: ', error.response ? error.response.data : error.message);
      }
    };

    fetchTeams();
  }, []);

  const addTeam = async () => {
    try {
      const response = await axios.post('/teams/', { name: newTeam });
      setTeams(prevTeams => [...prevTeams, response.data]);
      setNewTeam('');
    } catch (error) {
      console.error('Error adding team: ', error.response ? error.response.data : error.message);
    }
  };

  const addPlayer = async () => {
    try {
      // Prepare player data without the team field
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
  
      const response = await axios.post('/players/', playerData);
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
      console.error('Error creating player: ', error.response ? error.response.data : error.message);
    }
  };

  // UI for creating teams and players
  return (
    <div className="container">
      <h2>Create Team</h2>
      <input 
        type="text" 
        value={newTeam} 
        onChange={(e) => setNewTeam(e.target.value)} 
      />
      <button onClick={addTeam}>Add Team</button>

      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>

      <h2>Create Player</h2>
      <input 
        type="text" 
        placeholder="Player Name"
        value={newPlayer.name}
        onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
      />
      {/* Repeat input fields for each player attribute */}
      <input 
        type="number" 
        placeholder="Goals"
        value={newPlayer.goals}
        onChange={(e) => setNewPlayer({ ...newPlayer, goals: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Assists"
        value={newPlayer.assists}
        onChange={(e) => setNewPlayer({ ...newPlayer, assists: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Interceptions"
        value={newPlayer.interceptions}
        onChange={(e) => setNewPlayer({ ...newPlayer, interceptions: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Fouls"
        value={newPlayer.fouls}
        onChange={(e) => setNewPlayer({ ...newPlayer, fouls: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Pace Stat"
        value={newPlayer.pace}
        onChange={(e) => setNewPlayer({ ...newPlayer, pace: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Defense Stat"
        value={newPlayer.defense}
        onChange={(e) => setNewPlayer({ ...newPlayer, defense: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Attack Stat"
        value={newPlayer.attack}
        onChange={(e) => setNewPlayer({ ...newPlayer, attack: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Dribble Stat"
        value={newPlayer.dribble}
        onChange={(e) => setNewPlayer({ ...newPlayer, dribble: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Physique Stat"
        value={newPlayer.physique}
        onChange={(e) => setNewPlayer({ ...newPlayer, physique: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Stamina Stat"
        value={newPlayer.stamina}
        onChange={(e) => setNewPlayer({ ...newPlayer, stamina: e.target.value })}
      />
      {/* Repeat for other attributes */}
      {/* Include inputs for assists, interceptions, fouls, pace, stamina, defense, attack, dribble, physique */}
      {/* Ensure proper validation for each input field */}

      <button onClick={addPlayer}>Create Player</button>
    </div>
  );
};

export default FootballLeague;
