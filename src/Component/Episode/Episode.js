import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link} from "react-router-dom";

import {EpisodeService} from "../../Service/EpisodeService";
import Character from "../Character/Character";

import "./Episode.css"

export default function Episode() {

    const {id} = useParams();
    const location = useLocation();
    const {state} = location;

    const [episode, setEpisode] = useState(state?.episode);

    useEffect(() => {
            EpisodeService.getByIdData(id).then(value => setEpisode(value));
    }, [id]);

    return (
        <div>
            <Link to="/">
                <h3 className="Rick">The Rick and Morty!</h3>
            </Link>

            <div className="ter">
                <h2>Rick & Morty's Thanksploitation Spectacular</h2>
                <div>Episode - {episode.name}</div>

                <div>Air date - {episode.air_date}</div>
            </div>
            <div className="character">
                {episode?.characters.map(characterLink => {
                    const id = getCharacterIdFromLink(characterLink);
                    return (
                        <Character id={id} key={id}/>
                    );
                })}
            </div>
        </div>
    );
};



function getCharacterIdFromLink(link) {
    const linkParts = link.split('/');
    const id = linkParts[linkParts.length - 1];
    return id;
}