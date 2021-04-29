import React, { useEffect, useState } from 'react';
import Teaminfo from '../TeamInfo/Teaminfo';
import soccerImage from '../../image/soccer.jpg'
import './Team.css'
import { useHistory } from 'react-router';

const Team = () => {
    const [teams ,setTeams] =useState([]);
    const history =useHistory();
    const handleEven = (teamId) =>{
       const url =`teamDetails/${teamId}`;
       history.push(url);
    }

    useEffect(()=>{
         fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`)
         .then(res => res.json())
         .then(data => setTeams(data.teams))
        
    },[])



    return (
        <div >
        <div className="header-img">
        <img src={soccerImage} alt=""/> 
        <h1 className='header-title'>Team Tracker</h1>
        </div>
        <div className='team-container'>
           
            <div>
             {
                teams.map(Info => <Teaminfo handleEven={handleEven} Team={Info}></Teaminfo>) 
             }
             </div>
        </div>
        </div>
    );
};

export default Team;