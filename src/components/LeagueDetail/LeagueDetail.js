import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.png';
import female from '../../images/female.png';
import twitter from '../../images/Twitter.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/YouTube.png';
import './LeagueDetail.css';

const LeagueDetail = () => {
    const { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(resp => resp.json())
            .then(data => setLeagueDetail(data.leagues[0]))
    }, []);

    const { strBadge, strLeague, intFormedYear, strCountry, strSport, strGender, strTwitter, strFacebook, strYoutube } = leagueDetail;
    return (
        <div>
            <div className="league-badge">
                <img src={strBadge} alt="" />
            </div>
            <div className="league-info">
                <div className="details">
                    <h2>{strLeague}</h2>
                    <h4>Founded: {intFormedYear}</h4>
                    <h4>Country: {strCountry}</h4>
                    <h4>Sports Type: {strSport}</h4>
                    <h4>Gender: {strGender}</h4>
                </div>
                <div className="gender-img">
                    <img src={strGender === "Male" ? male : female} alt="" />
                </div>
            </div>
            <p><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facilis corrupti labore unde excepturi obcaecati porro, mollitia, voluptates a suscipit natus ut quisquam quis, culpa doloremque provident officia. Sed, temporibus!</span><span>Voluptatum pariatur culpa, velit qui tempora illo, ab quis neque laborum alias accusamus fugit veniam perspiciatis fuga recusandae error voluptate, dolore molestias omnis? Blanditiis alias nesciunt, quibusdam quos molestias quo.</span><span>Cumque laudantium, quidem obcaecati, fuga vero numquam suscipit assumenda soluta a, quibusdam qui dolorem necessitatibus delectus. Odio cupiditate iure provident suscipit sequi ipsum? Animi dolore accusantium at veniam. Vel, explicabo.</span><span>Sint, dicta at sapiente distinctio qui explicabo? Eius sed placeat nemo veritatis deleniti. Quis, iste! Maiores fugit vitae laborum nemo, voluptate reiciendis praesentium, cum nulla, qui culpa porro eaque possimus!</span><span>Quisquam laboriosam error, aliquam reprehenderit reiciendis esse. Odio aut, doloremque, incidunt a magni consequatur consectetur, laboriosam aliquam omnis molestias distinctio quae? Odit enim consequatur illum impedit corporis porro consectetur placeat?</span><span>Sapiente nemo in provident reiciendis rem velit placeat earum veritatis distinctio nihil ad minus, corrupti necessitatibus! Laudantium, sit in asperiores voluptas, cum veniam eos nesciunt illo quaerat sed nobis laborum?</span><span>Ratione magni nostrum excepturi est possimus placeat, dolore ipsum! Rem perspiciatis tenetur exercitationem tempora voluptas dolor, omnis quo, aliquam nostrum, excepturi incidunt nisi! Alias, vero neque. Sequi odio harum itaque.</span><span>Blanditiis, minima culpa quibusdam adipisci mollitia totam, in, fugit molestiae cum asperiores placeat autem? Perspiciatis vitae fugiat ipsam quisquam amet corrupti at! Harum impedit quo aliquid, sunt voluptatem veritatis dicta.</span><span>Sunt, voluptatem similique suscipit sint quisquam vero, animi atque corporis eligendi pariatur deserunt incidunt quidem sit laborum dolores temporibus praesentium iure veniam consectetur, recusandae eius. Delectus eius eos quisquam omnis.</span><span>Similique fuga dicta maiores natus soluta? Quisquam porro enim omnis dolorem cum, amet quos, fuga aliquid doloremque impedit optio magnam consequuntur est. Fuga illo quam tempora suscipit molestiae molestias fugit.</span></p>
            <div className="icons">
                <a href={`https://${strTwitter}`} target="_blank"> <img src={twitter} alt="" /></a>
                <a href={`https://${strFacebook}`} target="_blank"><img src={facebook} alt="" /></a>
                <a href={`https://${strYoutube}`} target="_blank"><img src={youtube} alt="" /></a>

            </div>
        </div>

    );
};

export default LeagueDetail;