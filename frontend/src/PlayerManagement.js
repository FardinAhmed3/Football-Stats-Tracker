import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FootballLeague.css';

const PlayerManagement = () => {
    const [playerGameStats, setPlayerGameStats] = useState({});
    const [playerPersonalStats, setPlayerPersonalStats] = useState({});

    useEffect(() => {
       
        setPlayerGameStats({
            goals: 0,
            assists: 0,
            interceptions: 0,
            fouls: 0
        });
        setPlayerPersonalStats({
            pace: 0,
            stamina: 0,
            defense: 0,
            attack: 0,
            dribble: 0,
            physique: 0
        });
    }, []);

    const handleGameStatChange = (name, value) => {
        setPlayerGameStats(prevStats => ({
            ...prevStats,
            [name]: parseInt(value, 10)
        }));
    };

    const handlePersonalStatChange = (name, value) => {
        setPlayerPersonalStats(prevStats => ({
            ...prevStats,
            [name]: parseInt(value, 10)
        }));
    };

    const addPlayer = async () => {
        const playerData = {
            gameStats: playerGameStats,
            personalStats: playerPersonalStats
        };

        try {
            const response = await axios.post('http://localhost:8000/api/players', playerData);
            console.log(response.data); // Handle response as needed
        } catch (error) {
            console.error('Error adding player: ', error);
        }

        // Reset form
        setPlayerGameStats({});
        setPlayerPersonalStats({});
    };

    return (
        <div className="container">
            <h2>Create Player</h2>
            <div>
                <h3>Game Stats</h3>
                {Object.keys(playerGameStats).map(key => (
                    <input
                        key={key}
                        type="number"
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={playerGameStats[key]}
                        onChange={e => handleGameStatChange(key, e.target.value)}
                    />
                ))}
            </div>

            <div>
                <h3>Personal Stats</h3>
                {Object.keys(playerPersonalStats).map(key => (
                    <input
                        key={key}
                        type="number"
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={playerPersonalStats[key]}
                        onChange={e => handlePersonalStatChange(key, e.target.value)}
                    />
                ))}
            </div>

            <button onClick={addPlayer}>Add Player</button>
        </div>
    );
};

export default PlayerManagement;
