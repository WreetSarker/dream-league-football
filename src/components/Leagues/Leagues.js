import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Leagues.css'


const Leagues = (props) => {
    const { strBadge, strLeague, strSport, idLeague } = props.league;
    const history = useHistory();
    const explore = (idLeague) => {
        const url = `/league/${idLeague}`;
        history.push(url);
    }
    return (
        <div className="leagues-container">
            <div className="grid-item">
                <img className="league-img" src={strBadge} alt="" />
                <h1 className="league-name">{strLeague}</h1>
                <h5>Sports type: {strSport}</h5>
                <button className="explore-btn" onClick={() => explore(idLeague)}>Explore  <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>


    );
};

export default Leagues;