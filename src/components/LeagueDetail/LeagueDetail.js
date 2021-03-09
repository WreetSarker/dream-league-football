import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetail = () => {
    const { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(resp => resp.json())
            .then(data => setLeagueDetail(data.leagues[0]))
    }, []);
    console.log(leagueDetail);
    const { strBadge, strLeague, intFormedYear, strCountry, strSport, strGender } = leagueDetail;
    return (
        <div>

        </div>
    );
};

export default LeagueDetail;