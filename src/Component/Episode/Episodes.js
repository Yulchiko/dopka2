import React, {useEffect, useState} from 'react';

import EpisodeComponent from "./EpisodeComponent";
import {EpisodeService} from "../../Service/EpisodeService";

import "./Episodes.css"

export  default  function Episodes() {

    const [episodes, setEpisodes] = useState({
        info: undefined,
        results: [],
    });

    const [page, setPage] = useState(1);

    useEffect(() => {
        EpisodeService.getAllData(page).then(episode => setEpisodes(episode));
    }, [page]);

    return (
        <div>
            <h2 className="Morty">Rick and Morty episodes</h2>
            <div className="episodes">
                {episodes.results.map(episode => <EpisodeComponent key={episode.id} episode={episode}/>)}
            </div>
            <div className="buttons">
                {episodes.info?.prev && (
                    <button onClick={() => setPage(page - 1)}>Previous</button>)}
                {episodes.info?.next && (
                    <button onClick={() => setPage(page + 1)}>Next</button>)}
            </div>
        </div>
    );
};

