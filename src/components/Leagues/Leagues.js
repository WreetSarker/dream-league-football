import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Leagues = (props) => {
    const { strBadge, strLeague, strSport, idLeague } = props.league;
    const history = useHistory();
    const explore = (idLeague) => {
        const url = `/league/${idLeague}`;
        history.push(url);
    }
    return (
        <div>
            <img src={strBadge} alt="" />
            <h1>{strLeague}</h1>
            <h5>Sports type: {strSport}</h5>
            <button onClick={() => explore(idLeague)}>Explore  <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Leagues;