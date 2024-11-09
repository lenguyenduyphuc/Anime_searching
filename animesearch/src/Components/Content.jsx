import React from 'react'
import Anime from './Anime'

const Anime = ({animes, setAnimes}) => {
    if (animes.length > 20){
        return (
            <p>
                Too many matches
            </p>
        )
    } else if ((animes.length > 2 && animes.length <20) || animes.length === 0){
        return (
            <ul>
                {animes.map((anime, i) => (
                    <li key={i}>
                    {anime.title}
                    <button onClick={() => setAnimes([anime])}>show</button>
                </li>
                ))}
            </ul>
        )
    }
}

export default Content