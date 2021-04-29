import React from 'react';
import './Teaminfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { Container } from 'react-bootstrap';
const Teaminfo = (props) => {
  //  console.log(props.Team);
    const {strTeamLogo,strTeam,strSport,idTeam,idAPIfootball} =props.Team;
    return (
      <div className="main-container">
        <div className='container-info'>
            <div className='container'>
               <div className='team-info-img'>
                   <img src={strTeamLogo} alt=""/>
                   <h3>{strTeam}</h3>
                   <p>Sports type:{strSport}</p>
                   <Link to="/TeamDetails/"> <button onClick={() => props.handleEven(idTeam)} > Explore  <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                   
               </div> 
              
               </div>
        </div>
        </div>
 
    );
};

export default Teaminfo;