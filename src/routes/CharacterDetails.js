import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


function CharacterDetails() {
    const [character, setCharacter] = useState(null)
    const params = useParams();
    const url = `https://api.disneyapi.dev/characters/${params.name}`

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data);
                console.log(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    if (!character) {
        return <>loading...</>;
    }

    return (
        <div>
      <img width="300" height="300" src={`https://img.pokemondb.net/artwork/large/${params.name}.jpg`} />
      <h1>{params.name}</h1>
      <p>height: {character.height}</p>
      <p>weight: {character.weight}</p>
      <div>
        <p>abilities:</p>
        <ul>
          {character.abilities.map((ability) => (
            <li key={ability.ability.name}>
              <span>{ability.ability.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>types:</p>
        <ul>
          {character.types.map((type) => (
            <li key={type.type.name}>
              <span>{type.type.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>stats:</p>
        <ul>
          {character.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span>{stat.stat.name}: </span>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}
export { CharacterDetails }