import React, {useEffect, useState} from 'react';
import {CharacterService} from "../../Service/CharacterService";

import "./Character.css"

export default function Character({id}) {

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        CharacterService.getByIdData(id).then(value => setCharacter(value));
    }, [id]);

    if (!character) {
        return null;
    }
    return (
        <div className="Flex">
            <div className="characters">
                <div><img src={character.image} alt="character"/></div>
                <div className="Name"> <div>name:{character.name}</div>
                <div>species:{character.species}</div>
                <div>status:{character.status}</div>
                <div>origin:{character.origin.name}</div></div>
            </div>
                </div>
    );
};
