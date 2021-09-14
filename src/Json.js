import axios from "axios";
import React, { useState, useEffect } from "react";

const url = "https://api.guildwars2.com/v2/pets/33";
const wikiUrl = "https://wiki.guildwars2.com/wiki/";
const Json = () => {
//    const loading = false;
//    const pet = 'Moro';

        const [pet, setPet] = useState(null);

        useEffect(() => {
            axios
                .get(url)
                .then(({ data }) => {
                    setPet(data)
                })
        }, []);

        return pet ? (
            <div>
                    <div className="card">
                        <h1>{pet.name}</h1>
                        <img src={pet.icon} alt={pet.name}
                            width="100%" />
                        <div>{pet.description}</div>
                        <p><a className="button1"
                            href={wikiUrl + pet.name.replace(/\s+/g, '_')}
                            target="_blank" rel="noreferrer">Go to Wiki</a></p>
                    </div>
                )}
            </div>
        ): (
            <div>Loading...</div>
        )
          
}
export default Json;