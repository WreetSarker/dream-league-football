import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css'
const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
            .then(resp => resp.json())
            .then(data => setLeagues(data.countrys))
    }, []);
    return (
        <div>
            <div className="header">
                <h1 className="text">Top Leagues from England!</h1>
            </div>
            {
                leagues.map(league => <Leagues league={league}></Leagues>)
            }
        </div>
    );
};

export default Home;