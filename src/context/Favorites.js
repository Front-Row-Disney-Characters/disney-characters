import React, { useState } from 'react';
import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import {user} from '../routes/UserDetails';

const FavoritesList = createContext()
const Favorites=({children})=>{
    const [favorite, setFavorite] = useState([]);

    const toggleCharacter=()=>{
        setFavorite([...favorite, user]);
    }

    return(
        <>
        <FavoritesList.Provider value={{favorite, toggleCharacter}}>
            {children}
        </FavoritesList.Provider>
        </>
    )
}
export {Favorites, FavoritesList};
