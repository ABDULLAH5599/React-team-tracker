import React, { useEffect, useState } from 'react';
import image from '../../image/soccer.jpg';
import image2 from '../../image/Team Logo/image 15.png'
import image3 from '../../image/Photo/male.png'
import image4 from '../../image/Photo/female.png'


import './TeamDetails..css'
import { useParams } from 'react-router';
const TeamDetails = () => {
    const {id}= useParams();
    console.log(id);
    const [teaminfo,setTeaminfo]= useState([]);
    
    console.log(teaminfo);
    console.log(teaminfo.strCountry);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeaminfo(data.teams[0]));
        
    },[]);
    let ChangeGenger;
    if(teaminfo.strGender=='Female'){
       ChangeGenger = <img src={image3} alt=""/>
    }else{
        ChangeGenger = <img src={teaminfo.strTeamFanart1} alt=""/>
    }
    return (
        <div>
            <div className='team-img-section'>
                <img className='img-one' src={image} alt=""/>
                <img className='img-two' src={teaminfo.strTeamLogo} alt=""/>
            </div>
            <div className='team-details-section'>
               <div className='team-name'>
                   <h1>{teaminfo.strTeam}</h1>
                    <p> Founded :{teaminfo.intFormedYear}</p>
                    <p>Country: {teaminfo.strCountry}</p>
                    <p> Sport Type: {teaminfo.strSport}</p>
                    <p>Gender: {teaminfo.strGender}</p>
               </div> 
               <div className='team-img'>
                   {ChangeGenger}
                </div> 
         
            </div>
            <div className="team-about">
            <p>{teaminfo.strDescriptionEN}</p>
                </div>
        </div>
    );
};
 
export default TeamDetails;